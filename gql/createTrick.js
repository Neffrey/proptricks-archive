// Framework
import { gql } from '@apollo/client'


export const CREATE_TRICK = gql`
    mutation CreateTrick( $title: String! $status: String!, $youtubeLink: String, $trickNames: String, $trickTags: String ) {
        createTrick(input: { title: $title, status: $status, youtubeLink: $youtubeLink, trickNames: $trickNames, trickTags: $trickTags }) {
            trick {
                id
                title
                TrickFields {
                    trickNames {
                        ... on TrickName {
                            id
                            databaseId
                            title
                        }
                    }
                    trickTags {
                        ... on TrickTag {
                            id
                            databaseId
                            title
                        }
                    }
                }
            }
        }
    }
`


