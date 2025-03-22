import type { Component } from 'svelte'

export interface Meta {
    slug: string
    title?: string
    date: string
}

export interface MarkdownData {
    PostContent: any
    meta: Meta
}
