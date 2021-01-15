// Framework
import React from 'react'
import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import { authStore } from '../contexts/authContext'




// HttpLink
const httpLink = new HttpLink({uri: 'https://fadb.neffrey.com/graphql'})

// Auth Header Middleware
const authMiddleware = new ApolloLink((operation, forward) => {
    if(authStore.get('auth')) {
        operation.setContext({
            headers: {
                authorization: authStore.get('auth'),
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
export const ApolloContainer = ({ children }) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}