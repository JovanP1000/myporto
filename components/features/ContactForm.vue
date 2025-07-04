<template>
    <form @submit.prevent="submitForm" class="contact-form bg-white p-8 rounded-xl shadow-lg">
      <div class="form-group mb-6">
        <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
          Full Name *
        </label>
        <BaseInput
          id="name"
          v-model="form.name"
          type="text"
          placeholder="Your full name"
          required
          :error="errors.name"
        />
      </div>
  
      <div class="form-group mb-6">
        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
          Email Address *
        </label>
        <BaseInput
          id="email"
          v-model="form.email"
          type="email"
          placeholder="your.email@example.com"
          required
          :error="errors.email"
        />
      </div>
  
      <div class="form-group mb-6">
        <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
          Subject
        </label>
        <BaseInput
          id="subject"
          v-model="form.subject"
          type="text"
          placeholder="What's this about?"
        />
      </div>
  
      <div class="form-group mb-6">
        <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          v-model="form.message"
          rows="5"
          placeholder="Tell me about your project or just say hello!"
          required
          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
          :class="{ 'border-red-500': errors.message }"
        ></textarea>
        <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
      </div>
  
      <div class="form-actions">
        <BaseButton
          type="submit"
          variant="primary"
          size="lg"
          :disabled="submitting"
          class="w-full"
        >
          <Icon v-if="submitting" name="mdi:loading" class="animate-spin mr-2" />
          {{ submitting ? 'Sending...' : 'Send Message' }}
        </BaseButton>
      </div>
  
      <div v-if="success" class="success-message mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
        <Icon name="mdi:check-circle" class="inline mr-2" />
        Message sent successfully! I'll get back to you soon.
      </div>
  
      <div v-if="submitError" class="error-message mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
        <Icon name="mdi:alert-circle" class="inline mr-2" />
        {{ submitError }}
      </div>
    </form>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue'
  
  const form = reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const errors = reactive({})
  const submitting = ref(false)
  const success = ref(false)
  const submitError = ref('')
  
  const validateForm = () => {
    const newErrors = {}
  
    if (!form.name.trim()) {
      newErrors.name = 'Name is required'
    }
  
    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
  
    if (!form.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }
  
    Object.assign(errors, newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const submitForm = async () => {
    // Reset states
    success.value = false
    submitError.value = ''
    Object.keys(errors).forEach(key => delete errors[key])
  
    if (!validateForm()) {
      return
    }
  
    try {
      submitting.value = true
      
      const response = await $fetch('/api/contact', {
        method: 'POST',
        body: form
      })
  
      success.value = true
      
      // Reset form
      Object.keys(form).forEach(key => {
        form[key] = ''
      })
  
    } catch (error) {
      submitError.value = error.data?.message || 'Failed to send message. Please try again.'
    } finally {
      submitting.value = false
    }
  }
  </script>
  