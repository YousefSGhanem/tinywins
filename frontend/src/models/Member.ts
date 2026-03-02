export type RoleType = 'PARENT' | 'CHILD'

export interface Member {
  id: string
  name: string
  color: string
  roleType: RoleType
}
