<template>
  <v-app style="background-color: #F7F8FA; color: #2E2E2E;">
    <v-app-bar color="surface" elevation="1">
      <v-app-bar-title class="font-weight-bold">
        TinyWins
      </v-app-bar-title>

      <template #append>
        <v-chip
          class="mr-3"
          size="small"
          variant="tonal"
          :color="appState.isParentMode ? 'primary' : 'accent'"
        >
          {{ currentModeLabel }}
        </v-chip>

        <v-btn
          variant="flat"
          :color="appState.isParentMode ? 'secondary' : 'primary'"
          @click="onModeButtonClick"
        >
          {{ modeActionLabel }}
        </v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <v-container class="py-8">
        <router-view />
      </v-container>
    </v-main>

    <v-dialog v-model="pinDialogOpen" max-width="360">
      <v-card>
        <v-card-title class="d-flex align-center">
          <v-icon class="mr-2">mdi-lock</v-icon>
          Parent PIN
        </v-card-title>

        <v-card-text>
          <v-text-field
            v-model="pinInput"
            label="Enter 4-digit PIN"
            type="password"
            inputmode="numeric"
            maxlength="4"
            hint="Only parents should know this."
            persistent-hint
            :error-messages="pinError"
          />
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn variant="text" @click="cancelPin">
            Cancel
          </v-btn>
          <v-btn color="primary" variant="flat" @click="confirmPin">
            Unlock
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { appState } from './state/appState'

const pinDialogOpen = ref(false)
const pinInput = ref('')
const pinError = ref('')

const currentModeLabel = computed(() =>
  appState.isParentMode ? 'Parent Mode' : 'Kid Mode'
)

const modeActionLabel = computed(() =>
  appState.isParentMode ? 'Exit Parent Mode' : 'Unlock Parent Mode'
)

function onModeButtonClick() {
  if (appState.isParentMode) {
    appState.isParentMode = false
    pinInput.value = ''
    pinError.value = ''
    return
  }

  pinDialogOpen.value = true
  pinInput.value = ''
  pinError.value = ''
}

function confirmPin() {
  if (pinInput.value === appState.parentPin) {
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
