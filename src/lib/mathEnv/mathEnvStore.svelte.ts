import MathEnv from './MathEnv.svelte'

export type EnvType = 'theorem' | 'define' | 'remark' | 'proposition' | 'example'
let countTheorem: { [key: string]: number } = {}

export const mathEnvStore = {
    init(slot: string) {
        return {
            Define: MathEnv,
        }
    },
}
