<template>
  <v-app style="background-color: #F7F8FA; color: #2E2E2E;">
    <v-app-bar title="TinyWins">
      <template #append>
        <v-btn variant="tonal" color="primary" @click="onModeButtonClick">
          {{ modeLabel}}
        </v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <v-container class="py-8">
        <router-view/>
      </v-container>
    </v-main>

    <v-dialog v-model="pinDialogOpen" max-width="360">
      <v-card>
        <v-card-title>Parent PIN</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="pinInput"
            label="Enter 4-digit PIN"
            type="password"
            inputmode="numeric"
            maxlength="4"
            hint="Only Parents should know this."
            persistent-hint
            :error-messages="pinError"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
            <v-btn variant="text" @click="cancelPin">Cancel</v-btn>
            <v-btn color="primary" variant="flat" @click="confirmPin">Unlock</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>


<script setup lang="ts">
import {computed, ref} from 'vue'
import {appState} from './state/appState'

const modeLabel = computed(() => appState.isParentMode ? 'Parent Mode' : 'Kid Mode')

const pinDialogOpen = ref(false)
const pinInput = ref('')
const pinError = ref('')

function onModeButtonClick() {
  if (appState.isParentMode) {
    appState.isParentMode= false
    pinInput.value = ''
    pinError.value = ''
    return
  }

  // Kid -> Parent: Pin required
  pinDialogOpen.value = true
  pinInput.value = ''
  pinError.value = ''
}

function confirmPin() {
  if(pinInput.value === appState.parentPin) {
    appState.isParentMode = true
    pinDialogOpen.value = false
    pinInput.value = ''
    pinError.value = ''
  } else {
    pinError.value = 'Wrong PIN'
  }
}

function cancelPin() {
  pinDialogOpen.value = false
  pinInput.value = ''
  pinError.value = ''
}

</script>

<style scoped></style>
