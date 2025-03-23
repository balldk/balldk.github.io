---
title: VanVo - Ngôn ngữ lập trình với cú pháp thuần Việt
description: Tất tần tật về ngôn ngữ lập trình VanVo (Văn Vở).
date: 2/25/2023
tags:
    - project
---

VanVo (Văn Vở) là ngôn ngữ lập trình được thiết kế với cú pháp thuần Việt, nhưng không chỉ đơn giản là dịch lại một cách gượng gạo từ các ngôn ngữ khác, mình cố gắng để thiết kế một ngôn ngữ sao cho các câu lệnh trông tự nhiên như tiếng Việt nhất có thể, thuận tiện cho người Việt nhất có thể. Điển hình là bạn có thể đặt tên định danh có khoảng trắng như `số nguyên tố`.

Ngôn ngữ sẽ có hơi thiên hướng toán học, những bạn học toán có thể sẽ cảm thấy quen thuộc hơn, vì mình định hướng ngôn ngữ được sử dụng như một CAS (Computer Algebra System). Tuy nhiên VanVo vẫn có thể dùng như một ngôn ngữ đa mục đích (General-purpose language) thông thường.

## Điểm qua một số tính năng của VanVo

- Hỗ trợ những câu lệnh rẽ nhánh, cấu trúc lặp, cấu trúc dữ liệu và phép toán cơ bản.

- Hỗ trợ phân số và số phức.

- Có thể đặt tên định danh có khoảng trắng như `số nguyên tố`.

- Không cần `;` ở cuối mỗi câu lệnh, và các khối lệnh sẽ được xác định bởi mức thụt dòng (indent level) như Python.

- Phép nhân giữa hằng số, biến và mở ngoặc có thể lược bỏ, ví dụ `2x(x-1)` sẽ tương đương với `2*x*(x-1)`.

- List comprehension như `{ n*m | n thuộc [1..10], m thuộc [1..10], n != m }`

- Lazy evaluation.

- Các thao tác và phép toán trên tập hợp như hội, giao, hiệu, tích Descartes.

- Gạch chân chính xác vị trí có lỗi khi chạy chương trình.

## Cài đặt

Nếu bạn đã tải [Go](https://go.dev/) thì cách đơn giản nhất để cài đặt là clone và build trực tiếp từ source như sau

```bash
git clone https://github.com/balldk/vanvo
cd vanvo
go install .
```

Ngoài ra bạn có thể tải file thực thi tại đây [Releases v0.1.0](https://github.com/balldk/vanvo/releases/tag/v0.1.0).

**Cài đặt language support:** Để ngôn ngữ có syntax highlight và snippets trên VSCode thì bạn hãy qua đây cài thêm extension nhé: [github.com/balldk/vscode-vanvo](https://github.com/balldk/vscode-vanvo).

Để chạy chương trình ta dùng lệnh

```vanvo
vanvo program.vv
```

Trong đó `program.vv` là file chứa nội dung code. Nói chung file extension của VanVo là `.vv`.

## Một số ví dụ minh họa

**Ví dụ 1:** Xét tính chia hết của n cho 2 và 3, với n là các số nguyên trong khoảng $[1,100]$

```vanvo
cho A = [1..100]

với mỗi n thuộc A:
	nếu n % 2 == 0:
		xuất n, "chia hết cho 2"
	còn nếu n % 3 == 0:
		xuất n, "chia hết cho 3"
	còn không:
		xuất n, "không chia hết cho cả 2 và 3"
```

**Ví dụ 2:** Tính giá trị của hàm hợp, với $(f.g)(x) = f(g(x))$

```vanvo
cho f(x) = 2x(x^2 - 2x)(3x - 5)
cho g(x) = 5x

cho a = 5
xuất f.g(a)
```

`2x(x^2 - 2x)(3x - 5)` là cách viết ngắn gọn hơn của `2*x*(x^2 - 2*x)*(3*x - 5)`.

**Ví dụ 3:** Sử dụng list comprehension để định nghĩa mảng vô hạn các phần tử, với `fib[i]` là phần tử thứ `i` trong dãy fibonacci

```vanvo
cho fib = {0, 1, 1} + { fib[n-1] + fib[n-2] | n thuộc [3..] }

với mỗi n thuộc fib:
    xuất n
```

List comprehension có tính "lazy", tức là chỉ khi ta cần dùng phần tử nào trong mảng thì phần tử đó mới được tính ra, do đó ta có thể dễ dàng định nghĩa ra mảng vô hạn phần tử trong VanVo.

**Ví dụ 4:** Hệ thống báo lỗi của chương trình

![screenshot_error](https://i.imgur.com/49okCkK.png)

## Cú pháp

<!-- **Lưu ý**: vì mình có sử dụng ligature font cho code trên web nên các kí hiệu như $=>, >=, <=, ==, !=$ sẽ trở thành `=>`, `>=`, `<=`, `==`, `!=`. -->

### Quy định đặt tên và từ khóa

Tên định danh là tên được bạn đặt cho biến và hàm trong chương trình, VanVo bao gồm các quy tắc đặt tên định danh như sau:

- Có thể chứa các kí tự `a-z`, `A-Z`, `0-9`, `_` và toàn bộ bảng chữ cái cũng như dấu trong tiếng Việt.
- Không được bắt đầu bằng một chữ số.
- Khác với hầu hết các ngôn ngữ khác, VanVo cho phép bạn đặt tên định danh với khoảng trắng, nhưng có một lưu ý là khoảng trắng giữa các từ không quan trọng, ví dụ `nguyên tố` và <code>nguyên &nbsp;&nbsp;tố&nbsp;</code> là hai tên định danh giống nhau.
- Phân biệt hoa thường (case sensitive).
- Không được đặt tên định danh trùng với từ khóa.

Danh sách các từ khóa trong VanVo:

`cho`, `thuộc`, `và`, `hay`, `với`, `với mỗi`, `nếu`, `còn nếu`, `còn không`, `đúng`, `sai`, `nhập`, `xuất`

**Note:** Bạn có thể viết các từ khóa không dấu, ví dụ `neu`, `voi` là các từ khóa hợp lệ. Tuy nhiên bạn chỉ có thể viết đầy đủ dấu hoặc là viết không dấu hoàn toàn, ví dụ `đung` không phải là một từ khóa hợp lệ vì thiếu dấu sắc.

### Khai báo biến

Biến được định nghĩa thông qua từ khóa `cho`, với cấu trúc như sau

```bnf
cho <tên biến> = <biểu thức>
```

Ví dụ

```vanvo
cho x = 10.2
cho ngày sinh = 15
```

Một số hằng số được định nghĩa sẵn

```vanvo
xuất Pi // 3.14159...
xuất E  // 2.71828...
```

### Khai báo hàm

Khai báo hàm tương đối giống với khai báo biến

```bnf
cho <tên hàm>(<danh sách các tham số>) = <biểu thức>
```

Ví dụ

```vanvo
cho f(x,y,z) = 2x(x^2 - 2x + 1) - y^z
xuất f(100, 5, 3)
```

Ở ví dụ trên, hàm chỉ được định nghĩa ngắn gọn trong một hàng, để viết một số hàm phức tạp, cần thực hiện nhiều câu lệnh hơn, ta có thể dùng "Biểu thức nhóm"

```vanvo
cho f(x) = (cho a = 5; cho b = 6; a+b+x)
xuất f(2) // 13
```

Biểu thức cuối cùng trong biểu thức nhóm sẽ là giá trị trả về cho toàn bộ biểu thức, ở ví dụ trên `a+b+x = 5+6+2 = 13` là giá trị của `f(2)`

Trên thực tế ta sẽ xuống dòng tách các câu lệnh trong biểu thức nhóm

```vanvo
// Trả về đúng, nếu n là số chẵn, sai nếu n là số lẻ
cho là chẵn(n) = (
	cho two = 2
	nếu n % two == 0:
		=> đúng
	sai
)
```

Dấu suy ra `=>` có ý nghĩa tương đương với câu lệnh `return` ở những ngôn ngữ khác, khi gặp `=>` thì biểu thức nhóm sẽ kết thúc và trả về giá trị cho biểu thức

Một số hàm được định nghĩa sẵn

```vanvo
xuất cos(Pi)  // -1
xuất sin(Pi)  // 0
xuất tan(Pi)  // 0
xuất E^ln(2)  // 2
```

### Các kiểu dữ liệu cơ bản

```vanvo
// Số nguyên
15
// số thực
3.14
// Phân số
3/14
// Số phức
3/2 - 2I
// Logic
đúng
sai
```

### Phép toán

#### Số học

```vanvo
cho a = 4
cho b = 5/2

xuất a + b  // 13/2
xuất a - b  // 3/2
xuất a * b  // 10
xuất a / b  // 8/5
xuất a ^ b  // 32
xuất a % 7  // 4
```

#### Logic

```vanvo
xuất 1 == 2  // sai
xuất 1 != 2  // đúng
xuất 1 < 1   // sai
xuất 1 <= 1  // đúng
xuất 1 > 1   // sai
xuất 1 >= 1  // đúng

xuất đúng và sai  // sai
xuất đúng hay sai // đúng
```

#### Toán tử ba ngôi

Cấu trúc của toán tử ba ngôi

```bnf
<biểu thức 1> nếu <điều kiện> còn không <biểu thức 2>
```

Nếu `<điều kiện>` thỏa thì toán tử ba ngồi sẽ trả về giá trị của `<biểu thức 1>`, còn không thì trả về giá trị của `<biểu thức 2`>. Ví dụ

```vanvo
cho gtln(a, b) = a nếu a > b còn không b
xuất gtln(2, 3)  // 3
```

### Câu lệnh điều kiện

Câu lệnh điều kiện có cấu trúc như sau

```bnf
nếu <điều kiện 1>:
	...
còn nếu <điều kiện 2>:
	...
còn không:
	...
```

`...` ở đây là khối lệnh, một khối lệnh được xác định bởi mức thụt dòng (indent level) của đoạn code. Không như Python, ở trong VanVo thì indent size được cố định là 4, tab cũng được chương trình mặc định hiểu là 4 spaces.

Ví dụ: xác định `n` là âm, dương hay 0

```vanvo
cho n = 100

nếu n < 0:
	xuất n, "là số âm"
còn nếu n > 0:
	xuất n, "là số dương"
còn không:
	xuất n, "là 0"
```

### Cấu trúc lặp

Trong VanVo có hai cấu trúc lặp là `với` và `với mỗi`, `với` có ý nghĩa tương đương với `while` ở những ngôn ngữ khác, còn `với mỗi` sẽ ý nghĩa tương tự như vòng lặp `for` nhưng không giống hoàn toàn mà sẽ có những đặc trưng riêng.

#### Với

`với` có cấu trúc như sau

```bnf
với <danh sách điều kiện>:
	...
```

Vòng lặp sẽ được thực hiện cho đến khi một trong các điều kiện của `<danh sách điều kiện>` không thỏa thì vòng lặp dừng lại.

Ví dụ: xuất ra các số trong khoảng $[0,100)$

```vanvo
cho i = 0
với 0 <= i, i < 100:
	xuất i
	i = i + 1
```

Điều kiện `0 <= i, i < 100` tương đương với `0 <= i và i < 100`. Ngoài ra bạn có thể sử dụng chaining comparison operator `0 <= i < 100` để ngắn gọn hơn.

#### Với mỗi

`với mỗi` có cấu trúc như sau

```bnf
với mỗi <biến> thuộc <tập đếm được>, <ràng buộc>,...:
	...
```

Hãy thử nhìn vào ví dụ trước nhé, chương trình sau sẽ xuất ra các số chẵn trong khoảng $[1,100]$

```vanvo
với mỗi n thuộc [1..100], x % 2 == 0:
	xuất n

// Output:
2
4
6
...
100
```

Ở chương trình trên, `n` lặp qua từng phần tử trong `[1..100]`, với `[1..100]` là tập các số nguyên trong khoảng từ 1 đến 100. Nếu `n` thỏa mọi ràng buộc được cho thì khối lệnh bên trong sẽ được thực hiện (trong trường hợp này thì ràng buộc là `n % 2 == 0`). Dĩ nhiên không phải tập hợp nào cũng có thể lặp qua được, phần tiếp theo sẽ giải thích vấn đề này chi tiết hơn.

Bạn có thể lặp qua nhiều tập và có nhiều ràng buộc cùng một lúc, lấy ví dụ

```vanvo
với mỗi n thuộc [1..5], m thuộc [3..5], n % 2 == 0, m % 2 == 1:
	xuất n, m

// Output:
2 3
2 5
4 3
4 5
```

### Tập hợp

Ban đầu khi mình phát thảo ý tưởng cho ngôn ngữ này thì mình lấy tập hợp, các phép toán và mệnh đề trên tập hợp làm tư tưởng chính. Nhưng càng về sau thì mình nhận ra là để xây dựng khái niệm tập hợp chuẩn thì tương đối không hiệu quả, và hầu hết các trường hợp thì mảng vẫn hữu dụng hơn, cho nên khái niệm mảng và tập hợp trong VanVo mình sẽ dùng trùng lặp nhau, bạn đọc nên hiểu hai khái niệm này trong VanVo là một, nhưng chúng không tương đương với khái niệm tập hợp thông thường.

Trong VanVo có những tập hợp được gọi là **Tập đếm được**, bạn có thể truy cập chỉ số (indexing) và lặp qua tập đếm được, những tập còn lại được gọi là **Tập không đếm được**. Sau đây là các loại tập hợp hiện có trong VanVo.

#### Khoảng Thực (Real interval)

Khoảng thực $[a,b]$ là tập các số thực $x$ sao cho $a\leq x \leq b$, bạn có thể dùng toán tử `thuộc` để xét xem một giá trị $x$ có thuộc vào một tập hay không, lấy ví dụ

```vanvo
cho A = [0,5]

xuất 2 thuộc A    // đúng
xuất 5 thuộc A    // đúng
xuất -1 thuộc A   // sai
xuất I thuộc A    // sai
```

Khoảng thực là Tập không đếm được.

#### Khoảng đều

Khoảng đều $[a..b]$ là tập các số $n$ sao cho $a \leq n \leq b$, và các phần tử liên tiếp cách nhau đúng một đơn vị, lấy ví dụ

```vanvo
cho a = 1.2
cho b = 5
cho A = [a..b]

với mỗi x thuộc A:
	xuất x

xuất b thuộc A

// Output:
1.2
2.2
3.2
4.2
sai
```

Từ ví dụ trên ta có thể nhận thấy Khoảng đều là một Tập đếm được.

Bạn có thể đặt bước nhảy (step) cho một Khoảng với cú pháp `[a..b, step]`, ví dụ

```vanvo
với mỗi n thuộc [0..4, 2]:
	xuất n

// Output:
0
2
4
```

#### Danh sách (List)

Danh sách sẽ tương đối giống mảng thông thường ở những ngôn ngữ khác, với cú pháp `{a, b, c, ...}`, ví dụ

```vanvo
cho A = {1, 2, "hello", đúng}

với mỗi phần tử thuộc A:
	xuất phần tử

// Output:
1
2
"hello"
đúng
```

#### List comprehension

Mình cũng không rõ phải dịch khái niệm này ra như thế nào, nhưng riêng trong VanVo thì list comprehension sẽ có cấu trúc giống y như cách chúng ta biểu diễn tập hợp trong toán

```bnf
{ <biểu thức> | <biến> thuộc <tập đếm được>, <ràng buộc> }
```

Có thể thấy cấu trúc của list comprehension và vòng lặp "với mỗi" có sự tương đồng nhất định, vì chúng thật sự có cơ chế gần giống nhau, ta có thể hiểu `<biểu thức>` ở đây là phần thân của vòng lặp, và giá trị của `<biểu thức>` sẽ là từng phần tử trong tập trên.

Ví dụ: Xây dựng tập các số nguyên dương chẵn

```vanvo
cho A = { n | n thuộc [1..], n % 2 == 0 }
```

Hoặc đơn giản hơn là

```vanvo
cho A = { 2n | n thuộc [1..] }
```

Bạn có thể nghi ngờ rằng khi chạy câu lệnh trên thì chương trình bị vướng vào vòng lặp vô hạn và không thể chạy tiếp những câu lệnh khác, nhưng thực tế thì chương trình vẫn tiếp tục chạy những câu lệnh tiếp theo, bạn có thể thao tác trên `A`, hay lấy ra bất kì phần tử nào trong tập `A` đó mà bạn muốn. Lý do ta có thể làm được việc này là vì VanVo có hỗ trợ lazy evaluation cho list comprehension, chỉ khi bạn cần phần tử nào thì chương trình mới tính ra phần tử đó (và các phần tử trước) rồi lưu lại. Vì vậy ta có thể dễ dàng định nghĩa ra mảng vô hạn các phần tử trong VanVo.

#### Các thao tác và phép toán trên tập hợp

**Lực lượng (#)**: Hiện tại chỉ có thể lấy lực lượng (số phần tử) trên Tập đếm được

```
cho A = [1..100, 2]
cho B = {3, 5, 7}

#A      // 50
#B      // 3
#(A-B)  // 50
```

**Chỉ số:** Tương tự, chỉ có Tập đếm được mới có chỉ số

```
cho A = [1..100, 2]
cho fib = {0, 1, 1} + { fib[n-1] + fib[n-2] | n thuoc [3..] }

A[1]     // 3
fib[50]  // 12586269025
```

**Phép hội (+)**: Đối với trường hợp lấy hội 2 Tập đếm được thì ta hiểu đây là phép hợp nối mảng sẽ chính xác hơn

```vanvo
cho A = {1, 2} + [6..10]  // {1, 2, 6, 7, 8, 9, 10}
cho B = {1, 2} + [6, 10]  // B là Tập không đếm được

8.2 thuộc B  // đúng
```

**Phép hiệu (-)**

```vanvo
cho A = [1..9] - [4, 6]  // {1, 2, 3, 7, 8, 9}
cho B = [1, 9] - [4, 6]  // B là Tập không đếm được

7 thuộc B  // đúng
```

**Tích Descartes (\*)**

```vanvo
cho A = [1..3]
cho B = [1..3]

A*B
// { {1, 1}, {1, 2}, {1, 3},
//   {2, 1}, {2, 2}, {2, 3},
//   {3, 1}, {3, 2}, {3, 3} }
```

## Túm cái váy

Hiện tại ngôn ngữ vẫn còn sơ khai và sẽ còn nhiều thay đổi trong thời gian tới, nhìn chung thì dự án này cũng chỉ là sở thích cá nhân thôi, mình không có ý định tạo ra với mục đích thay thế bất kì ngôn ngữ nào trên thị trường cả nên các bạn có ý kiến đóng góp hay ý tưởng gì thì cồm men bên dưới nhẹ nhàng hoặc có thể tạo issue trên github nhé.
