<template>
  <div class="mb-[100px]">
    <div class="bg-black fixed top-0 left-0 z-20 w-full">
      <nav class="container flex justify-between items-center py-6 text-white">
        <div class="logo">
          <router-link to="/">
            <h2 class="uppercase font-bold text-4xl max-md:text-xl">
              Dilmurod Rasulov
            </h2>
          </router-link>
        </div>
        <Navbar />
      </nav>
    </div>
  </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
</script>
