<?php
   /*
   Plugin Name: BluTigr ACF Mutations
   Plugin URI: https://blutigr.com
   description: Adding wpgraphql mutation support to acf fields
   Version: 1.0
   License: GPL3
   */
?>

<?php

// Add the ACF fields to mutation inputs
add_action( 'graphql_input_fields', function ( $fields, $type_name, $config ) { 

    // USERS
    // CreateUserInput fields
    if ( $type_name === 'CreateUserInput' ) {
		$fields = array_merge( $fields, [
			// add the fields to the input element of the update user input type.
			// 'github'   => [ 'type' => 'String' ],
			// 'linkedIn' => [ 'type' => 'String' ],
			// 'twitter'  => [ 'type' => 'String' ], 
		] );
    }
    // UpdateUserInput fields
    if ( $type_name === 'UpdateUserInput' ) {
		$fields = array_merge( $fields, [
			// add the fields to the input element of the update user input type.
			// 'github'   => [ 'type' => 'String' ],
			// 'linkedIn' => [ 'type' => 'String' ],
			// 'twitter'  => [ 'type' => 'String' ], 
		] );
    }


    // TRICKS
    // CreateTrickInput fields
    if ( $type_name === 'CreateTrickInput' ) {
		$fields = array_merge( $fields, [
			// add the fields to the input element of the CreateTrickInput type.
			'youtubeLink' => [ 'type' => 'String' ],
			'trickNames' => [ 'type' => 'String' ],
			'trickTags' => [ 'type' => 'String' ],
		] );
    }
    // UpdateTrickInput fields
    if ( $type_name === 'UpdateTrickInput' ) {
		$fields = array_merge( $fields, [
			// add the fields to the input element of the update user input type.
			'youtubeLink' => [ 'type' => 'String' ],
			'trickName' => [ 'type' => 'Int' ],
			'trickTag' => [ 'type' => 'Int' ],
		] );
    }

	return $fields;
}, 20, 3 );



// UPDATE MUTATION META FIELDS

/*
 * User Object mutation 
 *
 */

add_action( 'graphql_user_object_mutation_update_additional_data', function ( $user_id, $input, $mutation_name, $context, $info ) {
	if ( isset( $input['github'] ) ) {
		// Consider other sanitization if necessary and validation such as which
		// user role/capability should be able to insert this value, etc.
		// update_user_meta( $user_id, 'github', $input['github'] );
	}
	if ( isset( $input['linkedIn'] ) ) {
		// Consider other sanitization if necessary and validation such as which
		// user role/capability should be able to insert this value, etc.
		// update_user_meta( $user_id, 'linkedin', $input['linkedIn'] );
	}
	if ( isset( $input['twitter'] ) ) {
		// Consider other sanitization if necessary and validation such as which
		// user role/capability should be able to insert this value, etc.
		// update_user_meta( $user_id, 'twitter', $input['twitter'] );
	}
}, 10, 5 );





/*
 * Post Object mutation 
 *
*/
add_action( 'graphql_post_object_mutation_update_additional_data', function ( $post_id, $input, $mutation_name, $context, $info ) {

	// Relationship Helper
	function relationship_helper( $current_field, $input_id ) {
		// If type is array and has cells
		if ( gettype( $current_field ) == 'array' && count( $current_field ) > 0 ) {
			// input_id found in array => unset it
			if ( array_search( $input_id, $current_field ) !== false ) {
				$arr_search = array_search( $input_id, $current_field );
				unset( $current_field[ $arr_search ]);
				if ( count($current_field) > 0 ) {
					return $current_field;
				} else {
					return null;
				}
			} 
			// input_id not found in array => add it
			else {
				array_push( $current_field, $input_id );
				return $current_field; 
			}
		}
		// Relationships undefined => create array with input_id in it
		else {
			return array( $input_id );
		}	
	} // End relationship_helper

	// Youtube Link
	if ( isset($input['youtubeLink']) ) {
		update_field( 'youtube_link', $input['youtubeLink'], $post_id );
	}

	// CreateTrick Mutation - TrickNames
	if ( isset($input['trickNames']) && gettype( json_decode($input['trickNames'])) == 'array' ) {
		// Update trick names on created trick post
		update_field( 'trick_names', json_decode( $input['trickNames']), $post_id );
		// update tagged tricks on trick name posts
		foreach( json_decode( $input['trickNames']) as $trick_name_id ) {
			update_field( 'tagged_tricks', relationship_helper( get_field( 'tagged_tricks', $trick_name_id ), $post_id ), $trick_name_id );
		} unset( $trick_name_id );
	}

	// UpdateTrick Mutation - TrickName
	if ( isset($input['trickName']) ) {
		// Update trick names on current post
		update_field( 'trick_names', relationship_helper( get_field( 'trick_names', $post_id ), $input['trickName'] ), $post_id );
		// update tagged tricks on trick name post
		update_field('tagged_tricks', relationship_helper( get_field( 'tagged_tricks', $input['trickName'] ), $post_id ), $input['trickName'] );
	}

	// CreateTrick Mutation - TrickTags
	if ( isset($input['trickTags']) && gettype(json_decode($input['trickTags'])) == 'array' ) {
		// Update trick tags on created trick post
		update_field('trick_tags', json_decode($input['trickTags']), $post_id);
		// update tagged tricks on trick tag posts
		foreach( json_decode( $input['trickNames']) as $trick_tag_id ) {
			update_field( 'tagged_tricks', relationship_helper( get_field( 'tagged_tricks', $trick_tag_id ), $post_id ), $trick_tag_id );
		} unset( $trick_tag_id );
	}

	// UpdateTrick Mutation - TrickTag
	if ( isset($input['trickTag']) ) {
		// Update trick tags on current post
		update_field( 'trick_tags', relationship_helper( get_field( 'trick_tags', $post_id ), $input['trickTag'] ), $post_id ); 
		// update tagged tricks on trick tag post
		update_field('tag_tricklist', relationship_helper( get_field( 'tag_tricklist', $input['trickTag'] ), $post_id ), $input['trickTag'] );
	}
}, 10, 5 );
