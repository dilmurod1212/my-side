<template>
  <div>
    <Header />
    <div
      class="relative top-[100px] bottom-[200px] mb-[140px] text-white container max-md:p-0"
    >
      <div class="bg-black/60 backdrop-blur-sm">
        <div class="p-8 container my-4 mb-8">
          <Title descr="portfolio" title="MY WORKS" />
          <div class="flex flex-col">
            <div
              v-for="el in sidesInfo"
              class="flex max-md:flex-col gap-5 py-12 border-b border-white/20 last-of-type:border-none"
            >
              <img
                :src="el.img"
                :alt="el.title"
                class="w-[400px] max-md:w-full"
              />
              <div>
                <h2
                  class="capitalize text-4xl max-lg:text-2xl max-md:text-2xl mb-4 font-bold text-gold"
                >
                  {{ el.title }}
                </h2>
                <div>
                  <p class="text-sm my-2">Foydalanilgan texnologiyalar:</p>
                  <ul class="flex flex-wrap gap-2 my-4">
                    <li
                      v-for="item in el.tecnology"
                      class="py-2 px-3 rounded-2xl bg-gray-500/40 text-sm"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </div>
                <div class="flex items-center gap-4">
                  <a
                    target="_blank"
                    :href="el.link"
                    class="max-md:text-sm py-1 underline"
                    >saytga o'tish</a
                  >
                  <a
                  v-if="el.github"
                    target="_blank"
                    :href="el.github"
                    class="max-md:text-sm py-1 underline"
                    >Github</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import Title from "../components/Title.vue";
import { sides } from "@/data/sides.js";
import { reactive } from "vue";

const sidesInfo = reactive(sides);
</script>

<style lang="scss" scoped></style>
