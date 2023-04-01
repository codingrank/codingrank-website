<template>
  <div >
    <div class="flex gap-2 mt-20 justify-center items-center ">
        <h1 class="text-xl font-semibold text-center sm:text-3xl md:text-4xl  ">Top contributors from Togo</h1>
        <img class=" w-6 h-4 md:w-8 md:h-6" src="~/assets/medias/togo-flag.png" alt="">
    </div>
   
    <div class="flex flex-col gap-3 md:flex-row justify-center flex-wrap lg:justify-between gap-y-10  my-10">
      
      <LeadersFirstCard></LeadersFirstCard>
      <LeadersSecondCard></LeadersSecondCard>
      <LeadersThirdCard></LeadersThirdCard>
    </div>
  </div>
</template>
