// Framework
import React from 'react'
import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'


// Apollo
const httpLink = new HttpLink({uri: 'https://fadb.neffrey.com/graphql'})
const authMiddleware = new ApolloLink((operation, forward) => {
    // Set Token in Headers
    console.log("Apollo Config")
    //console.log(localStorage.getItem('auth'))
    /*
    operation.setContext({
        headers: {
            authorization: window.localStorage.getItem('auth') || null,
        }
    })
    */
    return forward(operation)
})
export const client = new ApolloClient({
    cache: new InMemoryCache({}),
    link: authMiddleware.concat(httpLink)
})


export const ApolloConfig = ({children}) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}