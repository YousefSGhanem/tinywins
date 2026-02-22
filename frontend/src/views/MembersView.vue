<template>
  <v-row>
    <v-col
      v-for="member in members"
      :key="member.name"
      cols="12"
      sm="6"
      md="4">
      <MemberCard :name="member.name" :color="member.color"/>
    </v-col>
  </v-row>
</template>


<script setup lang="ts">
import MemberCard from '../components/MemberCard.vue'

const members = [
  {name: 'Zayneb' , color: 'secondary'},
  {name: 'Jamal' , color: 'primary'},
  {name: 'Basma' , color: 'accent'},

]

</script>
