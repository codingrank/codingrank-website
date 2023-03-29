import { defineStore } from 'pinia';
import { User } from './models/user';
import { getGraphQlQuery} from './queries/index';
import {QueryType} from './models/query-type'



export const useLeaderboardsStore = defineStore({
    id: 'leaderboards',
    state: () => ({
        users: [] as User[],
        top3: [] as User[],
        hasNextPage: false,
        endCursor: '',
        queryType : QueryType.none,
    }),

    actions: {
        async fetchLeaderboards(queryType: QueryType, countries: string[] = [], limit = 20) {
            const query = getGraphQlQuery(queryType, countries, limit, this.endCursor);
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