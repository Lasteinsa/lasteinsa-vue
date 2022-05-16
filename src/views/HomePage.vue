<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="sm:w-10/12 sm:mx-32 w-full my-8">
        <div
            class="lg:m-10 md:m-6 m-4 px-5 py-10 bg-gradient-to-r from-blue-600 via-indigo-500 to-fuchsia-500 rounded-xl text-white tracking-wide animation-delay-100 animate-loading">
            <p class="text-3xl mb-2 underline underline-offset-4">Lasteinsa</p>
            <p class="text-sm italic mb-4">
                Welcome to my personal homepage <br>
                This is where we start
            </p>
            <p>
                Hello, Let me introduce myself. My name is Ruby, Currently I study <span
                    class="underline underline-offset-2">Informatic Engineering</span> in University at Jakarta
            </p>
            <p>
                I'm also a student from <a href="https://grow.google/intl/id_id/bangkit/" class="underline underline-offset-2">Bangkit 2022</a>
            </p>
            <div class="m-2 px-3 py-4 bg-violet-400 hover:bg-violet-500 hover:delay-200 justify-start inline-block rounded">
              <router-link to="/About" class="px-4 py-2 rounded hover:bg-violet-600 bg-violet-500">
                About
              </router-link>
            </div>
            <div class="m-2 px-3 py-4 bg-violet-400 hover:bg-violet-500 hover:delay-200 inline-block rounded">
                <router-link to="/Contact" class="px-4 py-2 rounded hover:bg-violet-600 bg-violet-500">
                Contact
              </router-link>
            </div>
        </div>
        <div
            class="sm:w-32 sm:h-32 w-24 h-24 bg-blue-400 rotate-45 sm:-translate-y-52 -translate-y-40 -translate-x-8 transform rounded absolute -z-10 animate-loading animate-pulse">
        </div>
        <div
            class="sm:w-32 sm:h-32 w-24 h-24 rounded-full bg-purple-400 absolute right-0 animate-loading animate-bounce">
        </div>
        <div class="mx-10 mt-24 text-6xl animate-loading">
            I am a...
            <hr class="w-1/2 h-1 bg-slate-500 ">
        </div>
        <div class="flex justify-center items-center mt-12 text-2xl font-semibold animate-bounce-twice">
            <span class="border-l-4 border-teal-400 px-2">Programme(r)</span>
            <span class="text-sm">that I learn</span>
        </div>
        <div class="flex justify-center items-center my-8 animate-bounce-twice">
            <hr class="bg-teal-500 h-1 w-1/3 inline-block">
            <div class="animate-spin-slow">
                <div class="w-2 h-2 rounded-full bg-teal-500 inline-block"></div>
                <div class="w-4 h-4 rounded-full bg-teal-500 inline-block"></div>
                <div class="w-2 h-2 rounded-full bg-teal-500 inline-block"></div>
            </div>
            <hr class="bg-teal-500 h-1 w-1/3 inline-block">
        </div>
        <div id="nextPage" class="mx-10 mt-5 text-2xl tracking-wide animate-loading">
            <div class="w-10 h-10 bg-teal-400 text-white pl-1 mr-1 rounded-md inline">
                A
            </div>
            ndroid Developer
        </div>
        <div id="nextPage" class="mx-10 mt-2 text-2xl tracking-wide animate-loading">
            <div class="w-10 h-10 bg-purple-600 text-white pl-1 mr-1 rounded-md inline">
                K
            </div>
            otlin
        </div>
        <div id="nextPage" class="mx-10 mt-2 text-2xl tracking-wide animate-loading">
            <div class="w-10 h-10 bg-yellow-400 text-white pl-2 pr-1 mr-1 rounded-md inline">
                J
            </div>
            avascript
        </div>
        <div id="nextPage" class="mx-10 mt-2 text-2xl tracking-wide animate-loading">
            <div class="w-10 h-10 bg-red-400 text-white pl-1 mr-1 rounded-md inline">
                H
            </div>
            tml and 
            <div class="w-10 h-10 bg-indigo-600 text-white pl-1 mr-1 rounded-md inline">
                C
            </div>
            ss
        </div>
        <div id="nextPage" class="mx-10 mt-20 text-2xl font-thin tracking-wide animate-loading">
            Checkout my :
        </div>
        <div id="nextPage" class="mx-10 mt-2 text-2xl tracking-wide animate-loading">
            <div class="w-10 h-10 bg-slate-700 text-white pl-1 mr-1 rounded-md inline">
                G
            </div>
            <a href="https://github.com/Lasteinsa" target="_blank">ithub <span class="underline underline-offset-2 text-xl tracking-normal ">repository</span></a>
        </div>
        <div id="nextPage" class="flex justify-center items-center mt-24 text-2xl font-semibold animate-loading">
            <span class="border-l-4 border-teal-400 px-2">Music <span class="text-sm">that I</span> Listen(er)</span>
        </div>
        <div id="nextPage" class="flex justify-center items-center my-8">
            <hr class="bg-teal-500 h-1 w-1/3 inline-block">
            <div class="w-2 h-2 rounded-full bg-teal-500 inline-block"></div>
            <div class="w-4 h-4 rounded-sm bg-teal-500 inline-block mx-1"></div>
            <div class="w-2 h-2 rounded-full bg-teal-500 inline-block"></div>
            <hr class="bg-teal-500 h-1 w-1/3 inline-block">
        </div>
        <div id="nextPage" class="mx-10 mt-2 text-2xl tracking-wide animate-loading">
            <img src="assets/images/music-note.svg" alt="music-note" class="inline">
            <a href="https://www.youtube.com/watch?v=-tKVN2mAKRI" target="_blank">
                <span class="underline"> Uchiagehanabi</span> <span class="text-sm">by</span> <span class="underline"> Daoko </span>
            </a>
        </div>
        <div id="nextPage" class="mx-10 mt-4 text-2xl tracking-wide animate-loading">
            <img src="assets/images/music-note.svg" alt="music-note" class="inline">
            <a href="https://www.youtube.com/watch?v=kzdJkT4kp-A" target="_blank">
                <span class="underline"> Halzion</span> <span class="text-sm">by</span> <span class="underline"> YOASOBI </span>
            </a>
        </div>
        <div id="nextPage" class="mx-10 mt-20 text-2xl font-thin tracking-wide animate-loading">
            Checkout my :
        </div>
        <div id="nextPage" class="mx-10 mt-2 text-2xl tracking-wide animate-loading">
            <div class="w-10 h-10 bg-slate-700 text-white pl-1 mr-1 rounded-md inline">
                M
            </div>
            <a href="https://einsadb.web.app" target="_blank">usic <span class="underline underline-offset-2 text-xl tracking-wider">player web</span></a>
        </div>
        <div id="nextPage" class="flex justify-center items-center mt-12 font-thin animate-loading">
            Gonna Add More Later...
            <router-link to="/Music" class="underline px-4">Read More..</router-link>
        </div>
        <div id="nextPage" class="flex justify-center items-center mt-24 text-2xl font-semibold animate-loading">
            <span class="border-l-4 border-teal-400 px-2">Game(r)</span>
            <span class="text-sm">that I play</span>
        </div>
        <div id="nextPage" class="flex justify-center items-center my-8">
            <hr class="bg-teal-500 h-1 w-1/3 inline-block">
            <div class="w-2 h-2 rounded-full bg-teal-500 inline-block"></div>
            <div class="w-4 h-4 rounded-sm bg-teal-500 inline-block mx-1"></div>
            <div class="w-2 h-2 rounded-full bg-teal-500 inline-block"></div>
            <hr class="bg-teal-500 h-1 w-1/3 inline-block">
        </div>
        <div id="nextPage" class="mx-10 mt-2 text-2xl tracking-wide animate-loading">
            <div class="w-10 h-10 bg-blue-400 text-white pl-1 mr-1 rounded-md inline">
                H
            </div>
            onkai Impact
        </div>
        <div id="nextPage" class="mx-10 mt-2 text-2xl tracking-wide animate-loading">
            <div class="w-10 h-10 bg-amber-300 text-white pl-1 mr-1 rounded-md inline">
                G
            </div>
            enshin Impact
        </div>
    </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

export default defineComponent({
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
  },
  mounted() {  
    document.title = "Home Page";
    
    const callback = function (entries: any) {
    entries.forEach((entry: any) => {
        console.log(entry);
        if (entry.isIntersecting) {
        entry.target.classList.add("animate-loading");
        } else {
        entry.target.classList.remove("animate-loading");
        }
    });
    };

    const observer = new IntersectionObserver(callback);

    const targets = document.querySelectorAll("#nextPage");

    targets.forEach(function (target) {
    target.classList.add("opacity-1");
    observer.observe(target);
    });
    },  
    });
</script>

<style scoped>

</style>
