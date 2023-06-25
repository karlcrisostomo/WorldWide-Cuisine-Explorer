<template>
  <div class=" mt-12 bg-white">
    <div class="">
      <form class="flex justify-center">
        <img
          src="../assets/Search.svg"
          class="cursor-pointer"
          @click="fetchRecipes"
          alt=""
        />
        <input
          class="rounded-lg outline-none h-9 border-none"
          type="search"
          v-model="searchQuery"
          placeholder="Search for a recipe"
          @keyup.enter="fetchRecipes"
        />
        <div>
          <div>
            <img
              class="cursor-pointer"
              @click="toggleDropdown"
              :src="dropDownIcon"
              alt=""
            />
          </div>
          <div class="">
            <div :class="{ ' hidden ': dropDown }">
              <div
                class="bg-green-200 p-4 absolute top-40 left-1/2 rounded-lg transform -translate-x-1/2"
              >
                <div
                  @click="selectOption('')"
                  :class="{ selected: selectedCuisine === '' }"
                >
                  All Category
                </div>
                <div
                  @click="selectOption('American')"
                  :class="{ selected: selectedCuisine === 'American' }"
                >
                  American
                </div>
                <div
                  @click="selectOption('Asian')"
                  :class="{ selected: selectedCuisine === 'Asian' }"
                >
                  Asian
                </div>
                <div
                  @click="selectOption('African')"
                  :class="{ selected: selectedCuisine === 'African' }"
                >
                  African
                </div>
              </div>
            </div>
          </div>
          <div class="ml-2" v-if="selectedCuisine !== ''">
            Selected: {{ selectedCuisine }}
          </div>
        </div>
      </form>
    </div>

    <div class="hero">
      <article
        class="card-container"
        v-for="recipe in recipes"
        :key="recipe.id"
      >
        <figure class="card-content" v-motion-slide-top :delay="1000">
          <img
            class="recipe-img"
            :src="recipe.image"
            :alt="recipe.title"
            @click="showIngredients"
          />
          <div class="recipe-title-container">
            <p class="recipe-title">{{ recipe.title }}</p>
          </div>
        </figure>
      </article>

      <div id="error-message" v-if="errorMessage">
        <h1 style="text-align: center">
          An error occurred. Please try again later
        </h1>
      </div>
    </div>
  </div>
</template>

<script src="@/composables/search"></script>
