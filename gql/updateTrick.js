// Framework
import { gql } from '@apollo/client'


export const UPDATE_TRICK = gql`
    mutation UpdateTrick( $id: ID!, $title: String, $status: String, $youtubeLink: String, $trickNames: Int, $trickTags: Int ) {
        UpdateTrick(input: { $id: id, title: $title, status: $status, youtubeLink: $youtubeLink, trickNames: $trickNames, trickTags: $trickTags }) {
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