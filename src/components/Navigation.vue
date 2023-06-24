<template>
  <header>
    <nav>
      <div class="flex justify-between  text-white">
        <span>Worldwide Cuisine Explorer</span>

        <div :class="['navbar', { 'navbar-open': isMenuOpen }]">
          <div class="cursor-pointer" @click="toggleMenu">
            <span class="w-6 h-1  mb-1 block bg-white"></span>
            <span class="w-6 h-1 mb-1 block bg-white"></span>
            <span class="w-6 h-1 block bg-white"></span>
          </div>
        </div>
      </div>

      <div>
        <ul :class="{ show: isMenuOpen }">
          <li><router-link to="/">Search</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
        <router-view />
      </div>
    </nav>
  </header>
</template>

<script src="../composables/navigation.js"></script>

<style>
@import url("../styles//navigation.css");
</style>
