<script lang="ts">
    import { Motion, AnimatePresence } from 'svelte-motion'
    import { inview } from 'svelte-inview'
    import { cn } from '$lib/common/utils/cn'

    const {
        duration = 0.4,
        delay = 0,
        yOffset = 6,
        inViewMargin = '-50px',
        blur = '6px',
        once = false,
        class: className = '',
        children,
    } = $props()

    const id = $props.id()

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
        <!-- svelte-ignore event_directive_deprecated -->
        <div
            use:inview={{ rootMargin: inViewMargin, unobserveOnEnter: once }}
            use:motion
            on:inview_change={({ detail }) => {
                state.isInView = detail.inView ? 'visible' : 'hidden'
            }}
            class={cn(className)}
        >
            {@render children()}
        </div>
    </Motion>
</AnimatePresence>
