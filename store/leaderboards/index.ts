import { defineStore } from 'pinia';
import { User } from './models/user';
import { mostFollowedQuery } from './queries/most-followed';


export const useLeaderboardsStore = defineStore({
    id: 'leaderboards',
    state: () => ({
        users: [] as User[],
        top3: [] as User[],
        hasNextPage: false,
        endCursor: '',
    }),

    actions: {
        async fetchMostFollowed(countries: string[] = [], limit = 40, offset = 0) {
            const query = mostFollowedQuery(countries, limit, offset);
            const response = await useAsyncQuery(query) as any;
            this.top3 = [];
            this.users = [];
            response.data.value.search.nodes.forEach((user: any) => {
                if (this.top3.length < 3) {
                    this.top3.push(user);
                }
                this.users.push(user);
            });
        }
    }
})