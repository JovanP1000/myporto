export default defineEventHandler(async (event) => {
    // Mock data - replace with database query
    const projects = [
      {
        id: 1,
        title: "E-Commerce Platform",
        slug: "ecommerce-platform",
        description: "A full-stack e-commerce solution built with Nuxt.js, featuring user authentication, payment processing, and admin dashboard.",
        image: "/images/projects/ecommerce.svg",
        technologies: ["Nuxt.js", "Vue.js", "Node.js", "MongoDB", "Stripe"],
        category: "Web Application",
        featured: true,
        liveUrl: "https://ecommerce-demo.com",
        githubUrl: "https://github.com/johndoe/ecommerce",
        date: "2024-01-15"
      },
      {
        id: 2,
        title: "Task Management App",
        slug: "task-management-app",
        description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
        image: "/images/projects/taskapp.svg",
        technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Socket.io"],
        category: "Productivity",
        featured: true,
        liveUrl: "https://taskapp-demo.com",
        githubUrl: "https://github.com/johndoe/taskapp",
        date: "2023-11-20"
      },
      {
        id: 3,
        title: "Weather Dashboard",
        slug: "weather-dashboard",
        description: "A responsive weather dashboard that displays current weather, forecasts, and interactive maps using multiple weather APIs.",
        image: "/images/projects/weather.svg",
        technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
        category: "Dashboard",
        featured: false,
        liveUrl: "https://weather-dash.com",
        githubUrl: "https://github.com/johndoe/weather-dashboard",
        date: "2023-09-10"
      }
    ]
  
    return {
      data: projects,
      total: projects.length
    }
  })
  