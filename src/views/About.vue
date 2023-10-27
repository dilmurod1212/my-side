<template>
  <Header />
  <div
    class="relative top-[100px] bottom-[200px] mb-[140px] container max-md:p-0"
  >
    <div class="text-white bg-black/70 backdrop-blur-sm">
      <div class="p-8 container my-4 mb-8">
        <Title descr="about" title="LEARN MORE ABOUT ME" />
        <div class="my-4 flex max-md:flex-col gap-4">
          <div class="w-[600px] h-[400px] max-md:w-full overflow-hidden">
            <img
              src="/images/me.jpg"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
          <div class="w-2/3 max-md:w-full">
            <h2 class="capitalize text-4xl max-md:text-2xl font-bold text-gold">
              dilmurod rasulov
            </h2>
            <p class="text-xl max-md:text-base my-2">
              I'm a Frontend developer.
            </p>
            <ul class="text-white mt-8 grid grid-cols-1 gap-4">
              <li class="font-bold max-md:text-sm">
                <i class="fas fa-caret-right text-gold"></i>
                Birthday:
                <span class="text-gold font-normal">12 december 2002</span>
              </li>
              <li class="font-bold">
                <i class="fas fa-caret-right text-gold"></i> Website:
                <span class="text-gold font-normal"
                  ><a href="#" target="_blank"
                    >dilmurodrasulov.netlify.app</a
                  ></span
                >
              </li>
              <li class="font-bold">
                <i class="fas fa-caret-right text-gold"></i> Phone:
                <span class="text-gold font-normal"
                  ><a href="tel:+998 91 101 11 99">+998 91 101 11 99</a></span
                >
              </li>
              <li class="font-bold">
                <i class="fas fa-caret-right text-gold"></i> City:
                <span class="text-gold font-normal">Tashkent, Uzbekistan</span>
              </li>
              <li class="font-bold">
                <i class="fas fa-caret-right text-gold"></i> Email:
                <span class="text-gold font-normal"
                  ><a href="mail:https://dilmurod121202@gmail.com"
                    >dilmurod121202@gmail.com</a
                  ></span
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-8">
          <Title descr="I'm use" />
          <div class="grid grid-cols-2 max-md:grid-cols-1 gap-6">
            <div v-for="el in mySkils">
              <div class="flex justify-between mb-2">
                <h2 class="font-bold">{{ el.toUpperCase() }}</h2>
                <i class="fa-solid fa-check-double"></i>
              </div>
              <div class="h-2 bg-gold w-full"></div>
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
import { skils } from "../data/scills";
import { ref } from "vue";
const mySkils = ref(skils);
</script>

<style lang="scss" scoped></style>
