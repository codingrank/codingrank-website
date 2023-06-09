
export function mostFollowedQuery(countries: string[] = [], limit = 40, after: string) {
    const locationFilter = countries.length > 0 ? `location:${countries.join(' location:')}` : '';


    let textQuery = `${locationFilter}`;
    textQuery += ' followers:>0';
    
    const query = gql`
    query {
        search(type: USER, query: "${textQuery}", first: ${limit}) {
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
            },
            pageInfo {
                hasNextPage
                endCursor
            }
        }
    }
    `
    return query;
}


