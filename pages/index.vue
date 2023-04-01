<template>
  <div >
    <div >
      <!-- HERO -->
      <div class="flex flex-col md:flex md:flex-row">
        <div class="bg-secondary md:order-1 w-full md:w-1/2">
          <img class="w-full " src="~/assets/medias/locate.jpg" alt="">
        </div>
        <div class="flex flex-col gap-10 w-full md:w-1/2 pt-10">
          <h1 class="leading-relaxed text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl md:leading-relaxed  lg:leading-relaxed">
            Hightlight active and  <span class="bg-yellow text-black px-5 py-1">innovative developers</span>  worldwide !
          </h1>
          <p class="font-normal">
            Our platform highlights the most active and innovative developers
            worldwide. Discover their contributions, connect with them, and
            advance open source together.
          </p>
          <!-- <button class="bg-primary px-8 py-3 self-start font-medium ">Discover me</button> -->
        </div>
      </div>
      <!-- FIN HERO -->
      <LeadersBoards></LeadersBoards>
      <UsersCardList></UsersCardList>
    </div>
  </div>
</template>
