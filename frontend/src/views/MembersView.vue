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
        :avatar-key="member.avatarKey"
        @edit="openEditDialog(member.id)"
        @delete="openDeleteDialog(member.id)"
      />
    </v-col>
  </v-row>
  <v-dialog v-model="dialogOpen" max-width="420">
    <v-card>
      <v-card-title class="d-flex align-center">
        <v-icon class="mr-2">mdi-account-plus</v-icon>
        {{ isEditing ? 'Edit Member' : 'Add Member' }}
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

        <v-sheet color="transparent" class="mt-2">
          <v-label class="mb-2 d-block">Color</v-label>
          <v-chip-group
            v-model="form.color"
            selected-class="font-weight-bold"
            mandatory
          >
            <v-chip
              v-for="color in colorItems"
              :key="color.value"
              :value="color.value"
              :color="color.value"
              variant="flat"
              size="large"
              class="mr-2">
              {{ color.label }}
            </v-chip>
          </v-chip-group>
        </v-sheet>
        <v-sheet color="transparent" class="mt-4">
          <v-label class="mb-2 d-block">Avatar</v-label>
          <v-chip-group
            v-model="form.avatarKey"
            mandatory
          >
            <v-chip
              v-for="avatar in avatarItems"
              :key="avatar.value"
              :value="avatar.value"
              variant="outlined"
              size="large"
              class="mr-2 mb-2"
              >
              <v-icon start> {{ avatar.icon }}</v-icon>
              {{ avatar.label }}
            </v-chip>
          </v-chip-group>
        </v-sheet>
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn variant="text" @click="closeDialog">Cancel</v-btn>
        <v-btn color="primary" variant="flat" @click="saveMember">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-dialog v-model="deleteDialogOpen" max-width="420">
    <v-card>
      <v-card-title class="d-flex align-center">
        <v-icon class="mr-2">mdi-alert</v-icon>
        Delete Member
      </v-card-title>
      <v-card-text>
        Are you sure you want to delete this member?
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn variant="text" @click="closeDeleteDialog">Cancel</v-btn>
        <v-btn color="error" variant="flat" @click="confirmDeleteMember">Delete</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script setup lang="ts">
import MemberCard from '../components/MemberCard.vue'
import {computed, ref, reactive} from 'vue'
import {appState} from '../state/appState'
import {membersState} from '../state/membersState'
import type {Member, RoleType, AvatarKey}  from '../models/Member'

const visibleMembers = computed(() => {
  if( appState.isParentMode) return membersState.members
  return membersState.members.filter(m => m.roleType === 'CHILD')
})


const dialogOpen = ref(false)

const form = reactive<Pick<Member, 'name' | 'color' | 'roleType' | 'avatarKey'>>({
  name: '',
  color: 'secondary',
  roleType: 'CHILD',
  avatarKey: 'star'
})

const roleItems: RoleType[] = ['CHILD', 'PARENT']
const colorItems = [
  { label: 'Purple', value: 'primary' },
  { label: 'Turquoise', value: 'secondary' },
  { label: 'Coral', value: 'accent' },
]

const avatarItems: { label: string; value: AvatarKey; icon: string}[] = [
  {label: 'Star', value:'star', icon: 'mdi-star'},
  {label: 'Rocket', value:'rocket', icon: 'mdi-rocket-launch'},
  {label: 'Heart', value:'heart', icon: 'mdi-heart'},
  {label: 'Paw', value:'paw', icon: 'mdi-paw'},
  {label: 'Crown', value:'crown', icon: 'mdi-crown'},
  {label: 'Lightning', value:'lightning', icon: 'mdi-lightning-bolt'},
]

const editingMemberId = ref<string | null>(null)
const isEditing = computed(() => editingMemberId.value !== null)

const deleteDialogOpen = ref(false)
const deletingMemberId = ref< string | null> (null)

function openCreateDialog() {
  form.name = ''
  form.color= 'secondary'
  form.roleType = 'CHILD'
  form.avatarKey = 'star'
  editingMemberId.value = null
  dialogOpen.value = true
}

function openEditDialog(memberId: string) {
  const member = membersState.members.find(m => m.id === memberId)
  if (!member) return

  form.name = member.name
  form.color = member.color
  form.roleType = member.roleType
  form.avatarKey= member.avatarKey
  editingMemberId.value = memberId
  dialogOpen.value = true
}

function openDeleteDialog(memberId: string) {
  deletingMemberId.value = memberId
  deleteDialogOpen.value = true
}

function closeDeleteDialog(){
  deletingMemberId.value = null
  deleteDialogOpen.value = false
}

function confirmDeleteMember() {
  if (!deletingMemberId.value) return

  const index = membersState.members.findIndex(
    member => member.id === deletingMemberId.value
  )

  if (index === -1) return

  membersState.members.splice(index, 1)

  closeDeleteDialog()
}

function closeDialog() {
  dialogOpen.value = false
}

function saveMember() {
  const trimmedName= form.name.trim()
  if(!trimmedName) return

  if (editingMemberId.value) {
    // Edit mode
    const member = membersState.members.find(m => m.id === editingMemberId.value)
    if(!member) return
    member.name= trimmedName
    member.color = form.color
    member.roleType = form.roleType
    member.avatarKey= form.avatarKey
  } else {
    // Create mode
    membersState.members.push({
      id: crypto.randomUUID(),
      name: trimmedName,
      color: form.color,
      roleType: form.roleType,
      avatarKey: form.avatarKey
    })
  }


  editingMemberId.value = null
  closeDialog()
}


</script>
