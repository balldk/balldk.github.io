<script lang="ts">
    import { Motion, AnimatePresence } from 'svelte-motion'
    import { inview } from 'svelte-inview'
    import { cn } from '$lib/utils/cn'

    // Destructure props from $props()
    const {
        duration = 0.4,
        delay = 0,
        yOffset = 6,
        inViewMargin = '-50px',
        blur = '6px',
        id = crypto.randomUUID().slice(0, 8),
        once = false,
        class: className = '',
    } = $props()

    let state = $state({
        isInView: 'hidden',
    })

    const defaultVariants = {
        hidden: { opacity: 0, y: yOffset, filter: `blur(${blur})` },
        visible: { opacity: 1, y: 0, filter: `blur(0px)` },
    }
</script>

<AnimatePresence let:item list={[{ key: id }]}>
    <Motion
        initial="hidden"
        animate={state.isInView}
        exit="hidden"
        variants={defaultVariants}
        transition={{
            delay: 0.04 + delay,
            duration,
            ease: 'easeOut',
        }}
        let:motion
    >
        <div
            use:inview={{ rootMargin: inViewMargin, unobserveOnEnter: once }}
            use:motion
            on:inview_change={({ detail }) => {
                state.isInView = detail.inView ? 'visible' : 'hidden'
            }}
            class={cn(className)}
        >
            <slot>Default</slot>
        </div>
    </Motion>
</AnimatePresence>
