export type RoleType = 'PARENT' | 'CHILD'

export type AvatarKey =
  | 'star'
  | 'rocket'
  | 'heart'
  | 'paw'
  | 'lightning'
  | 'crown'

export interface Member {
  id: string
  name: string
  color: string
  roleType: RoleType
  avatarKey: AvatarKey
}
