<template>
  <div class="bg-black text-white">
    <!-- header -->
    <div class="p-5 flex justify-between items-center md:px-10 py-5">
      <div class="flex gap-6 items">
        <!-- LOGO -->
        <div class="flex gap-2 items-center">
          <p class="font-bold text-xl md:text-3xl">CODINGRANK</p>
          <img
            class="w-6 h-4 md:w-10 md:h-6"
            src="~/assets/medias/togo-flag.png"
            alt="flag"
          />
        </div>
        <!-- FIN LOGO -->
        <div class="flex gap-4 items-center">
          <select class="bg-black" name="country" id="country">
            <option value="Togo">Togo</option>
          </select>
          <p class="hidden md:block">
            Leadboard
          </p>
          <span class="hidden md:block bg-primary px-3 py-1 text-xs rounded">
            Soon
          </span>
        </div>
      </div>
      <!-- SOCIAL MEDIA -->
      <div class="hidden md:flex gap-4">
        <img class="w6 h-6" src="~/assets/medias/github.png" alt="" />
        <img class="w-6 h-6" src="~/assets/medias/linkedin.png" alt="" />
        <img class="w-6 h-6" src="~/assets/medias/twiter.png" alt="" />
      </div>
      <div class="flex flex-col gap-1 md:hidden">
        <span class="w-6 h-0.5 bg-white"></span>
        <span class="w-6 h-0.5 bg-white"></span>
        <span class="w-6 h-0.5 bg-white"></span>
      </div>
      <!-- FIN SOCIAL MEDIA -->
    </div>
    <!-- FIN HEADER -->
    <div class="p-5 md:p-10   ">
      <!-- HERO -->
      <div class="flex flex-col md:flex md:flex-row">
        <div class="bg-secondary md:order-1 w-full md:w-3/5">
          <img class="w-full " src="~/assets/medias/locate.jpg" alt="">
        </div>
        <div class="flex flex-col gap-10 w-full md:w-2/5 pt-5">
          <h1 class="text-3xl font-semmi-bold md:text-4xl lg:text-6xl">
            The most active and innovative developers worldwide !
          </h1>
          <p class="font-thin">
            Our platform highlights the most active and innovative developers
            worldwide. Discover their contributions, connect with them, and
            advance open source together.
          </p>
          <button class="bg-primary px-8 py-3 self-start font-medium ">Discover me</button>
        </div>
      </div>
      <!-- FIN HERO -->
    </div>
  </div>
</template>
