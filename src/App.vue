<template>
  <div class="bg-Dark-Emerald p-4 container mx-auto">
    <header>
      <nav>
        <div class="flex justify-between text-white">
          <router-link to="/">
            <span>Worldwide Cuisine Explorer</span></router-link
          >

          <div :class="['navbar', { 'navbar-open': isMenuOpen }]">
            <div class="cursor-pointer" @click="toggleMenu">
              <span class="w-6 h-1 mb-1 block bg-white"></span>
              <span class="w-6 h-1 mb-1 block bg-white"></span>
              <span class="w-6 h-1 block bg-white"></span>
            </div>
          </div>
        </div>

        <div>
          <ul :class="{ show: isMenuOpen }">
            <li><router-link to="/about">About</router-link></li>
          </ul>
        </div>
      </nav>
    </header>

    <router-view/>
  </div>
</template>

<style>
@import url("./styles/app.css");
</style>

<script src="@/composables/navigation">

</script>
