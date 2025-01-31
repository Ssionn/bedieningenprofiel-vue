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
  <div class="about-page bg-gray-50 p-8">
    <section class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl font-extrabold text-gray-800 mb-4">Over ons</h1>
      <p class="text-gray-600 text-lg mb-8">
        Jochem Mimpen is reli-ondernemer, geroepen om Gods koninkrijk verder te bouwen.
        In samenwerking met anderen wil hij bestaande kerken activeren en nieuwe kerken planten.
        Hij is getrouwd met Joanna en ze hebben drie zoons.
      </p>
      <img
        src="../assets/Jochem.jpeg"
        alt="Profile Picture"
        class="rounded-full mx-auto shadow-lg w-40 h-40 object-cover mb-6"
      />
    </section>
  </div>
  <div class="about-page bg-gray-50 p-8">
    <section class="max-w-4xl mx-auto text-center">
      <p class="text-gray-600 text-lg mb-8">
        Casper Kizewski is student/programmeur, gedreven om innovatieve web-oplossingen te bouwen.
        Met expertise in Laravel en de TALL stack ontwikkelt hij moderne applicaties.
        Hij focust zich op het creëren van efficiënte en schaalbare software-oplossingen.</p>
      <img
        src="../assets/Casper.jpg"
        alt="Profile Picture"
        class="rounded-full mx-auto shadow-lg w-40 h-40 object-cover mb-6"
      />
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutMePage'
}
</script>

<style>
.about-page {
  font-family: 'Inter', sans-serif;
}
</style>
