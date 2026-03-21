import { reactive, watch } from 'vue'
import type { Member } from '../models/Member'

const defaultMembers: Member[] = [
  { id: 'm1', name: 'Zayneb', color: 'member-teal', roleType: 'CHILD', avatarKey: 'star' },
  { id: 'm2', name: 'Jamal', color: 'member-purple', roleType: 'CHILD', avatarKey: 'rocket' },
  { id: 'm3', name: 'Basma', color: 'member-coral', roleType: 'CHILD', avatarKey: 'heart' },
  { id: 'm4', name: 'Mom', color: 'member-parent', roleType: 'PARENT', avatarKey: 'crown' },
]

function loadMembers(): Member[] {
  const raw = localStorage.getItem('tinywins-members')

  if (!raw) {
    return defaultMembers
  }

  try {
    return JSON.parse(raw) as Member[]
  } catch {
    return defaultMembers
  }
}

export const membersState = reactive({
  members: loadMembers(),
})

watch(
  () => membersState.members,
  (members) => {
    localStorage.setItem('tinywins-members', JSON.stringify(members))
  },
  { deep: true }
)
