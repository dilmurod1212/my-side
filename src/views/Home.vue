<template>
  <div
    v-if="state"
    class="fixed left-0 top-0 z-40 h-screen w-screen bg-black/50"
  >
    <div class="p-4 border border-white/40 h-full w-full bg-black/80">
      <div class="border p-4 border-white/40 h-full w-full">
        <router-link
          v-for="el in navLinks"
          :key="el.id"
          :to="el.path"
          class="text-gray-400 py-2 border-b border-b-transparent item mb-3"
          ><h2 class="capitalize">{{ el.title }}</h2></router-link
        >
      </div>
    </div>
  </div>
  <div class="h-screen flex items-center">
    <div
      class="fixed text-white top-[30px] right-[30px] hidden max-md:block"
      @click="state = !state"
    >
      <i class="fas fa-bars text-2xl cursor-pointer"></i>
    </div>
    <div
      class="container text-white max-md:flex max-md:flex-col max-md:items-center"
    >
      <h1 class="uppercase text-6xl max-lg:text-4xl max-md:text-3xl font-bold">
        Dilmurod Rasulov
      </h1>
      <p
        class="my-4 max-md:mb-2 text-2xl max-md:text-xl py-2 max-md:text-center"
      >
        I'm a
        <span class="border-b-2 border-b-gold py-2">Frontend developer</span>
        from Uzbekistan
      </p>
      <div class="max-md:hidden">
        <Navbar />
      </div>
      <Social />
    </div>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Social from "../components/Social.vue";
import { navLinks } from "../data/navLinks";
import { ref } from "vue";
const state = ref(false);
</script>

<style lang="scss" scoped></style>
