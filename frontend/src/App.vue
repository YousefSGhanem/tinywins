<template>
  <v-app style="background-color: #F7F8FA; color: #2E2E2E;">
    <v-app-bar title="TinyWins">
      <template #append>
        <v-btn variant="tonal" color="primary" @click="toggleParentMode">
          {{ parentModeLabel}}
        </v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <v-container class="py-8">
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>


<script setup lang="ts">
import { computed} from 'vue'
import {appState} from './state/appState'

const parentModeLabel = computed(() => appState.isParentMode ? 'Parent Mode' : 'Kid Mode')

function toggleParentMode() {
  //later we can use PIN
  appState.isParentMode= !appState.isParentMode
}

</script>

<style scoped></style>
