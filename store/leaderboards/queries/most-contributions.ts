
export function mostContributionsQuery(countries: string[] = [], limit = 40, after: string) {
    const locationFilter = countries.length > 0 ? `location:${countries.join(' location:')}` : '';


    let textQuery = `${locationFilter}`;
    textQuery += ' followers:>0';
    // textQuery += ' following:desc';

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
                    isHireable
                    websiteUrl


                    followers {
                        totalCount
                    }
                    following {
                        totalCount
                    }
                    repositories {
                        totalCount
                    },
                    repositoriesContributedTo(first: 100) {
                        totalCount
                    }
                    contributionsCollection {
                        totalCommitContributions
                        totalIssueContributions
                        totalPullRequestContributions
                        totalPullRequestReviewContributions
                        totalRepositoriesWithContributedIssues
                        totalRepositoriesWithContributedPullRequests
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
