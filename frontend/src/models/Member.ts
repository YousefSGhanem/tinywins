export type RoleType = 'PARENT' | 'CHILD'

export type AvatarKey =
  | 'star'
  | 'rocket'
  | 'heart'
  | 'paw'
  | 'lightning'
  | 'crown'

export type MemberColor =
  | 'member-parent'
  | 'member-teal'
  | 'member-coral'
  | 'member-purple'
  | 'member-sun'
  | 'member-mint'

export interface Member {
  id: string
  name: string
  color: MemberColor
  roleType: RoleType
  avatarKey: AvatarKey
}
