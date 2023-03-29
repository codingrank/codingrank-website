<template>
  <div class="bg-black text-white">
    <!-- header -->
    <div class="p-5  flex justify-between items-center md:px-10 py-5">
      <div class="flex gap-6 items">
        <!-- LOGO -->
        <div class="flex gap-2 items-center">
          <p class="font-bold text-xl md:text-3xl">CODINGRANK</p>
          <img
            class="w-6 h-4 md:w-10 md:h-6"
            src="~/assets/medias/togo-flag-small 1.png"
            alt="flag"
          />
        </div>
        <!-- FIN LOGO -->
        <div class="flex gap-4 items-center">
          <select class="bg-black " name="country" id="country">
            <option  value="Togo">Togo</option>
          </select>
          <p class="hidden md:block">
            Leadboard
          </p>
          <span class=" hidden md:block bg-primary px-3 py-1 text-xs rounded">Soon</span>
        </div>
    
      </div>
      <!-- SOCIAL MEDIA -->
      <div class=" hidden md:flex gap-4 ">
        <img class="w6 h-6 "  src="~/assets/medias/github.png" alt="">
        <img class="w-6 h-6" src="~/assets/medias/linkedin.png" alt="">
        <img class="w-6 h-6" src="~/assets/medias/twiter.png" alt="">
      </div>
      <div class="flex flex-col gap-1 md:hidden">
         <span class="w-6 h-0.5 bg-white"></span>
         <span class="w-6 h-0.5 bg-white"></span>
         <span class="w-6 h-0.5 bg-white"></span>
        </div>
      <!-- FIN SOCIAL MEDIA -->
    </div>
    <!-- FIN HEADER -->
  </div>
</template>
