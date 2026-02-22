<template>
  <v-row>
    <v-col
      v-for="member in visibleMembers"
      :key="member.name"
      cols="12"
      sm="6"
      md="4">
      <MemberCard :name="member.name" :color="member.color" :role-type="member.roleType"/>
    </v-col>
  </v-row>

  <v-alert v-if="appState.isParentMode" class="mt-6" type="info" variant="tonal">
    Parent Mode is ON: admin features will appear here later.
  </v-alert>
</template>


<script setup lang="ts">
import MemberCard from '../components/MemberCard.vue'
import {computed} from 'vue'
import {appState} from '../state/appState'


const members = [
  {name: 'Zayneb' , color: 'secondary', roleType: 'CHILD'},
  {name: 'Jamal' , color: 'primary', roleType: 'CHILD'},
  {name: 'Basma' , color: 'accent', roleType: 'CHILD'},
  {name:'Mom', color: 'primary', roleType: 'PARENT'}
]

const visibleMembers = computed( () => {
  if (appState.isParentMode) return members
  return members.filter(member => member.roleType === 'CHILD')
})

</script>
