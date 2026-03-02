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
        @click="openCreateDialog"
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
  <v-dialog v-model="dialogOpen" maxWidth="420">
    <v-card>
      <v-card-title class="d-flex alighn-center">
        <v-icon class="mr-2">mdi-account-plus</v-icon>
        Add Member
      </v-card-title>

      <v-card-text>
        <v-text-field
          v-model="form.name"
          label="Name"
          maxlength="20"
        />
        <v-select
          v-model="form.roleType"
          label="Role"
          :items="roleItems"
        />

        <v-select
          v-model="form.color"
          label="Color"
          :items="coloerItems"
        />
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn variant="text" @click="closeDialog">Cancel</v-btn>
        <v-btn color="primary" variant="flat" @click="saveMember">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script setup lang="ts">
import MemberCard from '../components/MemberCard.vue'
import {computed, ref, reactive} from 'vue'
import {appState} from '../state/appState'
import {membersState} from '../state/membersState'
import type {Member, RoleType}  from '../models/Member'

const visibleMembers = computed(() => {
  if( appState.isParentMode) return membersState.members
  return membersState.members.filter(m => m.roleType === 'CHILD')
})


const dialogOpen = ref(false)

const form = reactive<Pick<Member, 'name' | 'color' | 'roleType'>>({
  name: '',
  color: 'secondary',
  roleType: 'CHILD'
})

const roleItems: RoleType[] = ['CHILD', 'PARENT']
const coloerItems = ['primary', 'secondary', 'accent']

function openCreateDialog() {
  form.name = ''
  form.color= 'secondary'
  form.roleType = 'CHILD'
  dialogOpen.value = true
}

function closeDialog() {
  dialogOpen.value = false
}

function saveMember() {
  const trimmedName= form.name.trim()

  if(!trimmedName) return

  const newMember: Member= {
    id: crypto.randomUUID(),
    name: trimmedName,
    color: form.color,
    roleType: form.roleType,
  }

  membersState.members.push(newMember)
  closeDialog()
}


</script>
