
// Define GraphQL query
const mostFollowed = gql`
query {
search(type: USER, query: "location:Cameroon location:Cameroun", first: 100) {
    nodes {
        ... on User {
            name
            login
            bio
            avatarUrl
            url
            location
            followers {
                totalCount
            }
            following {
                totalCount
            }
            repositories {
                totalCount
            }
        }
    }
}
}
`;

// Export function that returns Document Node  GraphQL query
export function mostFollowedQuery(countries: string[] = [], limit = 40, offset = 0) {

  return {
    query: mostFollowed
  };
}


