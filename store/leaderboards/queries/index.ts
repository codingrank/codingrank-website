import { QueryType } from '../models/query-type';
import { mostFollowedQuery } from './most-followed';
import { mostContributionsQuery } from './most-contributions';

export function getGraphQlQuery(queryType: QueryType, countries: string[] = [], limit = 40, after: string) {
    switch (queryType) {
        case QueryType.mostFollowed:
            return mostFollowedQuery(countries, limit, after);
        case QueryType.mostContributions:
            return mostContributionsQuery(countries, limit, after);
        default:
            return mostFollowedQuery(countries, limit, after);

    }

}

