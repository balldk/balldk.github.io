---
title: Svex up your markdown
count: 25
color: cadetblue
list: [1, 2, 3, 4, 'boo']
---

<script>
    import { onMount } from 'svelte'

    let i = $state(0)

    onMount(async () => {
        console.log('Something')
        setInterval(() => {
            console.log(i)
            i++
        }, 1000)
    })
</script>

Beginning of something {i}

fdsfsda

<!-- <MathEnv title="theorem" count="1" label="TheoremName">

$1+1=2$
$2+2=4$

</MathEnv> -->

<MathEnv type="proposition" count="1" label="PropositionName">

$1+1=2$
$2+2=4$

</MathEnv>

fdsafd

fdsafd

@[theorem][Định lý bla]
dong 1

Định lý bla nè $1+1=2$

@[equation][eq-fds]

$$
    D_qx^n = \frac{(qx)^n-x^n}{(q-1)x} = \frac{q^n-1}{q-1}x^{n-1}.
$$

/[equation]

/[theorem]

@[proposition][Định nghĩa ble]
Định nghĩa ble nè
/[proposition]

@[equation]

$$
    1+1=2
$$

/[equation]

<Ref type="equation" name="eq-fds" />

Tu phuong trinh <Ref type="equation" name="q-diff" post="q-analog" />

Tu <Ref type="proposition" name="qsubspace" post="q-analog" />
