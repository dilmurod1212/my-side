<template>
  <ul class="flex gap-4 mt-6">
    <li
      v-for="el in social"
      class="text-white rounded-full w-8 h-8 flex justify-center items-center bg-white/30 hover:bg-gold/70 transition-all"
    >
      <a :href="el.url" target="_blank"><i :class="el.icon"></i></a>
    </li>
  </ul>
</template>

<script setup>
import { social } from "../data/social";
</script>

<style lang="scss" scoped></style>
