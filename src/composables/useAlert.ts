import { ref } from "vue"

const show = ref(false)
const type = ref<"success" | "error" | "warning" | "info">("info")
const message = ref("")

export function useAlert() {
  function trigger(t: typeof type.value, m: string, timeout = 3000) {
    type.value = t
    message.value = m
    show.value = true
    if (timeout) {
      setTimeout(() => (show.value = false), timeout)
    }
  }

  return { show, type, message, trigger }
}
