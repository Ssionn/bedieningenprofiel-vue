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
  <div>
    <H1>Dit gaat over Ons</H1>
  </div>
</template>
