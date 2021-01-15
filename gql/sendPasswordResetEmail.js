// Framework
import { gql } from '@apollo/client'


export const SEND_PASSWORD_RESET_EMAIL = gql`
    mutation SendPasswordResetEmail( $username: String! ) {
        sendPasswordResetEmail( input: { username: $username }) {
            clientMutationId
        }
    }
`