<script>
    import { onMount } from 'svelte'
    let counter = $state(0)

    onMount(() => {
        setInterval(() => {
            console.log(counter)
            counter++
        }, 1000)
    })
</script>

# Hello hagiang

Linh hoạt lắm bé cưng {counter}
