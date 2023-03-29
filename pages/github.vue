<template>
    <div>
        <h1 class="text-7xl">Github</h1>
        <p class="text-2xl">This is the github page</p>

        <ul>
            <li v-for="user in data">
                <img :src="user.avatarUrl" alt="user avatar" />
                <h2>{{ user.name }}</h2>
                <p>{{ user.bio }}</p>
                <p>{{ user.location }}</p>
                <p v-if="user.followers">{{ user.followers.totalCount }}</p>
                <p v-if="user.following">{{ user.following.totalCount }}</p>
                <p v-if="user.repositories">{{ user.repositories.totalCount }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useLeaderboardsStore } from '~~/store/leaderboards';
import {QueryType} from '~~/store/leaderboards/models/query-type';
const boardStore = useLeaderboardsStore();
let countries = [
    'Togo',
]
boardStore.fetchLeaderboards(QueryType.mostContributions, countries);
const data = boardStore.users;

</script>