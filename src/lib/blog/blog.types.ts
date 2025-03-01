import type { Component } from 'svelte'

export interface Meta {
    slug: string
    title?: string
    date: string
}

export interface MarkdownData {
    content: string
    meta: Meta
}
