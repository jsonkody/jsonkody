<script setup lang="ts">
// const jk = `<img src="/images/jk.svg" class="rounded-full">`;
const bekinka = `<img src="/images/bekinka.avif" class="rounded-full">`;
const num = `<img src="/images/num.avif" class="rounded-full">`;
const npm = `<img src="/images/npm.avif" class="rounded-full">`;
const github = `<img src="/images/github.avif" class="rounded-full">`;
const discord = `<img src="/images/discord.avif" class="rounded-xl">`;
const twitch = `<img src="/images/twitch.avif" class="rounded-full">`;
const youtube = `<img src="/images/jk.svg" width="120" height="120" class="rounded-full">`;
</script>

<template>
  <div class="">
    <h1
      v-pop:bottom="'YouTube'"
      class="p-4 trans text-6xl roboto-mono text-transparent bg-clip-text hover:brightness-150 bg-gradient-to-r from-fuchsia-600 to-teal-300"
    >
      <a href="https://www.youtube.com/jsonkody"> {jk} </a>
    </h1>

    <div class="w-full absolute top-0 right-0 flex justify-center">
      <div class="main-links-wrap">
        <a
          class="main-link text-purple-400 hover:text-pink-300"
          href="https://bekinka.cz"
          target="_blank"
          v-pop.html="bekinka"
        >
          bekinka.cz
          <!-- <div class="link-ball"></div> -->
        </a>
        <a
          class="main-link text-emerald-300 hover:text-green-100"
          href="https://num.jsonkody.cz"
          target="_blank"
          v-pop.html="num"
        >
          num
          <!-- <div class="link-ball"></div> -->
        </a> 
        <a
          class="main-link text-white hover:text-blue-300"
          href="https://www.npmjs.com/package/toolpop"
          target="_blank"
          v-pop.html="npm"
        >
          toolpop
          <!-- <div class="link-ball"></div> -->
        </a>
        <a
          class="main-link text-gray-400 hover:text-gray-100"
          href="https://github.com/JsonKody"
          target="_blank"
          v-pop.html="github"
        >
          github
          <!-- <div class="link-ball"></div> -->
        </a>
        <a
          class="main-link text-blue-400 hover:text-pink-300"
          href="https://discord.gg/djVwV5FT"
          target="_blank"
          v-pop.html="discord"
        >
          discord
          <!-- <div class="link-ball"></div> -->
        </a>
        <a
          class="main-link text-purple-400 hover:text-pink-300"
          href="https://www.twitch.tv/jsonkody"
          target="_blank"
          v-pop.html="twitch"
        >
          twitch
          <!-- <div class="link-ball"></div> -->
        </a>
        <a
          class="main-link text-red-400 hover:text-pink-300"
          href="https://www.youtube.com/jsonkody"
          target="_blank"
          v-pop.html="youtube"
        >
          youtube
          <!-- <div class="link-ball"></div> -->
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
