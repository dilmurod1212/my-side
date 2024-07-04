<template>
  <div class="md:container">
    <div class="max-lg:container py-6 mb-12 mt-4 backdrop-blur-sm bg-black/60">
      <div class="mx-auto lg:w-3/4 text-white">
        <h1 class="text-2xl md:text-3xl lg:text-4xl mt-12 mb-4 font-bold">
          {{ project?.title }}
        </h1>
        <img :src="project?.img" :alt="project.title" class="rounded-lg" />
        <div class="mt-8 lg:w-3/4 mx-auto">
          <h2 v-if="project?.about" class="text-2xl mt-6 mb-4">
            Loyiha haqida
          </h2>
          <p class="text-sm md:text-base">{{ project?.about }}</p>
          <a :href="project?.link" target="_blank" class="block mt-6">
            <Button text="Saytga o'tish" variant="gray" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { sides } from "@/data/sides";
import { useRoute } from "vue-router";
import Button from "@/components/Button.vue";
const route = useRoute();
const project = sides.find((item) => item.id == route.params.id);
</script>

<style lang="scss" scoped></style>
