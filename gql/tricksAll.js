// Framework
import { gql } from '@apollo/client'


export const TRICKS_ALL = gql`
    query TricksAll {
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
                    trickTags {
                        ... on TrickTag {
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