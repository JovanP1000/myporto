<template>
    <div class="project-card bg-white rounded-xl shadow-md hover:shadow-xl transition group">
      <div class="project-image relative overflow-hidden rounded-t-xl">
        <img 
          :src="project.image" 
          :alt="project.title"
          class="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
        >
        <div class="project-overlay absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition flex items-center justify-center">
          <div class="project-actions opacity-0 group-hover:opacity-100 transition flex gap-3">
            <BaseButton 
              v-if="project.liveUrl"
              variant="primary" 
              size="sm"
              @click="openLink(project.liveUrl)"
            >
              <Icon name="mdi:external-link" class="mr-1" />
              Live Demo
            </BaseButton>
            <BaseButton 
              v-if="project.githubUrl"
              variant="outline" 
              size="sm"
              @click="openLink(project.githubUrl)"
            >
              <Icon name="mdi:github" class="mr-1" />
              Code
            </BaseButton>
          </div>
        </div>
      </div>
      
      <div class="project-content p-6">
        <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ project.title }}</h3>
        <p class="text-gray-600 mb-4 line-clamp-3">{{ project.description }}</p>
        
        <div class="project-tech flex flex-wrap gap-2 mb-4">
          <span 
            v-for="tech in project.technologies" 
            :key="tech"
            class="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
          >
            {{ tech }}
          </span>
        </div>
        
        <div class="project-meta flex items-center justify-between text-sm text-gray-500">
          <span>{{ formatDate(project.date) }}</span>
          <span v-if="project.category" class="font-medium">{{ project.category }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    project: {
      type: Object,
      required: true
    }
  })
  
  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    })
  }
  </script>
  
  <style scoped>
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  </style>
  