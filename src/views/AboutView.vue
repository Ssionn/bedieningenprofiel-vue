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
  <div class="Cardholder flex justify-evenly text-left bg-gray-100">
    <div class="Card1 w-96 h-screen mt-6">
      <div class="Card1inside bg-green-400 h-32 rounded-t-lg">
        <img src="../assets/Casper.jpg" alt="Profile Picture" class="rounded-full mt-6 mx-auto shadow-lg w-32 h-32 mb-8 object-cover"/>
      </div>
      <div class="bg-white rounded-b-lg h-96">
          <div class="Name mx-[110px] mb-[10px]">
            <big><strong>Casper Kizewski</strong></big>
          </div>
          <p class="text-gray-600 text-lg m-4 mb-[50px]">
          Casper Kizewski is student/programmeur, gedreven om innovatieve web-oplossingen te bouwen.
          Met expertise in Laravel en de TALL stack ontwikkelt hij moderne applicaties.
          Hij focust zich op het creëren van efficiënte en schaalbare software-oplossingen.
          </p>
          <div class="flex justify-evenly">
            <a href="https://nl.linkedin.com/in/CasperKi%C5%BCewski" target="_blank">
            <img src="../assets/linkedin-logo.jpg" alt="LinkedIn" width="32" height="32">
            </a>
            <a href="https://github.com/Ssionn" target="_blank">
            <img src="../assets/Github.svg" alt="LinkedIn" width="32" height="32">
            </a>
        </div>
        </div>
    </div>
    <div class="Card2 w-96 h-screen mt-6">
      <div class="Card1inside bg-purple-400 h-32 rounded-t-lg">
        <img src="../assets/Jochem.jpeg" alt="Profile Picture" class="rounded-full mt-6 mx-auto shadow-lg w-32 h-32 mb-8 object-cover"/>
      </div>
      <div class="bg-white rounded-b-lg h-96">
        <div class="Name mx-[110px] mb-[10px]">
          <big><strong>Jochem Mimpen</strong></big>
        </div>
        <p class="text-gray-600 text-lg m-4 mb-[50px]">
          Jochem Mimpen is reli-ondernemer, geroepen om Gods koninkrijk verder te bouwen.
          In samenwerking met anderen wil hij bestaande kerken activeren en nieuwe kerken planten.
          Hij is getrouwd met Joanna en ze hebben drie zoons.
        </p>
          <div class="flex justify-evenly">
            <a href="https://nl.linkedin.com/in/jochemmimpen" target="_blank">
            <img src="../assets/linkedin-logo.jpg" alt="LinkedIn" width="32" height="32">
            </a>
        </div>
      </div>
    </div>
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
