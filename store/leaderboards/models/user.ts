// Create a new interface for the user model with github api info
export interface User {
    name: string;
    login: string;
    avatarUrl: string;
    bio: string;
    url: string;
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