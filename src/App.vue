<template>
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf" container style="height: 700px" class="shadow-2 rounded-borders">
      <q-header class="custom-header" elevated>
        <q-toolbar>
          <q-btn flat round dense icon="menu" class="q-mr-sm" />
          <q-avatar size="80px" class="custom-avatar">
            <img src="https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/2/b51f8d30-f47a-4f67-a40c-0a736cba4d35.png">
          </q-avatar>

          <q-toolbar-title class="custom-title">Toko 88</q-toolbar-title>

          <q-btn flat icon="shopping_cart" @click="switchToCart" />
        </q-toolbar>

        <q-tabs v-model="tab">
          <q-tab name="Home" label="Home" />
          <q-tab name="Baju" label="Baju" />
          <q-tab name="Celana" label="Celana" />
          <q-tab name="Aksesoris" label="Aksesoris" />
        </q-tabs>
      </q-header>

      <q-footer class="custom-footer" elevated>
        <q-toolbar>
          <q-toolbar-title class="footer-title">Toko StarBoy</q-toolbar-title>
        </q-toolbar>
      </q-footer>

      <q-page-container>
        <q-page class="q-pa-md">
          <Home v-if="tab === 'Home'" />
          <Baju v-if="tab === 'Baju'" />
          <Celana v-if="tab === 'Celana'" />
          <Aksesoris v-if="tab === 'Aksesoris'" />
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref } from 'vue';
import Home from './components/Home.vue';
import Baju from './components/Baju.vue';
import Celana from './components/Celana.vue';
import Aksesoris from './components/Aksesoris.vue';


export default {
  components: {
    Home,
    Baju,
    Celana,
    Aksesoris
  },
  setup() {
    const tab = ref('Home');
    return {
      tab
    };
  }
}
</script>

<style>
.custom-header{
  background-color: #800404;
}
.custom-title{
  font-size: 24px; 
  font-weight: bold;
}
.custom-avatar{
  margin-top: 1px;
}
.custom-footer {
  background-color: #800404; 
  text-align: center; 
}

.footer-title {
  color: white; 
}
</style>