<template>
  <v-card
    :color="props.color"
    elevation="6"
    rounded="xl"
    class="pa-3 member-card">
    <v-card-item >
      <template #prepend>
        <v-chip
          v-if="showAdmin"
          size="small"
          variant="tonal"
          color="soft-background"
          >
          {{ props.roleType }}
        </v-chip>
      </template>

      <template #append>
        <v-btn
          v-if="showAdmin"
          icon="mdi-pencil"
          size="small"
          variant="text"
          color="text-primary"
          @click="$emit('edit')"
        />
        <v-btn
          v-if="showAdmin"
          icon="mdi-delete"
          size="small"
          variant="text"
          color="text-primary"
          @click="$emit('delete')"
        />
      </template>
    </v-card-item>

    <v-card-text class="d-flex flex-column align-center justify-center text-center py-6">
      <v-avatar
        size="88"
        color="surface"
        class="mb-4"
      >
        <v-icon size="48" color="primary">
          {{ avatarIcon }}
        </v-icon>
      </v-avatar>

      <v-sheet
        color="transparent"
        rounded="lg"
      >
        <v-card-title class="text-h6 font-weight-bold justify-center pa-0">
          {{ props.name }}
        </v-card-title>
      </v-sheet>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { appState } from '../state/appState'
import type {AvatarKey, RoleType} from '../models/Member'

const props = defineProps<{
  name: string,
  color: string,
  roleType: RoleType
  avatarKey: AvatarKey
}>()

defineEmits(['edit', 'delete'])
const showAdmin = computed( () => appState.isParentMode )

const avatarIconMap: Record<AvatarKey, string> = {
  star: 'mdi-star',
  rocket: 'mdi-rocket-launch',
  heart: 'mdi-heart',
  paw: 'mdi-paw',
  crown: 'mdi-crown',
  lightning: 'mdi-lightning-bolt',
}

const avatarIcon = computed(() => avatarIconMap[props.avatarKey])

</script>

<style scoped>
.member-card {
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    filter 0.2s ease;
  cursor: pointer;
}

.member-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
  filter: brightness(1.02);
}
</style>
