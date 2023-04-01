<template>
  <div
    class="bg-secondary text-white w-full flex flex-col gap-4 p-2 md:w-[70%] lg:w-[30%]  ">
    <div class="flex justify-between">
      <div class="flex gap-4">
        <div class="relative">
          <img
            class="w-[100px] h-[100px] "
            src="~/assets/medias/charles.png"
            alt=""
          />
          <div
            class="bg-yellow opacity-70 absolute bottom-0 left-0 w-full rounded-b-md"
          >
            <p class="text-black text-center font-bold text-sm">Hireable</p>
          </div>
        </div>
        <div class="flex flex-col justify-between">
          <div class="flex flex-col gap-O.5">
            <h3 class="font-bold text-xl">Charles DZADU</h3>
            <a class="text-gray-dark text-sm font-semibold" href="">
              @charlesdzadu
            </a>
            <p class="text-gray-dark text-xs">
              Build great world with code and coffee
            </p>
          </div>

          <div class="flex gap-2 items-center">
            <img class="w-4 h-4" src="~/assets/medias/mapicon.png" alt="" />
            <p class="text-xs font-semibold">Lomé - Togo</p>
          </div>
        </div>
      </div>

      <div
        class="text-4xl font-bold bg-primary text-white py-2 px-4 self-start"
      >
        3
      </div>
    </div>

    <div class="bg-black flex justify-between px-6 py-4">
      <div class="flex flex-col items-center gap-1">
        <h1 class="text-xl font-semibold md:text-xl">
          134 686
        </h1>
        <p class="text-gray-dark font-medium">Followers</p>
      </div>
      <div class="flex flex-col items-center gap-1">
        <h1 class="text-xl font-semibold md:text-xl">
          686
        </h1>
        <p class="text-gray-dark font-medium">Contributions</p>
      </div>
      <div class=" hidden md:flex flex-col items-center gap-1">
        <h1 class="text-xl font-semibold md:text-xl">
          134
        </h1>
        <p class="text-gray-dark font-medium">Contributions</p>
      </div>
    </div>
  </div>
</template>