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
  <div class="contact-page bg-gray-50 min-h-screen p-8 flex items-center justify-center">
    <section class="max-w-3xl w-full bg-white p-8 rounded-2xl shadow-lg">
      <h1 class="text-4xl font-extrabold text-gray-800 mb-6 text-center">Vragen?</h1>
      <p class="text-gray-600 text-lg mb-8 text-center">
        Vul dan dit formulier in zodat we je kunnen bereiken.
      </p>

      <form class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Naam</label>
          <input
            type="text"
            id="name"
            class="w-full border border-gray-300 rounded-lg p-4 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Naam"
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            class="w-full border border-gray-300 rounded-lg p-4 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Email@hotmail.com"
          />
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Je vraag</label>
          <textarea
            id="message"
            class="w-full border border-gray-300 rounded-lg p-4 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            rows="5"
            placeholder="Typ hier je bericht"
          ></textarea>
        </div>

        <div class="flex justify-center mt-6">
          <button type="submit" class="bg-purple-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-purple-700 transition-all">
            Send Message
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactPage'
}
</script>


