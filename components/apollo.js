// Framework
import React, { useContext } from 'react'
import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache, useMutation } from '@apollo/client'
import { authStore } from '../contexts/authContext'


// GQL
import { USER_LOGIN } from '../gql/userLogin'

// Context
import { AuthContext } from '../contexts/authContext'


// Crypto
import { decrypt } from '../lib/crypto'
import { authKey } from '../lib/keys'

// HttpLink
const httpLink = new HttpLink({uri: 'https://fadb.neffrey.com/graphql'})

// Auth Header Middleware
const authMiddleware = new ApolloLink((operation, forward) => {
    if( authStore.get('authTime') && authStore.get('authEncrypted')) {
        if ( Date.now() > authStore.get('authTime') ) {
            // Renew Auth Token 
            refreshToken()
            // setAuthTimer
        }

        operation.setContext({
            headers: {
                authorization: decrypt(authStore.get('authEncrypted'), authKey),
            }
        })
    }
    return forward(operation)
})

// Client
export const client = new ApolloClient({
    cache: new InMemoryCache({}),
    link: authMiddleware.concat(httpLink)
})



// Rendered Component
const Apollo = ({ children }) => {    
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}
export default Apollo