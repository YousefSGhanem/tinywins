<template>
  <v-app style="background-color: #F7F8FA; color: #2E2E2E;">
    <v-app-bar title="TinyWins" />
    <v-main>
      <v-container class="py-8">
        <router-view/>
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
