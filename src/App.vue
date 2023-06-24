<template>
  <div class="bg-Dark-Emerald">
    <header class="p-4 lg:max-w-5xl mx-auto">
      <nav class="container mx-auto sm:flex sm:justify-between">
        <div class="flex justify-between text-white">
          <router-link to="/">
            <span>Worldwide Cuisine Explorer</span></router-link
          >

          <div :class="['navbar', { 'navbar-open': isMenuOpen }]">
            <div class="cursor-pointer" @click="toggleMenu">
              <span
                :class="{ 'rotate-45 translate-x-1 translate-y-3': isMenuOpen }"
                class="w-6 h-1 mb-1 block bg-white"
              ></span>
              <span
                :class="{ hidden: isMenuOpen }"
                class="w-6 h-1 mb-1 block bg-white"
              ></span>
              <span
                :class="{
                  '-rotate-45 translate-x-1 translate-y-1': isMenuOpen,
                }"
                class="w-6 h-1 block bg-white"
              ></span>
            </div>
          </div>
        </div>

        <div>
          <ul
            class="text-white sm:flex max-sm:bg-black max-sm:mt-5 max-sm:p-5 max-sm:text-center max-sm:text-lg max-sm: max-sm:rounded-br-2xl max-sm:rounded-bl-2xl max-sm:w-full"
            :class="{ show: isMenuOpen }"
          >
            <li class="sm:mr-3">
              <router-link to="/about">Search</router-link>
            </li>
            <li class="sm:mr-3">
              <router-link to="/">Home</router-link>
            </li>
            <li><router-link to="/about">About</router-link></li>
          </ul>
        </div>
      </nav>
    </header>

    <router-view />
  </div>
</template>

<style>
@import url("./styles/app.css");
@import url("./styles/navigation.css");
</style>

<script src="@/composables/navigation"></script>
