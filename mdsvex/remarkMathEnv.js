/**
 * @import {} from 'mdast-util-to-hast'
 * @import {Root} from 'mdast'
 */
import { visit } from 'unist-util-visit'

const envTypes = ['proposition', 'theorem', 'example']

export default function remarkMathEnv() {
    /**
     * @param {Root} tree
     *   Tree.
     * @returns {undefined}
     *   Nothing.
     */
    return function (tree, file) {
        let count = 0
        const regex = /^<([A-Z]\w*)\s*(.*)>$/
        let preNode = {}
        let envTypeNode = {}
        const envStack = []
        visit(tree, (node) => {
            console.log(node == envTypeNode, node)
            node.type == ''
            if (node == envTypeNode) {
            }
            if (preNode == envTypeNode) {
                node.value = ''
            }
            if (node.type == 'linkReference' && preNode.type == 'text' && preNode.value == '@') {
                console.log('isin')
                envTypeNode = node.children[0]
                if (envTypeNode?.type == 'text' && envTypes.includes(envTypeNode?.value)) {
                    count++
                    const envType = envTypeNode.value
                    const label = `${envType}:${node.label}`
                    node.type = 'html'
                    node.value = ''
                    // node.value = `<MathEnv title="${envType}" label="${label}" count="${count}">`
                    preNode.value = ''
                    envTypeNode.value = ''
                }
                // const match = node.value.match(regex)
                // if (match) {
                //     const tag = match[1]
                //     const props = match[2]
                //     node.value = `<${tag} level="${count}" ${props}>`
                // }
            }
            preNode = node
        })
        file.data.fm = { ...file.data.fm, new_value: 1 }
    }
}
