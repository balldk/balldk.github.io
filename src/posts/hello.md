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

    let i = $state(0)
</script>

$$
    1+1=3
$$

```vanvo
console.log({})
```

```js
console.log({})
```

<define label="new-def">

New definition

</define>

<Equation label="new-eq">

New equation $1 + 1 = 2$
$2+2=4$

</Equation>

<Eq label="new-eq">

</Eq>

<Equation label="new-eq">

New equation $1 + 1 = 2$
$2+2=4$

</Equation>

This [package][1] is [more than][2nd-half-idiom] meets the eye.

## Install [remark][8]

…

[1st-half-idiom]: https://meme-link-1
[2nd-half-idiom]: https://meme-link-2
[1]: https://npm.im/some-package
[2]: #install
[3]: #usage
[4]: #api
[5]: #related
[6]: #contributing-and-support
[7]: #contributors
[8]: https://npm.im/remark
