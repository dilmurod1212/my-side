<template>
  <div>
    <div class="container flex justify-end text-right">
      <div
        class="mt-4 fixed z-50 text-white hidden max-md:block cursor-pointer"
      >
        <i
          @click="state = !state"
          class="text-2xl"
          :class="[state ? 'fas fa-close' : 'fas fa-bars']"
        ></i>
      </div>
    </div>
    <div
      v-if="state"
      class="fixed left-0 top-0 z-40 h-screen w-screen bg-black/50"
    >
      <div class="container flex h-full w-full bg-black/80">
        <div
          class="flex flex-col items-start justify-start border p-4 border-white/40 h-[75%] !my-auto w-full mx-auto"
        >
          <router-link
            v-for="el in navLinks"
            :key="el.id"
            :to="el.path"
            class="text-gray-400 py-1 border-b border-b-transparent item mb-2"
            ><h2 class="capitalize">{{ el.title }}</h2></router-link
          >
        </div>
      </div>
    </div>
    <div class="h-screen flex items-center">
      <div
        class="container text-white max-md:flex max-md:flex-col max-md:items-center"
      >
        <h1
          class="uppercase text-6xl max-lg:text-4xl max-md:text-3xl font-bold max-md:text-center"
        >
          Dilmurod Rasulov
        </h1>
        <p
          class="my-4 max-md:mb-2 text-2xl max-md:text-xl py-2 max-md:text-center"
        >
          I'm a
          <span class="border-b-2 border-b-gold">Frontend developer</span>
          from Uzbekistan
        </p>
        <div class="max-md:hidden">
          <Navbar />
        </div>
        <Social />
      </div>
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
