<template>
  <section 
    id="hero"
    class="hero-section text-white relative overflow-hidden"
  >
    <!-- Floating shapes -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="shape shape-1 absolute bg-blue-500/10 rounded-full blur-xl"></div>
      <div class="shape shape-2 absolute bg-purple-500/10 rounded-full blur-xl"></div>
      <div class="shape shape-3 absolute bg-cyan-500/10 rounded-full blur-xl"></div>
    </div>

    <div class="container mx-auto px-4 py-12 md:py-16 relative z-10">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div class="hero-content flex flex-col items-start max-w-2xl">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
            Hi, I'm 
            <span class="text-blue-500 relative inline-block">
              Jery
              <span class="hero-underline absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"></span>
            </span>
          </h1>
          
          <p class="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
            Full Stack Developer passionate about creating beautiful, 
            functional web applications with modern technologies.
          </p>
          
          <div class="flex flex-row gap-4 w-full">
            <BaseButton 
              variant="primary" 
              size="lg"
              @click="scrollToSection('projects')"
              aria-label="View my work"
              class="flex-1 sm:flex-none"
            >
              View My Work
            </BaseButton>
            <BaseButton 
              variant="outline" 
              size="lg"
              @click="scrollToSection('contact')"
              aria-label="Get in touch"
              class="flex-1 sm:flex-none"
            >
              Get In Touch
            </BaseButton>
          </div>          
          
          <div class="social-links flex gap-6 mt-8">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-blue-500 transition-colors duration-300 text-2xl"
              :aria-label="social.name"
            >
              <Icon :name="social.icon" />
            </a>
          </div>
        </div>
      </div>
    </div>  
  </section>
</template>

<script setup>
const socialLinks = [
  { name: 'GitHub', icon: 'mdi:github', url: 'https://github.com/Jhero' },
  { name: 'Email', icon: 'mdi:email', url: 'mailto:jhery_it@yahoo.com' }
]

const shapes = [
  { size: '200px', top: '10%', right: '10%', delay: '-2s' },
  { size: '150px', bottom: '20%', left: '5%', delay: '-4s' },
  { size: '100px', top: '60%', right: '20%', delay: '-6s' }
]

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
}

.profile-container {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}

.shape {
  animation: float 8s ease-in-out infinite;
}

.shape-1 {
  width: v-bind('shapes[0].size');
  height: v-bind('shapes[0].size');
  top: v-bind('shapes[0].top');
  right: v-bind('shapes[0].right');
  animation-delay: v-bind('shapes[0].delay');
}

.shape-2 {
  width: v-bind('shapes[1].size');
  height: v-bind('shapes[1].size');
  bottom: v-bind('shapes[1].bottom');
  left: v-bind('shapes[1].left');
  animation-delay: v-bind('shapes[1].delay');
}

.shape-3 {
  width: v-bind('shapes[2].size');
  height: v-bind('shapes[2].size');
  top: v-bind('shapes[2].top');
  right: v-bind('shapes[2].right');
  animation-delay: v-bind('shapes[2].delay');
}

.hero-underline {
  animation: underlineGrow 0.8s ease-out forwards;
  transform-origin: left;
  transform: scaleX(0);
}

@keyframes underlineGrow {
  to {
    transform: scaleX(1);
  }
}

.hero-content {
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.social-links a {
  transition: all 0.3s ease;
}

.social-links a:hover {
  transform: translateY(-2px);
  color: #3b82f6;
}
</style>