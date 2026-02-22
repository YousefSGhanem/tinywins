<template>
  <h1>You did it!</h1>
  <p> Backend says: {{health}}</p>
</template>


<script setup lang="ts">
import { ref, onMounted} from 'vue'

const health = ref('loading...')

onMounted(async() => {
  const response = await fetch('/api/health')
  health.value = await response.text()
})

</script>

<style scoped></style>
