---
title: Svex up your markdown
count: 25
color: cadetblue
list: [1, 2, 3, 4, 'boo']
---

<script>
    import Proof from '$lib/mathEnv/Proof.svelte'
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

$$
\operatorname{Aut}(\operatorname{Stomach}) \hookleftarrow \operatorname{Foods}
$$

$$
\begin{CD}
     1 @<<< 2 @= 3\\
     @. @| @VVV\\
     @. 4 @= 5
\end{CD}
$$

$$
\begin{CD}

1 @>>> 2
@>\text{this is a really long label}>> 3\\

@VVV @VVV @VVV\\

4 @>>> 5 @>{\rlap{$\scriptstyle{\text{shorter}}$}\phantom{\text{this is a really long label}}}>> 6

\end{CD}
$$

$$
\begin{CD}
Aut(\text{Stomach}) @<<< \text{Foods} \times \text{Stomach}
@>\text{eat(food)}>> 1
\end{CD}
$$

$$
\begin{array}{ccccc}

&& \text{High-Tier} && \\

& \swarrow & \downarrow & \searrow & \\

\text{Connector} && \text{Child} && \text{Connector} \\

\downarrow &&&& \downarrow \\

\text{Child} &&&& \text{Child}

\end{array}
$$

$$
\begin{array}{ccc}
& \operatorname{Foods} & \xhookrightarrow{\operatorname{eat}} & \operatorname{Aut}(\operatorname{Khoa})\\
& \downarrow && \swarrow\\
& 1 &&
\end{array}
$$

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
