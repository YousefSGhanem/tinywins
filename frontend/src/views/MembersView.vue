<template>
  <v-card color="surface" elevation="0" class="mb-6">
    <v-card-title class="d-flex align-center">
      <v-icon class="mr-2">mdi-account-group</v-icon>
      Members

      <v-spacer/>

      <v-btn
        v-if="appState.isParentMode"
        color="secondary"
        variant="flat"
        prepend-icon="mdi-plus"
      >
        Add Member
      </v-btn>
    </v-card-title>

    <v-card-subtitle>
      <v-chip
        size="small"
        variant="tonal"
        :color= "appState.isParentMode ? 'primary' : 'accent' "
      >
        {{ appState.isParentMode ? 'Parent' : 'Child' }}
      </v-chip>
    </v-card-subtitle>
  </v-card>

  <v-row>
    <v-col
      v-for="member in visibleMembers"
      :key="member.id"
      cols="12"
      sm="6"
      md="4"
    >
      <MemberCard
        :name="member.name"
        :color="member.color"
        :role-type="member.roleType"
      />
    </v-col>
  </v-row>
</template>


<script setup lang="ts">
import MemberCard from '../components/MemberCard.vue'
import {computed} from 'vue'
import {appState} from '../state/appState'
import {membersState} from '../state/membersState'

const visibleMembers = computed(() => {
  if( appState.isParentMode) return membersState.members
  return membersState.members.filter(m => m.roleType === 'CHILD')
})

</script>
