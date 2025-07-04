<template>
    <div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </template>
  
  <script setup>
  // Global app setup
  useHead({
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' }
    ]
  })
  </script>
  
  <style>
  /* Global styles */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: var(--chakra-fonts-body);
    line-height: 1.6;
    color: var(--chakra-colors-gray-800);
    background-color: #ffffff;
  }
  
  /* Selection styles */
  ::selection {
    background-color: var(--chakra-colors-blue-500);
    color: white;
  }
  
  /* Focus styles */
  *:focus {
    outline: 2px solid var(--chakra-colors-blue-500);
    outline-offset: 2px;
  }
  
  /* Smooth transitions */
  * {
    transition: color 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
  }
  
  /* Scrollbar styles */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: var(--chakra-colors-gray-100);
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--chakra-colors-gray-400);
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: var(--chakra-colors-gray-500);
  }
  </style>
  