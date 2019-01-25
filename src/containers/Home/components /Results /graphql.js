import gql from 'graphql-tag'

const SEARCH_RESULTS = gql`
  mutation search($hometown: String!) {
    search(hometown: $hometown) {
      Restaurant {
        name
      }
    }
  }
`
export default SEARCH_RESULTS
