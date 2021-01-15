// Framework
import { gql } from '@apollo/client'


export const USER_LOGIN = gql`
    mutation UserLogin( $username: String!, $password: String! ) {
        login( input: { username: $username, password: $password }) {
            authToken
            refreshToken
            user {
                email
                firstName
                username
                roles {
                    nodes {
                        name
                        id
                    }
                }
            }
        }
    }
`