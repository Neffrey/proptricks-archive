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

// the important part for ACF mutations specifically and also in general for input actions.
// adds the input fields for the ACF fields to add, or just general fields you would want to add.
add_action( 'graphql_input_fields', function ( $fields, $type_name, $config ) { 

    // todo 
    // USERS
    // CreateUserInput fields
    if ( $type_name === 'CreateUserInput' ) {
		$fields = array_merge( $fields, [
			// add the fields to the input element of the update user input type.
			'github'   => [ 'type' => 'String' ],
			'linkedIn' => [ 'type' => 'String' ],
			'twitter'  => [ 'type' => 'String' ], 
		] );
    }

    // todo 
    // UpdateUserInput fields
    if ( $type_name === 'UpdateUserInput' ) {
		$fields = array_merge( $fields, [
			// add the fields to the input element of the update user input type.
			//'github'   => [ 'type' => 'String' ],
			//'linkedIn' => [ 'type' => 'String' ],
			'twitter'  => [ 'type' => 'String' ], 
		] );
    }



    // todo 
    // TRICKS
    // CreateTrickInput fields
    if ( $type_name === 'CreateTrickInput' ) {
		$fields = array_merge( $fields, [
			/* add the fields to the input element of the update user input type.
			'github'   => [ 'type' => 'String' ],
			'linkedIn' => [ 'type' => 'String' ],
			'twitter'  => [ 'type' => 'String' ], */
		] );
    }

    // todo 
    // UpdateTrickInput user fields
    if ( $type_name === 'UpdateTrickInput' ) {
		$fields = array_merge( $fields, [
			/* add the fields to the input element of the update user input type.
			'github'   => [ 'type' => 'String' ],
			'linkedIn' => [ 'type' => 'String' ],
			'twitter'  => [ 'type' => 'String' ], */
		] );
    }

    

    // todo 
    // TRICKNAMES
    // CreateTrickNameInput fields
    if ( $type_name === 'CreateTrickNameInput' ) {
		$fields = array_merge( $fields, [
			/* add the fields to the input element of the update user input type.
			'github'   => [ 'type' => 'String' ],
			'linkedIn' => [ 'type' => 'String' ],
			'twitter'  => [ 'type' => 'String' ], */
		] );
    }

    // todo 
    // UpdateTrickNameInput user fields
    if ( $type_name === 'UpdateTrickNameInput' ) {
		$fields = array_merge( $fields, [
			/* add the fields to the input element of the update user input type.
			'github'   => [ 'type' => 'String' ],
			'linkedIn' => [ 'type' => 'String' ],
			'twitter'  => [ 'type' => 'String' ], */
		] );
    }

    

    // todo 
    // TRICKTAGS
    // CreateTrickTagInput fields
    if ( $type_name === 'CreateTrickTagInput' ) {
		$fields = array_merge( $fields, [
			/* add the fields to the input element of the update user input type.
			'github'   => [ 'type' => 'String' ],
			'linkedIn' => [ 'type' => 'String' ],
			'twitter'  => [ 'type' => 'String' ], */
		] );
    }

    // todo 
    // UpdateTrickTagInput user fields
    if ( $type_name === 'UpdateTrickTagInput' ) {
		$fields = array_merge( $fields, [
			/* add the fields to the input element of the update user input type.
			'github'   => [ 'type' => 'String' ],
			'linkedIn' => [ 'type' => 'String' ],
			'twitter'  => [ 'type' => 'String' ], */
		] );
    }

    

    // todo 
    // TRICKVOTES
    // CreateTrickVoteInput fields
    if ( $type_name === 'CreateTrickVoteInput' ) {
		$fields = array_merge( $fields, [
			/* add the fields to the input element of the update user input type.
			'github'   => [ 'type' => 'String' ],
			'linkedIn' => [ 'type' => 'String' ],
			'twitter'  => [ 'type' => 'String' ], */
		] );
    }

    
    // todo 
    // UpdateTrickVoteInput user fields
    if ( $type_name === 'UpdateTrickVoteInput' ) {
		$fields = array_merge( $fields, [
			/* add the fields to the input element of the update user input type.
			'github'   => [ 'type' => 'String' ],
			'linkedIn' => [ 'type' => 'String' ],
			'twitter'  => [ 'type' => 'String' ], */
		] );
    }

    

    
	return $fields;
}, 20, 3 );



// UPDATE MUTATION META FIELDS

/*
 * Example: User Object mutation 
 *
add_action( 'graphql_user_object_mutation_update_additional_data', function ( $user_id, $input, $mutation_name, $context, $info ) {
	if ( isset( $input['github'] ) ) {
		// Consider other sanitization if necessary and validation such as which
		// user role/capability should be able to insert this value, etc.
		update_user_meta( $user_id, 'github', $input['github'] );
	}
	if ( isset( $input['linkedIn'] ) ) {
		// Consider other sanitization if necessary and validation such as which
		// user role/capability should be able to insert this value, etc.
		update_user_meta( $user_id, 'linkedin', $input['linkedIn'] );
	}
	if ( isset( $input['twitter'] ) ) {
		// Consider other sanitization if necessary and validation such as which
		// user role/capability should be able to insert this value, etc.
		update_user_meta( $user_id, 'twitter', $input['twitter'] );
	}
}, 10, 5 );





/*
 * Example: Post Object mutation 
 *
add_action( 'graphql_post_object_mutation_update_additional_data', function ( $post_id, $input, $mutation_name, $context, $info ) {
	if ( isset( $input['example'] ) ) {
		// get the field by field name, found when exporting a field created through ACF gui.
		update_field('field_5f91f1f099ea0', $input['example'], $post_id);
	}
}, 10, 5 );

*/