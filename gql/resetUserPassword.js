// Framework
import { gql } from '@apollo/client'


export const RESET_USER_PASSWORD = gql`
    mutation ResetUserPassword( $login: String!, $password: String!, $key: String! ) {
        resetUserPassword( input: { login: $login, password: $password, key: $key }) {
            clientMutationId
        }
    }
`