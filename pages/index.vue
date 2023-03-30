<template>
  <div class="">
    <div class="">
      <!-- HERO -->
      <div class="flex flex-col md:flex md:flex-row">
        <div class="bg-secondary md:order-1 w-full md:w-1/2">
          <ClientOnly>
            <HeroMedia></HeroMedia>
          </ClientOnly>
        </div>
        <div class="flex flex-col gap-10 w-full md:w-1/2 pt-10">
          <h1 class="text-3xl font-bold md:text-4xl lg:text-6xl">
            Hightlight active and innovative developers worldwide !
          </h1>
          <p class="font-normal">
            Our platform highlights the most active and innovative developers
            worldwide. Discover their contributions, connect with them, and
            advance open source together.
          </p>
          <button class="bg-primary px-8 py-3 self-start font-medium ">Discover me</button>
        </div>
      </div>
      <!-- FIN HERO -->
      <LeadersBoards></LeadersBoards>
      <UsersCardList></UsersCardList>
    </div>
  </div>
</template>

<script setup>

onMounted(() => {
  this.$gtag.pageview({ page_path: this.$route.path, page_title: this.$route.name });
});
</script>
