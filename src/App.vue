<script setup lang="ts"></script>

<template>
  <div class="">
    <h1
      v-pop="'JsonKody'"
      class="p-4 trans text-6xl roboto-mono text-transparent bg-clip-text hover:brightness-150 bg-gradient-to-r from-fuchsia-600 to-teal-300"
    >
      <a href="https://www.youtube.com/jsonkody"> {jk} </a>
    </h1>

    <div class="w-full absolute top-0 right-0 flex justify-center">
      <div class="main-links-wrap">
        <a
          class="main-link group"
          href="https://bekinka.cz"
          target="_blank"
          v-pop="'Bekinka'"
        >
          <div class="link-ball"></div>
        </a>
        <a
          class="main-link group"
          href="https://num.jsonkody.cz"
          target="_blank"
          v-pop="'Num'"
        >
          <div class="link-ball"></div>
        </a>
        <a
          class="main-link group"
          href="https://github.com/JsonKody"
          target="_blank"
          v-pop="'Github'"
        >
          <div class="link-ball"></div>
        </a>
        <a
          class="main-link group"
          href="https://discord.gg/djVwV5FT"
          target="_blank"
          v-pop="'Discord'"
        >
          <div class="link-ball"></div>
        </a>
        <a
          class="main-link group"
          href="https://www.twitch.tv/jsonkody"
          target="_blank"
          v-pop="'Twitch'"
        >
          <div class="link-ball"></div>
        </a>
        <a
          class="main-link group"
          href="https://www.youtube.com/jsonkody"
          target="_blank"
          v-pop="'Youtube'"
        >
          <div class="link-ball"></div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
