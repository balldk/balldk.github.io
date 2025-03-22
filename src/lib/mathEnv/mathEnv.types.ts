export interface MathEnvProp {
    children: any
    name: string
    count: number
}

export type EnvType =
    | 'theorem'
    | 'proposition'
    | 'example'
    | 'definition'
    | 'lemma'
    | 'remark'
    | 'equation'

export const envLookup = {
    theorem: 'Định lí',
    proposition: 'Mệnh đề',
    example: 'Ví dụ',
    definition: 'Định nghĩa',
    lemma: 'Bổ đề',
    remark: 'Lưu ý',
    equation: 'Phương trình',
}
