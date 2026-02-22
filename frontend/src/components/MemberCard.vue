<template>
  <v-card :color="color" class="pa-4 text-center" elvation="4">
    <v-avatar size="64" class="mb-3">
      <v-icon size="40">mdi-account</v-icon>
    </v-avatar>
    <div class="text-h6 font-weight-bold">
      {{name}}
    </div>
  </v-card>
</template>

<script setup lang="ts">

defineProps<{
  name: string,
  color: string
}>()

</script>
