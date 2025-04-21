let loaded = $state(false)
let isFirstEnter = $state(true)

export const pageLoadStore = {
    get loaded() {
        return loaded
    },
    set loaded(val) {
        loaded = val
    },
    get isFirstEnter() {
        return isFirstEnter
    },
    set isFirstEnter(val) {
        isFirstEnter = val
    },
    init() {
        setTimeout(() => (isFirstEnter = false), 100)
        setTimeout(() => (loaded = true))
    },
}
