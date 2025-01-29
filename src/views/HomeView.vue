<script setup lang="ts">

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
    <RouterView/>
    </div>
  </nav>
  <div class="bg-cover bg-center h-screen flex items-center justify-center">
    <div class="bg-gray-900/50 backdrop-blur-sm p-16 rounded">
      <h1 class="text-3xl font-bold mb-4 text-white">Word lid van onze community!</h1>
      <p class="text-lg mb-8 text-white">Doe de gratis test en ontdek wat we te bieden hebben.</p>
      <div class="flex justify-center">
        <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">Nieuw?</button>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-4">Al lid?</button>
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
</template>

<style>
.bg-center {
  background-image: url('../assets/florence.jpg');
}
</style>

<script>

export default {
  data() {},
  methods: {
    handleNieuwClick() {
      // Doe iets als er op de "Nieuw?" knop wordt geklikt
      console.log('Nieuw knop geklikt');
    },
    handleAlLidClick() {
      // Doe iets als er op de "Al lid?" knop wordt geklikt
      console.log('Al lid knop geklikt');
    },
  },
  name: 'HomePage'
};
</script>

