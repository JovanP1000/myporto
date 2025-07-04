import { ref, readonly } from 'vue'

export const usePortfolio = () => {
    const projects = ref([])
    const skills = ref([])
    const experience = ref([])
    const loading = ref(false)
    const error = ref(null)
  
    const fetchProjects = async () => {
      try {
        loading.value = true
        const { data } = await $fetch('/api/projects')
        projects.value = data
      } catch (err) {
        error.value = err.message
      } finally {
        loading.value = false
      }
    }
  
    const getProjectBySlug = (slug) => {
      return projects.value.find(project => project.slug === slug)
    }
  
    const getFeaturedProjects = () => {
      return projects.value.filter(project => project.featured)
    }
  
    const getSkillsByCategory = (category) => {
      return skills.value.filter(skill => skill.category === category)
    }
  
    return {
      projects: readonly(projects),
      skills: readonly(skills),
      experience: readonly(experience),
      loading: readonly(loading),
      error: readonly(error),
      fetchProjects,
      getProjectBySlug,
      getFeaturedProjects,
      getSkillsByCategory
    }
  }
  