<template>
    <button 
      :class="buttonClasses"
      :disabled="disabled"
      @click="$emit('click')"
    >
      <Icon v-if="leftIcon" :name="leftIcon" class="mr-2" />
      <slot />
      <Icon v-if="rightIcon" :name="rightIcon" class="ml-2" />
    </button>
  </template>
  
  <script setup>
  import { computed } from 'vue'

  const props = defineProps({
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'outline', 'ghost'].includes(value)
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    leftIcon: String,
    rightIcon: String
  })
  
  defineEmits(['click'])
  
  const buttonClasses = computed(() => {
    const baseClasses = 'inline-flex items-center justify-center font-medium transition rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2'
    
    const variantClasses = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
      outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
      ghost: 'text-blue-600 hover:bg-blue-50 focus:ring-blue-500'
    }
    
    const sizeClasses = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-2 text-md',
      lg: 'px-6 py-3 text-lg'
    }
    
    const disabledClasses = props.disabled ? 'opacity-50 cursor-not-allowed' : ''
    
    return [
      baseClasses,
      variantClasses[props.variant],
      sizeClasses[props.size],
      disabledClasses
    ].join(' ')
  })
  </script>
  