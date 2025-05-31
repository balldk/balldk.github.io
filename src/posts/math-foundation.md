---
title: 'Kinh thánh cho toán: Giới thiệu'
date: 08/12/2025
---

Toán học từ thuở khai sinh đã là một môn coi trọng sự chính xác và chặt chẽ trong suy luận. Tuy nhiên trớ trêu thay, sự chặt chẽ của toán học trong suốt nhiều thế kỉ lại được xây dựng trên những trực giác thiếu chặt chẽ, thiếu nền móng vững chắc. Mãi cho đến những năm của thế kỉ 19, các nhà toán học như Frege, Cantor, Russell hay Hilbert bắt đầu quan tâm đến công cuộc xây dựng một nền móng vững chắc cho toán, khai sinh ra một hướng đi mới cho logic toán học hiện đại.

Tại sao lại đặt tên bài viết là kinh thánh cho toán? Mặc dù không phải là một người theo đạo, tuy nhiên mình thích cách diễn giải của kinh thánh như một ngôn ngữ mô tả sự tồn tại của một thực thể tối cao toàn năng ngoài tầm hiểu biết của con người. Trong loạt bài viết này mình sẽ cố gắng trình bày lại cách xây dựng một nền tảng cho toán học với tư tưởng tương tự, nó như một ngôn ngữ để mô tả một sự thật phổ quát mà có thể nằm ngoài tầm hiểu biết của loài người.

## Nền của toán là gì

Nền của toán là một hệ thống toán học đưa ra các khái niệm cơ bản nhất, từ đó bất kì một mệnh đề toán học nào cũng có thể suy ra từ các khái niệm ấy. Nhưng tại sao lại cần xây dựng nền cho toán học? Các bạn chắc hẳn đã từng gặp phải những cuộc tranh luận ngây ngô kiểu như:

- A: Trái Đất là gì?
- B: Trái Đất là một hành tinh trong hệ Mặt Trời, có bề mặt bao phủ chủ yếu bởi nước, tạo điều kiện cho nhiều sinh vật hình thành và sinh sống.
- A: Sinh vật là gì?
- B: Sinh vật là những thực thể sống, có khả năng trao đổi chất, sinh sản và phản ứng với môi trường xung quanh.
- A: Trao đổi chất là gì?
- B: Trao đổi chất là quá trình sinh học mà qua đó sinh vật hấp thu năng lượng và chất dinh dưỡng từ môi trường để duy trì sự sống và phát triển.
- A: Năng lượng là gì?
- B: Năng lượng là khả năng sinh công hoặc tạo ra sự thay đổi, tồn tại dưới nhiều dạng như nhiệt năng, hóa năng, điện năng hay cơ năng.
- ...

Cuộc tranh luận trên thường kết thúc với 1 trong 3 khác năng sau:

1. B mất kiên nhẫn với A.
2. Các khái niệm tạo thành vòng lặp tự định nghĩa nhau.
3. Dừng ở một khái niệm mà B không biết diễn tả như thế nào.

Khả năng thứ 2 và 3 phải luôn phải xảy ra không phải vì sự yếu kém trong suy luận, mà là vì ngôn ngữ con người có giới hạn. Do đó mục tiêu khi xây dựng nền cho toán học đó là bất kì khái niệm, mệnh đề nào cũng có thể suy ngược ra từ những khái niệm và mệnh đề cơ bản nhất mà ta thầm chấp nhận như một chân lí.

## Lý thuyết tập hợp

Đến nay có rất nhiều hướng xây dựng nền toán học khác nhau, tuy nhiên hướng phát triển đầu tiên cũng như rộng rãi nhất chính là lý thuyết tập hợp. Trong lý thuyết này, ta coi mọi thứ đều là tập hợp. Tại sao cách xây dựng này lại hiệu quả? Ít nhất ta thấy được rằng tập hợp xuất hiện ở khắp mọi nơi trong toán. Từ tập hợp tất cả các số tự nhiên, số thực, cho tới tập hợp thỏa một tính chất nào đó mà ta mong đợi. Tuy nhiên không phải cái gì cũng có thể coi là tập hợp, ít nhất là với trực giác cơ bản nhất của ta. Ví dụ như làm sao ta coi số $1$, số $1/2$ hay số $\pi$ là một tập hợp được? Ở đây mình sẽ không trình bày quá sâu, tuy nhiên thực chất miễn là ta xây dựng được số tự nhiên thì ta sẽ có được mọi hệ thống số khác, thậm chí là xây dựng toàn bộ giải tích. Như số hữu tỉ $a/b$ ta có thể coi là lớp tương đương trên tập các bộ số tự nhiên $a/b$ sao cho $a/b = c/d$ khi và chỉ khi $ad = bc$, số thực thì có thể định nghĩa thông qua lát cắt Dedekind (cũng là một tập hợp). Vậy nên mục tiêu cơ bản nhất của ta là phải định nghĩa được số tự nhiên, hoàn toàn dựa trên tập hợp.

Ý tưởng xây dựng như sau, ta định nghĩa

- $0 = \set{}$ là tập rỗng.
- $1 = \set{0}$ là tập chứa $0$.
- $2 = \set{0,1}$ là tập chứa $0$ và $1$.
- .... Tổng quát lên, số tự nhiên $n+1$ là tập $n \cup \set{n} = \set{0,\ldots,n}$.

Khi đó ta để ý nếu $m \in n$ thì tức $m$ nhỏ hơn hoặc bằng $n$ theo nghĩa thông thường. Từ đó ta thấy rằng ngay cả cấu trúc thứ tự trên số tự nhiên cũng có thể được hiểu thông qua quan hệ $\in$ của tập hợp. Tuy nhiên ở đây ta có rất nhiều sự ngộ nhận, ví dụ như tập rỗng là gì, nó có tồn tại không? Tương tự tại sao tập chứa tập rỗng lại tồn tại? Tại sao tập chứa $0,1$ lại tồn tại? Ở phần sau ta sẽ thấy đây chính là ý tưởng mà Zermelo và Fraenkel đưa ra những tiên đề cơ bản nhất cho toán học, được gọi là hệ tiên đề ZF.

## Hệ tiên đề ZFC
