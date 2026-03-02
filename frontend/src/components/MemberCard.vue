<template>
  <v-card :color="props.color" elevation="4">
    <v-card-title class="d-flex align-center">
      <v-chip
        v-if="showAdmin"
        size="small"
        variant="tonal"
        color="soft-background"
      >
        {{ props.roleType}}
      </v-chip>

      <v-spacer/>

      <v-btn
        v-if="showAdmin"
        icon="mdi-pincil"
        size="small"
        variant="text"
      />
      <v-btn
        v-if="showAdmin"
        icon="mdi-delete"
        size="small"
        variant="text"
      />
    </v-card-title>

    <v-card-text class="text-center">
      <v-avatar size="72" class="mb-3">
        <v-icon size="44">mdi-account</v-icon>
      </v-avatar>

      <v-card-subtitle class="text-h6 font-wight-bold">
        {{ props.name }}
      </v-card-subtitle>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { appState } from '../state/appState'
import type { RoleType } from '../models/Member'

const props = defineProps<{
  name: string,
  color: string,
  roleType: RoleType
}>()

const showAdmin = computed( () => appState.isParentMode )

</script>
