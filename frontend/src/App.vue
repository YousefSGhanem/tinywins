<template>
  <v-app>
    <v-app-bar title="TinyWins" />
    <v-main>
      <v-container class="py-8">
        <v-card>
          <v-card-title>System CHeck</v-card-title>
          <v-card-text> Backend says {{health}}</v-card-text>
        </v-card>

      </v-container>
    </v-main>
  </v-app>
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
