//Framework
import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl,  Button, Container, Row , Col, Image } from 'react-bootstrap/'
import { useQuery, gql } from '@apollo/client';

// Styles
import styles from '../styles/tricks.module.css'

//Data
const ALL_TRICKS = gql`
    query allTricks {
        tricks {
            nodes {
                id
                title
                TrickFields {
                        trickNames {
                        ... on TrickName {
                        id
                        title
                        }
                    }
                youtubeLink
            }
        }
    }
}
`


function Tricks() {
    const { loading, error, data } = useQuery(ALL_TRICKS);
    if (data) {
        return (
            <ul>
                {data.tricks.nodes.map(({ title }) => {
                    return(
                        <li key={title}>
                            <h1>Name: {title}</h1>
                        </li>
                    )
                })}
            </ul>
        )
    } else {
        return <p>Loading...</p>
    }
}


export default Tricks