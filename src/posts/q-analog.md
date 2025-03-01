---
title: 'Quantum Calculus: Vi tích phân không có giới hạn'
date: 2024-11-15T20:39:49.752Z
---

<script>
    import Define from '$lib/mathEnv/Define.svelte'
    import Example from '$lib/mathEnv/Example.svelte'
    import Proof from '$lib/mathEnv/Proof.svelte'
    import Proposition from '$lib/mathEnv/Proposition.svelte'
    import Equation from '$lib/mathEnv/Equation.svelte'
</script>

Trong lúc làm nghiên cứu về chuỗi Hilbert của vành đối đồng điều Grassmann thì mình bắt gặp một lý thuyết mang tên quantum calculus (tạm dịch: vi tích phân lượng tử). Ngoài việc mang tên khá kiêu thì bản thân quantum calulus là một lý thuyết khá thú vị, ý tưởng của quantum calculus hết sức sơ cấp và có ứng dụng mạnh mẽ trong tổ hợp cũng như nhiều lĩnh vực khác. Bản thân chữ lượng tử ở đây là từ ứng dụng của chúng vào cơ lượng tử, cụ thể là một đối tượng mang tên nhóm lượng tử (quantum group). Quantum calculus còn được biết đến với cái tên Vi tích phân không có giới hạn (calculus without limit).

![quantum-meme](https://i.redd.it/kah96y53g1n81.jpg)

## q-đạo hàm

<Define>

Với mỗi hàm $f$ bất kì, ta định nghĩa _$q$-vi phân_ của $f$ cho bởi

$$
    d_qf(x) = f(qx) - f(x).
$$

    Ví dụ với $f(x)=x$ thì $d_qf(x) = d_qx = (q-1)x$. Từ đó ta định nghĩa *$q$-đạo hàm* của $f$

$$
    D_qf(x) = \frac{d_qf(x)}{d_qx} = \frac{f(qx)-f(x)}{(q-1)x}.
$$

Để ý rằng nếu $f$ khả vi thì

$$
    \lim_{q \rightarrow 1} D_qf(x) = \frac{df(x)}{dx}.
$$

</Define>

<Example>

Tính $q$-đạo hàm của $f(x) = x^n$ ta được
<Equation label="qdiff">

$$
    D_qx^n = \frac{(qx)^n-x^n}{(q-1)x} = \frac{q^n-1}{q-1}x^{n-1}.
$$

</Equation>

Hệ số $(q^n-1)/(q-1)$ sẽ xuất hiện rất nhiều trong quantum calculus và do đó ta đưa ra kí hiệu riêng cho hệ số này

$$
[n]_q := \frac{q^n-1}{q-1} = q^{n-1} + ... + q + 1.
$$

Khi $q \rightarrow 1$, ta có $[n] \rightarrow n$.
</Example>

## $q$-nhị thức và không gian vector trên trường hữu hạn

<Proposition label="qsubspace">

Cho $V$ là không gian vector $n$ chiều trên trường hữu hạn $\mathbb{F}_q$. Khi đó $\binom{n}{k}_q$ là số không gian vector con $k$ chiều trong $V$
</Proposition>

<Proof>

Trước tiên ta sẽ đi đếm số cách chọn $k$ vector độc lập tuyến tính trong $V$ để tạo thành một cơ sở $\{v_1,...,v_k\}$. $v_1$ có thể được chọn trong số $q^n-1$ các vector khác $0$, lúc này $v_2$ không được nằm trong $\langle v_1 \rangle$, tức có $q^n-q$ cách chọn. Tương tự $v_3$ không được nằm trong $\langle v_1,v_2 \rangle$ nên có $q^n-q^2$ cách chọn. Tổng quát lên, khi đã chọn được $v_1,v_2,...,v_{i-1}$ thì $v_i$ không được nằm trong $\langle v_1,...,v_{i-1} \rangle$ nên có $q^n - q^{i-1}$ cách chọn. Vậy ta có

$$
(q^n-1)(q^n-q)(q^n-q^2)...(q^n-q^{k-1})
$$

cách chọn $k$ vector độc lập tuyến tính. Tuy nhiên trong số đó có thể có nhiều cơ sở cùng sinh ra một không gian vector $k$ chiều, do đó để loại đi trường hợp bị trùng, ta phải chia cho số cách chọn cơ sở trong một không gian vector $k$ chiều. Số cách chọn như vậy lại có thể lập luận tương tự như trên, chỉ khác là $n$ được thay bởi $k$. Vậy tóm lại số không gian vector con $k$ chiều khác nhau trong $V$ là

$$
\frac{(q^n-1)(q^n-q)(q^n-q^2)...(q^n-q^{k-1})}{(q^k-1)(q^k-q)(q^k-q^2)...(q^k-q^{k-1})},
$$

viết lại biểu thức trên, ta được

$$
\frac{q q^2 ... q^{k-1}(q^n-1)(q^{n-1}-1)...(q^{n-k+1} -1)} {q q^2 ... q^{k-1}(q^k-1)(q^{k-1}-1)...(q-1)}
= \binom{n}{k}_q.
$$

</Proof>

<Proposition>

$$
    \binom{n}{k}_q = \binom{n-1}{k-1}_q + q^k \binom{n-1}{k}_q.
$$

</Proposition>
