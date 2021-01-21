// Framework
import { gql } from '@apollo/client'


export const REFRESH_TOKENS = gql`
    mutation RefreshTokens( $jwtRefreshToken: String! )  {
        refreshJwtAuthToken(input: { jwtRefreshToken: $jwtRefreshToken }) {
            authToken
        }
    }
`