---
title: Svex up your markdown
count: 25
color: cadetblue
list: [1, 2, 3, 4, 'boo']
---

<script>
    import Define from '$lib/mathEnv/Define.svelte'
    import Example from '$lib/mathEnv/Example.svelte'
    import Proof from '$lib/mathEnv/Proof.svelte'
    import Proposition from '$lib/mathEnv/Proposition.svelte'
    import Equation from '$lib/mathEnv/Equation.svelte'
    import MathEnv from '$lib/mathEnv/MathEnv.svelte'

    let i = $state(0)
</script>

Beginning of something

@[theorem][thmname]
$1+1=2$
$2+2=4$
/[theorem]
