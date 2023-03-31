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
            Hightlight active and innovative developers worldwide !!
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



useHead({
  title: "Coding Rank: Highlight active and innovative developers worldwide ! ",
  meta: [
    {
      name: "description",
      content: " Coding Rank is a platform that highlights the most active and innovative developers worldwide. Discover their contributions, connect with them, and advance open source together.",
    },
    {
      name: "keywords",
      content: "coding rank, codingrank, coding, rank, developer, developers, open source, open-source, open-source software, oss, oss software",
    },
    {
      name: "author",
      content: "Coding Rank",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "googlebot",
      content: "index, follow",
    },
    {
      name: "google",
      content: "nositelinkssearchbox",
    },
    {
      name: "google",
      content: "notranslate",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "og:title",
      content: "Coding Rank: Highlight active and innovative developers worldwide ! ",
    },
    {
      name: "og:description",
      content: " Coding Rank is a platform that highlights the most active and innovative developers worldwide. Discover their contributions, connect with them, and advance open source together.",
    },
    {
      name: "og:image",
      content: "https://codingrank.dev/images/og-image.png",
    },
    {
      name: "og:url",
      content: "https://codingrank.dev/",
    },
    {
      name: "og:site_name",
      content: "Coding Rank",
    },
    {
      name: "og:type",
      content: "website",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:site",
      content: "@codingrank",
    },
    {
      name: "twitter:creator",
      content: "@codingrank",
    },
    {
      name: "twitter:title",
      content: "Coding Rank: Highlight active and innovative developers worldwide ! ",
    },
    {
      name: "twitter:description",
      content: " Coding Rank is a platform that highlights the most active and innovative developers worldwide. Discover their contributions, connect with them, and advance open source together.",
    },
    {
      name: "twitter:image",
      content: "https://codingrank.dev/images/og-image.png",
    },
    {
      name: "twitter:image:alt",
      content: "Coding Rank: Highlight active and innovative developers worldwide ! ",
    },
    {
      name: "twitter:domain",
      content: "https://codingrank.dev/",
    },
    {
      name: "twitter:label1",
      content: "Written by",
    },
    {
    }
  ],

});


</script>
