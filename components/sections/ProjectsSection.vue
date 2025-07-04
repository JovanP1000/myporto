<template>
  <section id="projects" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Featured Projects</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Project 1 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Icon name="mdi:web" class="w-16 h-16 text-white" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2 text-gray-800">HD Wallpaper</h3>
              <p class="text-gray-600 mb-4">
                A stunning wallpaper gallery application built with Flutter and Golang. Features high-resolution image browsing, categorized collections, search functionality, and optimized image loading for the best user experience.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Flutter</span>
                <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Golang</span>
                <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">MySQL</span>
              </div>
              <div class="flex gap-2">
                <a href="#" class="text-blue-600 hover:text-blue-800 text-sm font-medium">Live Demo</a>
                <a href="#" class="text-gray-600 hover:text-gray-800 text-sm font-medium">GitHub</a>
              </div>
            </div>
          </div>

          <!-- Project 2 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
              <Icon name="mdi:cellphone" class="w-16 h-16 text-white" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2 text-gray-800">Ticket Sobek</h3>
              <p class="text-gray-600 mb-4">
                On-the-spot ticket buying with react native. Features event management, seat selection, payment processing, and real-time availability tracking for seamless ticket purchasing experience.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React Native</span>
                <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Laravel</span>
                <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">GraphQl</span>
                <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">MySQL</span>
              </div>
              <div class="flex gap-2">
                <a href="#" class="text-blue-600 hover:text-blue-800 text-sm font-medium">Live Demo</a>
                <a href="#" class="text-gray-600 hover:text-gray-800 text-sm font-medium">GitHub</a>
              </div>
            </div>
          </div>

          <!-- Project 3 -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div class="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
              <Icon name="mdi:chart-line" class="w-16 h-16 text-white" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2 text-gray-800">My Koperasi</h3>
              <p class="text-gray-600 mb-4">
                A digital cooperative management system designed for member registration, savings tracking, loan management, and financial reporting. Built to streamline cooperative operations with user-friendly interfaces.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Vue.js</span>
                <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Laravel</span>
                <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">GraphQl</span>
                <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">MySQL</span>
              </div>
              <div class="flex gap-2">
                <a href="#" class="text-blue-600 hover:text-blue-800 text-sm font-medium">Live Demo</a>
                <a href="#" class="text-gray-600 hover:text-gray-800 text-sm font-medium">GitHub</a>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <BaseButton variant="outline" size="lg">
            View All Projects
            <Icon name="mdi:arrow-right" class="ml-2" />
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic here
</script>
  