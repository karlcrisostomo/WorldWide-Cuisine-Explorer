<template>
  <div class="mt-1 bg-white p-4">
    <div class="pb-40 flex  justify-center">
      <form class="flex">
        <img
          src="../assets/Search.svg"
          class="cursor-pointer"
          @click="fetchRecipes"
          alt=""
        />
        <input
          class=" outline-none bg-transparent h-9 border-none appearance-none "
          type="search"
          v-model="searchQuery"
          placeholder="Search for recipe..."
          @keyup="fetchRecipes"
        />
        <div>
          <div class=" flex -ml-5 mt-2">
            <div class="ml-2" v-if="selectedCuisine !== ''">
              {{ selectedCuisine }}
            </div>
            <img
              class="cursor-pointer transition-shadow -mt-1"
              @click="toggleDropdown"
              :src="dropDownIcon"
              alt=""
            />
          </div>
          <div class=" transition-transform p-4 absolute top-36 w-1/2 left-1/2 rounded-lg transform -translate-x-1/2">
            <div :class="{ ' hidden bg-green-200 ': dropDown }">
              <div
                
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
        </div>
      </form>
    </div>

    <div class="grid grid-cols-2 p-4 max-w-4xl container mx-auto">
      <article class="" v-for="recipe in recipes" :key="recipe.id">
        <figure class="p-6 rounded-lg mb-4">
          <img
            class="cursor-pointer w-full"
            :src="recipe.image"
            :alt="recipe.title"
            @click="showIngredients"
          />
          <div class="text-center bg-Dark-Emerald p-6 text-white -mt-1">
            <p>{{ recipe.title }}</p>
          </div>
        </figure>
      </article>

    </div>
    <div class=" text-center" id="error-message" v-if="errorMessage">
        <h1 class=" font-bold ">An error occurred. Please try again later</h1>
      </div>
  </div>
  

</template>

<script src="@/composables/search"></script>
