// Framework
import React from 'react'
import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'
import { authStore } from '../contexts/authContext'

// Apollo
const httpLink = new HttpLink({uri: 'https://fadb.neffrey.com/graphql'})
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
export const client = new ApolloClient({
    cache: new InMemoryCache({}),
    link: authMiddleware.concat(httpLink)
})


export const ApolloConfig = ({ children }) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}