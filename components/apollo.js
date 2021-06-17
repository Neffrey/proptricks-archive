// Framework
import React, { useContext } from 'react'
import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache, useMutation, gql } from '@apollo/client'
import { userStore } from '../contexts/userContext'


// GQL
import { USER_LOGIN } from '../gql/userLogin'

// Context
import { UserContext } from '../contexts/userContext'


// Crypto
import { decrypt } from '../lib/crypto'
import { authKey } from '../lib/keys'

// HttpLink
const httpLink = new HttpLink({uri: 'https://pt.neffrey.com/graphql'})

// Auth Header Middleware
const authMiddleware = new ApolloLink((operation, forward) => {
    if( userStore.get('authTime') && userStore.get('authEncrypted')) {
        if ( Date.now() > userStore.get('authTime') ) {
            // Renew Auth Token 
            refreshToken()
            // setAuthTimer
        }

        operation.setContext({
            headers: {
                authorization: decrypt(userStore.get('authEncrypted'), authKey),
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