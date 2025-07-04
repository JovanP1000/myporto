<template>
  <section id="contact" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Get In Touch</h2>
        
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div>
            <h3 class="text-2xl font-semibold mb-6 text-gray-800">Let's Connect</h3>
            <p class="text-lg text-gray-600 mb-8">
              I'm always interested in new opportunities and exciting projects. 
              Feel free to reach out if you'd like to work together or just want to say hello!
            </p>
            
            <div class="space-y-4">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon name="mdi:email" class="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p class="font-medium text-gray-800">Email</p>
                  <p class="text-gray-600">jhery_it@yahoo.com</p>
                </div>
              </div>
              
              <!-- <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Icon name="mdi:linkedin" class="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p class="font-medium text-gray-800">LinkedIn</p>
                  <p class="text-gray-600">linkedin.com/in/johndoe</p>
                </div>
              </div> -->
              
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Icon name="mdi:github" class="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p class="font-medium text-gray-800">GitHub</p>
                  <p class="text-gray-600">github.com/Jhero</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Contact Form -->
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic here
</script> 