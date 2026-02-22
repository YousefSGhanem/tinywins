export type RoleType = 'PARENT' | 'CHILD'

export interface Member {
  name: string
  color: string
  role: RoleType
}
