/**
 * @import {} from 'mdast-util-to-hast'
 * @import {Root} from 'mdast'
 */
import { toString } from 'mdast-util-to-string'

export default function remarkReadTime() {
    /**
     * @param {Root} tree
     *   Tree.
     * @returns {undefined}
     *   Nothing.
     */
    return function (tree, file) {
        const textOnPage = toString(tree)
        const readTime = textOnPage.split(/\s+/).length / 220
        file.data.fm = { ...file.data.fm, readTime }
    }
}
