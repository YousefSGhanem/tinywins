<template>
  <v-card :color="color" class="pa-4 text-center" elvation="4">
    <div class="d-flex justify-end">
      <v-chip
        v-if="showRoleBadge"
        size="small"
        color="soft-background"
        text-color="test-primary"
      >
        {{ props.roleType }}
      </v-chip>
    </div>

    <v-avatar size="64" class="mb-3">
      <v-icon size="40">mdi-account</v-icon>
    </v-avatar>

    <div class="text-h6 font-weight-bold">
      {{props.name}}
    </div>
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

const showRoleBadge = computed (() => appState.isParentMode)



</script>
