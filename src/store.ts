import { ref } from "vue"
import { createGlobalState } from "@vueuse/core"
// import { type LoginInput } from "./types"

const useStore = createGlobalState(() => {
    // state
    const loadingStore = ref(false)
    const openMenu = ref(true)
    const loginData = ref<LoginInput>()
    const userPermissions = ref()
    const routePermissions = ref()

    const toggleMenu = (): void => {
        openMenu.value = !openMenu.value
    }

    // actions
    function setLoginData(login: any): void {        
        loginData.value = login
    }

    function setUserPermissions(profile): void {
        userPermissions.value = profile
    }

    function updateRoutePermission(permission): void {
        routePermissions.value = permission
    }

    return { loadingStore, openMenu, toggleMenu, setLoginData, loginData, setUserPermissions, userPermissions, updateRoutePermission, routePermissions }
})

export default useStore
