<?php
   /*
   Plugin Name: BluTigr Password Reset Email
   Plugin URI: https://blutigr.com
   description: Changes password reset email
   Version: 1.0
   License: GPL3
   */
?><?php

// Hook
add_filter( 'retrieve_password_message', 'bt_retrieve_password_message', 10, 4 );
function bt_retrieve_password_message( $message, $key, $user_login, $user_data ) {

    // Start with the default content.
    $site_name = wp_specialchars_decode( get_option( 'blogname' ), ENT_QUOTES );
    $message = __( 'Someone has requested a password reset for the following account:' ) . "\r\n\r\n";
    /* translators: %s: site name */
    $message .= sprintf( __( 'Site Name: %s' ), $site_name ) . "\r\n\r\n";
    /* translators: %s: user login */
    $message .= sprintf( __( 'Username: %s' ), $user_login ) . "\r\n\r\n";
    $message .= __( 'If this was a mistake, just ignore this email and nothing will happen.' ) . "\r\n\r\n";
    $message .= __( 'To reset your password, visit the following address:' ) . "\r\n\r\n";
    $message .= 'http://localhost:3000/account/reset-password/' . rawurlencode( $user_login ) . '/'. $key . "\r\n";

    // Return the filtered message.
    return $message;

}
