// Create a new interface for the user model with github api info
export interface User {
    name: string;
    login: string;
    avatarUrl: string;
    bio: string;
    url: string; //icon
    location: string;//icon + text
    isHireable: boolean;
    websiteUrl: string;

    contributionsCollection: {
        totalCommitContributions: number;
        totalIssueContributions: number;
        totalPullRequestContributions: number;
        totalPullRequestReviewContributions: number;
        totalRepositoriesWithContributedIssues: number;
        totalRepositoriesWithContributedPullRequests: number;
    }
    followers: {
        totalCount: number;
    };
    repositories: {
        totalCount: number;
    };
    following: {
        totalCount: number;
    };
}