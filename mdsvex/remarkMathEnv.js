/**
 * @import {} from 'mdast-util-to-hast'
 * @import {Root} from 'mdast'
 */
import { visit } from 'unist-util-visit'

const envTypes = ['proposition', 'theorem', 'example', 'definition', 'lemma', 'equation']

function insertImport(node) {
    const scriptTag = '<script>'
    if (!node?.value?.startsWith(scriptTag)) {
        return
    }

    const importStatement = `
    import MathEnv from '$lib/mathEnv/MathEnv.svelte';
    import Proof from '$lib/mathEnv/Proof.svelte';
    import Equation from '$lib/mathEnv/Equation.svelte';
    import Ref from '$lib/mathEnv/Ref.svelte';
    `

    const afterScriptTag = node.value.slice(scriptTag.length)
    node.value = `${scriptTag}\n${importStatement}${afterScriptTag}`
}

export default function remarkMathEnv() {
    /**
     * @param {Root} tree
     *   Tree.
     * @returns {undefined}
     *   Nothing.
     */
    return function (tree, file) {
        let preNode = {}
        let envTypeNode = {}
        const envs = {}
        const envCounters = {}

        function env(prefix, node, callback) {
            if (
                node.type == 'linkReference' &&
                preNode.type == 'text' &&
                preNode?.value[preNode.value.length - 1] == prefix
            ) {
                envTypeNode = node.children[0]
                if (envTypeNode?.type == 'text' && envTypes.includes(envTypeNode?.value)) {
                    callback(envTypeNode)
                }
            }
        }

        visit(tree, (node) => {
            insertImport(node)

            env('@', node, (envTypeNode) => {
                const envType = envTypeNode.value
                if (!envs[envType]) {
                    envs[envType] = {}
                    envCounters[envType] = 0
                }
                let count = ++envCounters[envType]
                const name = node.label == envType ? count : node.label

                envs[envType][name] = count

                node.type = 'html'
                node.value = `</p><MathEnv type="${envType}" name="${name}" count="${count}"><p>`
                if (envType == 'equation') {
                    node.value = `</p><Equation name="${name}" count="${count}"><p>`
                }

                preNode.value = ''
            })

            env('/', node, (envTypeNode) => {
                if (preNode?.value[preNode.value.length - 1] != '/') return
                node.type = 'html'

                if (envTypeNode?.value == 'equation') {
                    node.value = '</p></Equation><p>'
                } else {
                    node.value = '</p></MathEnv><p>'
                }

                preNode.value = preNode.value.slice(0, preNode.value.length - 1)
            })

            preNode = node
        })
        file.data.fm = { ...file.data.fm, envs }
    }
}
