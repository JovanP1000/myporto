import { defineStore } from 'pinia'
import { ref, computed, readonly } from 'vue'

export const usePortfolioStore = defineStore('portfolio', () => {
  // Dummy data
  const dummyProjects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'Modern e-commerce platform built with Vue.js and Node.js',
      category: 'web',
      featured: true,
      image: '/images/ecommerce-project.jpg',
      technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Express'],
      githubUrl: 'https://github.com/username/ecommerce-project',
      liveUrl: 'https://ecommerce-demo.com',
      createdAt: '2024-01-15'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication',
      category: 'mobile',
      featured: true,
      image: '/images/banking-app.jpg',
      technologies: ['React Native', 'Firebase', 'TypeScript'],
      githubUrl: 'https://github.com/username/banking-app',
      liveUrl: null,
      createdAt: '2024-02-10'
    },
    {
      id: 3,
      title: 'Task Management Dashboard',
      description: 'Team collaboration tool with real-time updates and analytics',
      category: 'web',
      featured: false,
      image: '/images/task-dashboard.jpg',
      technologies: ['React', 'Socket.io', 'PostgreSQL', 'Docker'],
      githubUrl: 'https://github.com/username/task-manager',
      liveUrl: 'https://taskmanager-demo.com',
      createdAt: '2023-12-05'
    },
    {
      id: 4,
      title: 'Weather Forecast App',
      description: 'Beautiful weather app with location-based forecasts',
      category: 'mobile',
      featured: false,
      image: '/images/weather-app.jpg',
      technologies: ['Flutter', 'Dart', 'OpenWeather API'],
      githubUrl: 'https://github.com/username/weather-app',
      liveUrl: null,
      createdAt: '2024-03-20'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with dark mode and animations',
      category: 'web',
      featured: true,
      image: '/images/portfolio-site.jpg',
      technologies: ['Nuxt.js', 'TailwindCSS', 'GSAP'],
      githubUrl: 'https://github.com/username/portfolio',
      liveUrl: 'https://myportfolio.com',
      createdAt: '2024-01-01'
    },
    {
      id: 6,
      title: 'AI Chat Bot',
      description: 'Intelligent chatbot with natural language processing',
      category: 'ai',
      featured: false,
      image: '/images/chatbot.jpg',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'OpenAI'],
      githubUrl: 'https://github.com/username/ai-chatbot',
      liveUrl: 'https://chatbot-demo.com',
      createdAt: '2024-04-12'
    }
  ]

  const projects = ref(dummyProjects)
  const currentProject = ref(null)
  const loading = ref(false)
  const error = ref(null)

  // Simulate loading for better UX (optional)
  const fetchProjects = async () => {
    try {
      loading.value = true
      error.value = null
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Projects are already loaded from dummy data
      // projects.value = dummyProjects // Already set above
      
    } catch (err) {
      error.value = err.message || 'Failed to fetch projects'
    } finally {
      loading.value = false
    }
  }

  const setCurrentProject = (project) => {
    currentProject.value = project
  }

  const getFeaturedProjects = computed(() => {
    return projects.value.filter(project => project.featured)
  })

  const getProjectsByCategory = computed(() => {
    return (category) => projects.value.filter(project => project.category === category)
  })

  // Additional helper methods
  const getProjectById = computed(() => {
    return (id) => projects.value.find(project => project.id === id)
  })

  const getAllCategories = computed(() => {
    const categories = [...new Set(projects.value.map(project => project.category))]
    return categories
  })

  const getProjectsCount = computed(() => {
    return projects.value.length
  })

  return {
    // State
    projects: readonly(projects),
    currentProject: readonly(currentProject),
    loading: readonly(loading),
    error: readonly(error),
    
    // Computed
    getFeaturedProjects,
    getAllCategories,
    getProjectsCount,
    getProjectsByCategory,
    getProjectById,
    
    // Actions
    fetchProjects,
    setCurrentProject
  }
})