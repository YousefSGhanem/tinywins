import {reactive} from "vue"

export const appState = reactive({
  isParentMode: false,
  // only for MVP (later i will do it with DB)
  parentPin: '1234'
})
