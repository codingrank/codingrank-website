<template>
    <div class="pt-20">

        <hr class="text-gray-dark">
        <div class=" flex flex-col items-start gap-2 sm:flex-row justify-between sm:items-center md:items-end pt-5">
            <div>
                <h1 class="font-bold text-xl sm:text-3xl  lg:text-4xl py-3">Most active developpers</h1>
                <p>Base on contributions on public repositories</p>
            </div>
            <div>
                <input type="text" class="h-10 w-300 bg-white text-gray-dark px-2 rounded-sm border self-end"
                    placeholder="Search...">
            </div>
        </div>
        <div class="flex flex-wrap justify-evenly gap-y-10 my-10">
            <UsersCard></UsersCard>
            <UsersCard></UsersCard>
            <UsersCard></UsersCard>
            <UsersCard></UsersCard>
            <UsersCard></UsersCard>
            <UsersCard></UsersCard>
            <UsersCard></UsersCard>
            <UsersCard></UsersCard>
            <UsersCard></UsersCard>
            <UsersCard></UsersCard>
            <UsersCard></UsersCard>
            <UsersCard></UsersCard>
            <UsersCard></UsersCard>
            <UsersCard></UsersCard>
            

        </div>
    </div>
</template>