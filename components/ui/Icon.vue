<template>
  <Icon :icon="name" v-bind="$attrs" />
</template>

<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  name: {
    type: String,
    required: true
  }
})
</script> 