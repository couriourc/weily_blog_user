import Default from './default.vue'
import Login from './login.vue'

interface DialogInstanceTypes {
  default: "default",
  login: "login"

}

export const DialogInstance: DialogInstanceTypes = {
  "default": Default,
  'login': Login
}
