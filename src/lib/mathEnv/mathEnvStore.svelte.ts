let slug = $state('')

export const mathEnvStore = {
    get slug() {
        return slug
    },
    set slug(val) {
        slug = val
    },
}