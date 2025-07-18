export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // Compatibility date
  compatibilityDate: '2025-06-25',
  
  // Modules
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/google-fonts', '@nuxt/image'],
  
  // Components auto-import
  components: [
    { path: '~/components', pathPrefix: false }
  ],
  
  // CSS
  css: [
    '~/assets/css/variables.css',
    '~/assets/css/chakra-utilities.css',
  ],
  
  // Google Fonts
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700],
      'Fira Code': [400, 500]
    }
  },
  
  // App config
  app: {
    head: {
      title: 'Jery - Full Stack Developer',
      meta: [
        { name: 'description', content: 'Portfolio of Jery, Full Stack Developer' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#3182ce' },
        { name: 'msapplication-TileColor', content: '#3182ce' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  },
  
  // Add this block to treat 'nuxt-img' as a custom element
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'nuxt-img' || tag === 'NuxtImg'
    }
  },
  
  // Runtime config
  runtimeConfig: {
    // Private keys (only available on server-side)
    emailApiKey: process.env.EMAIL_API_KEY,
    
    // Public keys (exposed to client-side)
    public: {
      siteUrl: process.env.SITE_URL || 'http://localhost:3000',
      gtag: process.env.GTAG_ID
    }
  }
})