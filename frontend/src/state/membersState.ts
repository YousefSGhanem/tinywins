import {reactive} from 'vue'
import type {Member} from '../models/Member'

export const membersState = reactive({

  members: [
    { id:'m1', name: 'Zayneb', color: 'secondary', roleType: 'CHILD'},
    { id:'m2', name: 'Jamal', color: 'primary', roleType: 'CHILD'},
    { id:'m3', name: 'Basma', color: 'accent', roleType: 'CHILD'},
    { id:'m4', name:'Mom', color: 'primary', roleType: 'PARENT'}
  ] as Member[],
})
