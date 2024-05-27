<template>
    <div class="q-pa-md" >
      <q-carousel height="1000px"
        animated
        v-model="slide"
        arrows
        navigation
        infinite
      >
        <q-carousel-slide :name="1" img-src="https://down-id.img.susercontent.com/file/sg-11134201-22120-uz2dpwz8qvkv42" class="full-width-slide" />
        <q-carousel-slide :name="2" img-src="https://img.lazcdn.com/g/p/344b418df97d7e6b38165d1f48e41556.jpg_720x720q80.jpg" class="full-width-slide" />
        <q-carousel-slide :name="3" img-src="https://id-test-11.slatic.net/p/0e14b879eac469d600e9176e308fd158.jpg" class="full-width-slide" />
      </q-carousel>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    setup () {
      return {
        slide: ref(1)
      }
    }
  }
  </script>
  
  <style>
  .full-width-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  </style>
  