<template>
    <div class="base-input">
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :class="inputClasses"
        @input="$emit('update:modelValue', $event.target.value)"
        @blur="$emit('blur')"
        @focus="$emit('focus')"
      >
      <p v-if="error" class="error-text text-red-500 text-sm mt-1">{{ error }}</p>
      <p v-else-if="helpText" class="help-text text-gray-500 text-sm mt-1">{{ helpText }}</p>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'

  const props = defineProps({
    id: String,
    type: {
      type: String,
      default: 'text'
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    placeholder: String,
    required: Boolean,
    disabled: Boolean,
    error: String,
    helpText: String,
    size: {
      type: String,
      default: 'md',
      validator: (value) => ['sm', 'md', 'lg'].includes(value)
    }
  })
  
  defineEmits(['update:modelValue', 'blur', 'focus'])
  
  const inputClasses = computed(() => {
    const baseClasses = 'w-full border rounded-lg transition focus:ring-2 focus:ring-blue-500 focus:border-transparent'
    
    const sizeClasses = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3 text-md',
      lg: 'px-5 py-4 text-lg'
    }
    
    const stateClasses = props.error 
      ? 'border-red-500' 
      : 'border-gray-300 hover:border-gray-400'
      
    const disabledClasses = props.disabled 
      ? 'bg-gray-100 cursor-not-allowed opacity-60' 
      : 'bg-white'
    
    return [
      baseClasses,
      sizeClasses[props.size],
      stateClasses,
      disabledClasses
    ].join(' ')
  })
  </script>