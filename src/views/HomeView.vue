<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { GoogleMap, AdvancedMarker, InfoWindow } from 'vue3-google-map';

const center = { lat: 52.518727, lng: 4.973419 };
const googleMapsAPIKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const newsApiKey = import.meta.env.VITE_NEWS_API_KEY;

interface NewsArticle {
  url: string;
  title: string;
  description: string;
  urlToImage?: string;
}

const newsArticles = ref<NewsArticle[]>([]);

const testClick = () => {
  console.log('Marker clicked!');
  openInfoWindow();
};

const contentElement = document.createElement('div');
contentElement.textContent = 'House of Hope';
contentElement.style.backgroundColor = 'white';
contentElement.style.padding = '5px';
contentElement.style.borderRadius = '3px';

const markerOptions = {
  position: center,
  content: contentElement,
  title: 'HQ',
};

const pinOptions = { background: '#FBBC04' };

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

const isInfoWindowOpen = ref(false);
const isMapLoaded = ref(false);

const openInfoWindow = () => {
  console.log('openInfoWindow called');
  if (!isMapLoaded.value) {
    console.log('Map not loaded');
    return;
  }
  console.log('Map loaded');
  infoWindowPosition.value = center;
  console.log('InfoWindow Position:', infoWindowPosition.value);
  if (isInfoWindowOpen.value) {
    infoWindow.value?.close();
    infoWindow.value = null;
    isInfoWindowOpen.value = false;
    console.log('InfoWindow closed');
  }
  if (!infoWindow.value) {
    console.log('Creating InfoWindow');
    infoWindow.value = new google.maps.InfoWindow(infoWindowOptions.value);
    console.log('InfoWindow created');
    infoWindow.value.open();
    console.log('InfoWindow opened');
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

const handleMapLoaded = () => {
  console.log('Map Loaded Event Fired');
  console.log('Map Loaded');
  isMapLoaded.value = true;
};

const fetchNews = async () => {
  const url = `https://newsapi.org/v2/everything?q=christianity&apiKey=${newsApiKey}`; // "christianity" in plaats van "church"
  try {
    const response = await fetch(url);
    const data = await response.json();
    newsArticles.value = data.articles.slice(0, 4);
  } catch (error) {
    console.error('Error fetching news:', error);
  }
};

onMounted(() => {
  fetchNews();
  console.log('Component Mounted');
});
</script>

<template>
  <div>
    <nav class="bg-white border-b-2 border-gray-200">
      <div class="container mx-auto flex justify-between items-center py-4">
        <RouterLink to="/">
          <div class="flex items-center">
            <img class="h-10 w-auto" src="../assets/logo.png" alt="Logo" />
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
          <button @click="handleNieuwClick" class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Nieuw?
          </button>
          <button @click="handleAlLidClick" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-4">
            Al lid?
          </button>
        </div>
      </div>
    </div>
    <div class="home-page bg-white flex items-center justify-center p-8">
      <section class="max-w-4xl w-full bg-gray-50 p-8 rounded-2xl shadow-lg">
        <h1 class="text-4xl font-extrabold text-gray-800 mb-4 text-center">Ons doel</h1>
        <p class="text-gray-600 text-lg mb-8 text-center">
          Bedieningenprofiel is een online platform dat kerken en organisaties inzicht geeft in de samenstelling van hun
          team en leden. Op het dashboard verschijnt een groepsanalyse aan de hand van de vijfvoudige bediening. We zijn
          een 'sociale onderneming'. Dat is een onderneming gericht op impact maken. We zien geld als middel om ons doel te
          bereiken. Ons doel is om elke kerk capabel te maken om in haar bestemming te wandelen, zowel als collectief, als
          ook elk individueel lid. In 2024 heeft initiatiefnemer Jochem Mimpen het project Bedieningenprofiel gelanceerd
          in samenwerking met Bitacademy en Twaanlab. Vier MBO4 studenten zetten het basisproduct in elkaar, zodat
          kerken en organisaties kunnen kennismaken met Bedieningenprofiel.
        </p>
      </section>
    </div>

    <div class="news-grid">
      <div v-for="article in newsArticles" :key="article.url" class="news-item">
        <img :src="article.urlToImage" alt="Article Image" v-if="article.urlToImage" class="news-image" />
        <h3 class="news-title">{{ article.title }}</h3>
        <p class="news-description">{{ article.description }}</p>
        <a :href="article.url" target="_blank" class="read-more-button">Lees meer</a>
      </div>
    </div>

    <div>
      <GoogleMap
        :api-key="googleMapsAPIKey"
        style="width: 100%; height: 500px"
        :center="center"
        :zoom="15"
        map-id="e6d3ab2fbdda1585"
        @loaded="handleMapLoaded"
      >
        <AdvancedMarker :options="markerOptions" :pin-options="pinOptions" @click="testClick" />
        <InfoWindow :position="infoWindowPosition" :options="infoWindowOptions" @closeclick="closeInfoWindow" />
      </GoogleMap>
    </div>
  </div>
</template>

<style>
.bg-center {
  background-image: url('../assets/florence.jpg');
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.news-item {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.news-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 15px;
  border-radius: 4px;
}

.news-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.news-description {
  font-size: 1rem;
  margin-bottom: 15px;
}

.read-more-button {
  background-color: #4c51bf;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  align-self: flex-start;
}
</style>
