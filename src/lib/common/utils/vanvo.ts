function vanvo(hljs: any) {
    return {
        name: 'vanvo',
        aliases: ['vl'],
        unicodeRegex: true,
        contains: [
            {
                scope: 'keyword',
                begin: `(cho|hay|và|va|còn nếu|con neu|nếu|neu|còn không|con khong|với mỗi|voi moi|với|voi|thuộc|thuoc)`,
            },
            {
                scope: 'built_in',
                begin: `(nhập|xuất|nhap|xuat)`,
            },
            {
                scope: 'literal',
                begin: `(đúng|dung|sai|E|Pi|I)\\b`,
            },
            {
                scope: 'string',
                begin: '"',
                end: '"',
                contains: [{ begin: '\\\\.' }],
            },
            hljs.C_NUMBER_MODE,
            hljs.C_LINE_COMMENT_MODE,
        ],
    }
}

export default vanvo
