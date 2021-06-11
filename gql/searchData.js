// Framework
import { gql } from '@apollo/client'


export const SEARCH_DATA = gql`query SearchData {
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
        }
      }
    }
    users {
      nodes {
        name
        nickname
        firstName
      }
    }
  }
`