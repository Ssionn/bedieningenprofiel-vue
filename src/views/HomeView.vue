<script setup lang="ts">
import { GoogleMap, AdvancedMarker, InfoWindow } from 'vue3-google-map';
import { ref } from 'vue';

const center = { lat: 52.518727, lng: 4.973419 };

const contentElement = document.createElement('div');
contentElement.textContent = 'House of Hope';
contentElement.style.backgroundColor = 'white';
contentElement.style.padding = '5px';
contentElement.style.borderRadius = '3px';

const markerOptions = {
  position: center,
  content: contentElement,
  title: 'HQ'
};

const pinOptions = { background: '#FBBC04' };

const googleMapsAPIKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const infoWindow = ref<google.maps.InfoWindow | null>(null);
const infoWindowPosition = ref<google.maps.LatLngLiteral | null>(null);
const markerInfo = ref({
  title: 'House of Hope',
  description: 'Dit is een geweldige plek!',
});
const infoWindowOptions = ref<google.maps.InfoWindowOptions>({
    content: `<div><strong>${markerInfo.value.title}</strong><p>${markerInfo.value.description}</p></div>`,
    position: center,
});

const isInfoWindowOpen = ref(false); // Boolean ref om de status bij te houden

const openInfoWindow = () => {
  infoWindowPosition.value = center;
  if (isInfoWindowOpen.value) {
    infoWindow.value?.close();
    infoWindow.value = null;
    isInfoWindowOpen.value = false;
  }
  if (!infoWindow.value) {
    infoWindow.value = new google.maps.InfoWindow(infoWindowOptions.value);
    infoWindow.value.open();
    isInfoWindowOpen.value = true;
  }
};

const handleNieuwClick = () => {
  console.log('Nieuw knop geklikt');
  window.location.href = 'https://bedieningsprofiel.nl/sign-up';
};

const handleAlLidClick = () => {
  console.log('Al lid knop geklikt');
  window.location.href = 'https://bedieningsprofiel.nl/login';
};

const closeInfoWindow = () => {
  infoWindow.value = null;
  isInfoWindowOpen.value = false;
};
</script>

<template>
  <nav class="bg-white border-b-2 border-gray-200">
    <div class="container mx-auto flex justify-between items-center py-4">
      <RouterLink to="/">
        <div class="flex items-center">
          <img class="h-10 w-auto" src="../assets/logo.png" alt="Logo">
          <span class="ml-3 font-bold text-xl">Ontdek je bediening</span>
        </div>
      </RouterLink>
      <div class="hidden md:flex space-x-8">
        <RouterLink to="/" href="#" class="hover:text-gray-900">Home</RouterLink>
        <RouterLink to="/about" href="#" class="hover:text-gray-900">Over Ons</RouterLink>
        <RouterLink to="/contact" href="#" class="hover:text-gray-900">Contact</RouterLink>
      </div>
      <RouterView />
    </div>
  </nav>
  <div class="bg-cover bg-center h-screen flex items-center justify-center">
    <div class="bg-gray-900/50 backdrop-blur-sm p-16 rounded">
      <h1 class="text-3xl font-bold mb-4 text-white">Word lid van onze community!</h1>
      <p class="text-lg mb-8 text-white">Doe de gratis test en ontdek wat we te bieden hebben.</p>
      <div class="flex justify-center">
        <button @click="handleNieuwClick" class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Nieuw?</button>
        <button @click="handleAlLidClick" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-4">Al lid?</button>
      </div>
    </div>
  </div>
  <div class="home-page bg-white flex items-center justify-center p-8">
    <section class="max-w-4xl w-full bg-gray-50 p-8 rounded-2xl shadow-lg">
      <h1 class="text-4xl font-extrabold text-gray-800 mb-4 text-center">Ons doel</h1>
      <p class="text-gray-600 text-lg mb-8 text-center">
        Bedieningenprofiel is een online platform dat kerken en organisaties inzicht geeft in de samenstelling van hun team en leden. Op het dashboard verschijnt een groepsanalyse aan de hand van de vijfvoudige bediening.
        We zijn een 'sociale onderneming'. Dat is een onderneming gericht op impact maken. We zien geld als middel om ons doel te bereiken.
        Ons doel is om elke kerk capabel te maken om in haar bestemming te wandelen, zowel als collectief, als ook elk individueel lid.
        In 2024 heeft initiatiefnemer Jochem Mimpen het project Bedieningenprofiel gelanceerd in samenwerking met Bitacademy en Twaanlab. Vier MBO4 studenten zetten het basisproduct in elkaar, zodat kerken en organisaties kunnen kennismaken met Bedieningenprofiel.
      </p>
    </section>
  </div>

  <div class="">
    <GoogleMap
    :api-key="googleMapsAPIKey"
    style="width: 100%; height: 500px"
    :center="center"
    :zoom="15"
    map-id="e6d3ab2fbdda1585"
    >
    <AdvancedMarker :options="markerOptions" :pin-options="pinOptions" @click="openInfoWindow"/>
    <InfoWindow :position="infoWindowPosition" :options="infoWindowOptions" @closeclick="closeInfoWindow"/>
    </GoogleMap>
  </div>
</template>

<style>
.bg-center {
  background-image: url('../assets/florence.jpg');
}
</style>
