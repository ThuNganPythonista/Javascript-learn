30 THÁNG 3 2024 ĐẾN 5 THÁNG 3 2024

CHỈ GHI CHÚ TUẦN NÀY - CHỈ GHI CHÚ TUẦN NÀY

**##1)OPTIONAL CHAINING JS :##**

Optional chaining rất đơn giản đó là cú pháp [ ?. ] để truy cập vào các thuộc tính lồng nhau trong obj (nó an toàn và ngắn gọn hơn cách truyền thống : giảm thiểu nhu cầu dùng if else để kiểm tra thuộc tính null hay undefined trước khi truy cập thuộc tính)

**##2)Symbol :##**

- Symbol không có hàm khởi tạo nên ko thể dùng new
- Symbol luôn khác nhau, kể cả nó có cùng description hầu hết các kiểu dữ liệu trong js đều hỗ trợ chuyển đổi sang string nhưng symbol thì NO

  2.1 : Sử dụng **Symbol.for()**

- vì symbol là duy nhất, kể cả nó có cùng description. Nên dùng symbol for nếu muốn cho 2 symbol bằng nhau, quá trình xử lý :

phương thức này sẽ tìm đối tượng trong global xem có cái nào tương ứng với key không

2.2 : Sử dụng **Symbol.keyFor()**

    + cũng là tìm giá trị tương ứng nhưng nó không trả về true/false mà là giá trị key được tạo từ Symbol.for()

2.3 : **Cách lấy value khi Symbol là một thuộc tính**

    + Khi tạo 1 Symbol rồi bỏ nó vào object bằng cách bỏ description của nó vào dấu ngoặc vuông [] thì khi gọi value nó ra thì nó ko ra cái gì hết.

    => Bởi vì giá trị của symbol trong object nó bị ẩn, không thể nhìn thấy được theo mặc định chuyển đổi string của object nên phải gọi ra key đó cạnh bên obj luôn

    ví dụ : console.log(obj[id]) chứ gọi object ra thì nó chỉ ra 1 loạt tất cả các key khác mà thiếu mất thằng symbol hoặc nó gán là null :<

2.4 : **Object.getOwnPropertySymbols()**

    + Có nghĩa là ở trên phải ngoặc vuông từng symbol mới ra được value, nên ngta có Object.getOwnPropertySymbols() để lấy ra hết value của symbol.

2.5 : **Ứng dụng của Symbol khi đóng vai trò làm key trong obj**

    + Thường thuộc tính trong obj có thể bị cập nhật, sửa .. Ví dụ chúng ta muốn id là thuộc tính duy nhất, đặc biệt, không thể change thì làm sao để coder khác không bị nhầm. How to khóa ID lại ?

    => Bỏ symbol vào obj rồi viết hàm tham chiếu this tới duy nhất thuộc tính đó.

**##3) Sort() :##**

- Hàm sort sắp xếp phần tử theo bảng chữ cái dùng sort()

  3.1 **Viết hàm tăng dần/ giảm dần trước khi sort**

      + a - b > 0 nghĩa là a > b => a đưng trước b
      + a - b < 0 nghĩa là a < b => a đứng sau b
      + a - b = 0 nghĩa là a = b => giữ nguyên vị trí

Tương tự với TH giảm dần

3.2 **7 thuật toán sắp xếp**

**GIẢI THÍCH function : sort selection**

ví dụ dãy số lộn xộn từ 1 tới 9, thì có 8 vị trí. Mình xếp vị trí thứ nhất thì duyệt xem số nhỏ nhất của 8 con số này là số mấy, có được rồi thì tiếp vị trí 2, lúc này còn lại chỉ có 7 vị trí .. cứ như v tới hết

Giải thích về function : có 2 vòng for, một vòng for để thể hiện giá trị hiện tại, một vòng for để xét giá trị kế bên để so sánh. Xong rồi đổi chỗ cho nhau, giá trị lớn hơn thì ghi đè

**Sắp xếp theo tiếng Việt bảng chữ cái**

Dùng localeCompare()

4 **For each là gì**

Là phương thức có sẵn của array để duyệt qua mỗi phần tử

Ưu điểm : ngắn gọn, nhược điểm : code chạy chậm hơn nhưng ko đáng kể

- Format 1 : forEach(array, function(){})
- Format 2 : array.forEach(function(){})

\_ Thường tính tổng các số cộng lại với nhau trong một mảng cũng nên dùng forEach để tránh đặt biến i bị trùng và ngắn gọn hơn

\_ Không thể dùng từ khóa **break** trong javascript => lúc này dùng phương thức **arr.some()** return true để duyệt từng phần tử và dừng lại theo điều kiện

**4.1 Continue trong forEach**

\_ Từ khóa **continue** thường được dùng để bỏ một lượt lặp trong vòng lặp

- Tuy nhiên từ khóa này sẽ bị lỗi nếu dùng trong forEach()

**5. Các phương thức khác:**

**5.1: entries**

Nghĩa là ban đầu nó là một array bình thường, gán array này cho phương thức entries thì array này phân thân thành những array con cùng cặp key-value

Ví dụ : arr = ["a","b","c"] => [0,"a"] [1,"b"] [2,"c"]

Thường phương thức này kết hợp với for ... of để cho ra kết quả từng array, chứ console.log không ra gì đâu

**5.3: every**

\_ Trả về **true** nếu tất cả phần tử trong mảng thõa mản 1 hàm kiểm tra

**5.4: filter**

- Giống every nhưng không trả về true/false mà là phần tử thỏa mãn điều kiện

**5.5: find**

- Tìm phần tử đầu tiên thỏa mãn điều kiện, nếu không nó trả về 'undefined'

**5.6: findIndex**

- Nó trả về index nhưng mà nhiều phần tử thỏa mãn thì nó trả về 0, chỉ 1 phần tử thỏa mãn nó mới trả index đó. Còn không cái nào thỏa mãn nó trả về -1

**5.7: findIndex**

- Tác động lên tất cả các phần tử và trả về một mảng mới

- Nếu dùng tạo biến thì nó trả về mảng mới với những phần tử mới, còn điều kiện thỏa mãn thì giá trị nào thỏa nó trả về true

**5.8: reduce()**

- Quá trình xử lý của phương thức reduce() là như vầy : thực thi từng phần tử theo function từ trái sang phải.

- Hàm prototype build-in của reduce():

  +TH1: có initialValue

arr = [1,2,3,4,5]

    Array.prototype.reduce = function(callback,result){
    for (let i =0; i<this.length;i++){
        result = callback(result, this[i], i, this) // result là biến dự trữ, this[i] là current value
        // ví dụ cái lần chạy thứ nhất result = 1, this [i] = 2 thì result sẽ là 3 ở lần chạy thứ hai, vậy this[i] ở lần chạy thứ 2 sẽ là 3, vậy 3+3 = 6. ở lần chạy thứ 3 thì this[i]=4, nên result = 6+4=10, cứ như vậy
        }

}

    + TH2 : Không có initialValue

Array.prototype.reduce = function(callback,result){
let i = 0;
if (arguments.length<2){
// argument là biến đặc biệt trong js để truy cập đối tượng argument, nếu không có initialValue thì argument < 2
i = 1 // nếu không truyền initialValue thì biến của ta sẽ là phần tử đầu tiên của mảng là result = this[0] còn i sẽ = 1 để this[i] biến hiện tại là phần tử thứ hai của mảng.
result = this[0]
}
for (;i<this.length;i++){
result = callback(result, this[i], i, this)
}
}

- Thường reduce() dùng để tính tổng, hiệu, tích thương .. của một array. Một hàm của nó gồm giá trị tích lũy và giá trị hiện tại để cộng dồn. Tuy nhiên, nó còn có giá trị khởi tạo nữa. ví dụ tổng phần tử là 10 và mình đặt giá trị khởi tạo là 10, thì tổng là 20.

và còn nhiều cái khác nữa như

**5.9: concat()**

- Nối 2 array lại với nhau

**5.10: Kết hợp concat() và reduce() để chuyển mảng 2 chiều thành 1 chiều**

- Biến accumulator và currentValue trong reduce vẫn thực hiện chức năng của nó là cộng,
  nhưng hiện giờ không phải cộng số tự nhiên với nhau mà là cộng mảng, vậy kết quả ra là gì, ví dụ :
  [[1, 2, 3], [4, 5], [6]];?

Vậy ở vòng cộng đầu tiên :
accumulator = [1,2,3]
currentValue = [4,5,6]
Vậy : accumulator + currentValue
[1,2,3]+[4,5] = ?

    => Nó biến 2 mảng thành string rồi nối lại với nhau thành : "1,2,3"+"4,5" = 1,2,34,5

Ở vòng cộng thứ hai cũng tượng tự biến thành string rồi cộng nhau ra 1,2,34,56

OK !! Vậy khi dùng concat() ở chỗ [1,2,3] + [4,5] thì nó được nối với nhau trước khi nó bị biến thành STRING

**5.11: includes()**

có 2 tham số (tham số thứ 2 không bắt buộc). Cú pháp

array.includes(element, start)

Kiểm tra xem array có element đó không và start từ đâu. Nếu không có start thì nó auto start từ index 0.

**5.12: Một số phương thức khác của mảng**

push(): Thêm một phần tử vào cuối mảng.
pop(): Xóa phần tử cuối cùng của mảng.
unshift(): Thêm một phần tử vào đầu mảng.
shift(): Xóa phần tử đầu tiên của mảng.
splice(): Thêm hoặc xóa phần tử của mảng từ vị trí chỉ định.
slice(): Trích xuất một phần của mảng thành một mảng mới

**6. Symbol.iterator**

Ví dụ : in ra range(1,10) thì python dùng range nhưng js thì không

let range = {
from: 1,
to: 5,
};

for (let num of range) {
console.log(num);
}

NÓ SẼ BÁO LỖI

Thường in ra range của một mảng array hay string ở js, thì ta dùng for ... of. Tuy nhiên object range dùng for .. of nó sẽ báo lỗi. Vì vậy ta dùng hàm next() với hai thuộc tính là value và boolean. Khi nào from đụng giá trị to thì boolean done thì trả về true thì dừng.

Vậy để có thể dùng for ... of thì ta sẽ làm như sau

<<<<<<< HEAD
``
=======

```
>>>>>>> origin/main
let range = {
from: 1,
to: 5,
[Symbol.iterator]() {
return {
current: this.from,
last: this.to,
next() {
if (this.current <= this.last) {
return { done: false, value: this.current++ };
} else {
return { done: true };
}
},
};
},
};
for (let num of range) {
console.log(num);
}

```

Vậy là for .. of được range từ 1 -> 5 rồi

**6.1 Gọi trực tiếp iterator mà không dùng for..of**

Này biết thêm thôi để hiểu cách symbol iterator hoạt động thôi @\_@ Dùng for ... of được thì dùng thôi, chứ cái này không bao giờ áp dụng trong thực tế

```

let str = "Hello";

let iterator = str[Symbol.iterator]();

while (true) {
let result = iterator.next();
if (result.done) break;
console.log(result.value);
}

```

**6.2 Array.from(tên OBJECT)**

- biến một object array-like hoặc iterable object thành array. Chỉ áp dụng khi tất cả thuộc tính trong object cùng kiểu dữ liệu

- Ví dụ array-like :

**6.3 Iterable Object thành array**

```

let range = {
from: 1,
to: 5,

// phương thức `Symbol.iterator`
[Symbol.iterator]() {
// phương thức này trả về một iterator object - object có phương thức next
return {
current: this.from,
last: this.to,

      // khi for...of cần giá trị tiếp theo thì nó sẽ gọi phương thức next
      next() {
        // phương thức next trả về object dạng: {done:..., value :...}
        if (this.current <= this.last) {
          // done=false là chưa kết thúc
          return { done: false, value: this.current++ };
        } else {
          // done=true là kết thúc
          return { done: true };
        }
      },
    };

},
};

let arr = Array.from(range);
console.log(arr); [1,2,3,4,5]

```

**7. Chú ý về wrapper object:**

Số 0 là boolean false, nhưng new Object(0) thì nó là kiểu dữ liệu objec là luôn luôn truthy

Vậy nếu dùng hàm khởi tạo : let test = new Obj(0) thì dễ gây nhầm lẫn và khó hiểu, vậy nên không nên dùng toán tử new với number(),string(),boolean để khởi tạo

let objZero = new Number(0);
let zero = 0;

if (objZero) {
console.log("zero là truthy!"); // zero là truthy!, trong khi in ra zero thì nó lỗi vì nó false
}

Không nên dùng các Number(), String(), Boolean() cho hàm khởi tạo nhưng để chuyển đổi về kiểu dữ liệu mình muốn thì khá hữu ích

ví dụ :

```

let num = Number("123");
console.log(num); // 123
console.log(typeof num); // number

```

**8.Biểu diễn number**

a) **Dùng dấu gạch dưới :**
origin/main

Đây là 1 tỷ : let oneBillion = 1000000000;

Nhưng js cho phép bạn dùng dấu gạch dưới " \_ " để biểu diễn để dễ nhìn hơn

let oneBillion = 1_000_000_000;

b) **Dùng chữ e**

- Có bao nhiêu số 0 tương ứng với có bao nhiêu chữ e

```

//
let a = 1e3; // 1_000 - 1 nghìn
let d = 4.6e9; // 4_600_000_000 - 4.6 tỷ
0.000001 === 1e-6; // nó là 1 chia cho 1000,000
1.23e-4 === 1.23 / 10000; // nó là 1.23 chia cho 10000
//

```

c) \***\*Dùng num.toString():\*\***

Trả về String biểu diễn số num ở hệ cơ số base.

let num = 255;

// chuyển sang hệ cơ số 16
console.log(num.toString(16)); // ff

// chuyển sang hệ cơ số 2
console.log(num.toString(2)); // 11111111

hoặc

console.log((1234567890).toString(36)); // kf12oi

d)\***\*Làm tròn number :\*\***

Math.floor() : làm tròn xuống
Math.ceil() : làm tròn lên
Math.round() : làm tròn tới số gần nhất
Math.trunc() : cắt bỏ số dư

e) \***\*Dùng toFixed():\*\***

Phương thức này sẽ làm tròn số và trả về string với chính xác n chữ số sau dấu phẩy.

let a = 1.2345;
let b = a.toFixed(2);
console.log(b); // "1.23"

Có thể dùng Number() để chuyển đổi kiểu dữ liệu sang number

g) \***\*Infinity và -Infinity :\*\***

Js biểu diễn số theo chuẩn IEEE-745, định dạng này sử dụng 64bit. Vượt 64bit thì nó sẽ thành _Infinity_ hoặc _-Infinity_

console.log(1e500); // Infinity
console.log(-1e500); // -Infinity

h) \***\*Sự sai số :\*\***

ví dụ : 0.1 + 0.2 === 0.3 là sai

Bởi vì dưới dạng nhị phân trong máy tính.

0.1 không phải là 0.1 mà là : 0.10000000000000000555

console.log((0.1).toFixed(20));

Vì vậy phải dùng toFixed(1) lúc này

let a = 0.1;
let b = 0.2;

// Sử dụng toFixed(1)
let sum2 = (a + b).toFixed(1);
console.log(sum2);

hoặc sử dụng nhân rồi chia, nhân cả hai cho 10 cộng với nhau rồi tất cả chia 10

e) \***\*Để kiểm tra phải là number không thì dùng isNaN() hoặc isFinite():\*\***

- Hàm isNaN() này chuyển đổi value thành dạng số rồi kiểm tra xem có bằng NaN hay không.

console.log(isNaN(1)); // false

có thực sự cần thiết không? có vì nếu ghi là if số === NaN thì sẽ lỗi, trong trường hợp biến == NaN thì chỉ có cách dùng isNaN() thôi.

- Hàm isInfinite() chuyển đổi giá trị value thành dạng số và trả về true nếu số đó khác Infinity, -Infinity và NaN, ngược lại thì trả về false.

console.log(isFinite("1")); // true - "1" chuyển thành 1
console.log(isFinite("abc")); // false - "abc" chuyển sang số thành NaN
console.log(isFinite(1e500)); // false - 1e500 bằng Infinity

z) Hàm **parseInt()** và **parseFloat()**

parse ('paars) : seperate a sentence into grammatical parts, such as subject

- Hàm parseInt tách lấy số nguyên.
- Hàm parseFloat tách lấy số thực.

console.log(parseInt("100px")); // 100
console.log(parseFloat("1.1em")); // 1.1

j) \***\*Một số phương thức toán học cơ bản :\*\***

Math.random()
Math.max()
Math.min()
Math.pow(2,3) = 2^3 = 8

**9. Biểu diễn trong String**

- \n : dòng mới
- \' hoặc \" : dấu nháy đơn hoặc nháy kép (có thể kết hợp các dấu nháy với nhau để tránh sử dụng kí tự \:)
- \\ : dấu \
- \t : dấu tab
- \xXX: biểu diễn kí tự unicode, trong đó XX là mã unicode ở hệ thập lục phân. Ví dụ: \x7A tương đương với z
- \uXXXX hoặc \u{X..XXX} : biểu diễn symbol unicode

a) \***\*Tính độ dài của String :\*\***

<!-- console.log(`Me\n`.length); // 3 -->

- Kí tự \n là kí tự đặc biệt. Nên string Me\n chỉ có độ dài bằng 3, chứ không phải bằng 4.

- length là thuộc tính chứ không phải phương thức. Vì vậy, nếu gọi "str".length() thì sẽ bị lỗi "str ".length is not a function.

b) \***\*Sự khác nhau khi tìm chữ cái bằng index [] hoặc dấu ():\*\***

Điểm khác nhau duy nhất là một cái khi không tìm thấy sẽ trả về undefined còn () trả về string rỗng

c) \***\*String trong js là bất biến :\*\***

let str = "hello";
str[0] = "H";
console.log(str); // hello - string không thay đổi

d) \***\*Đổi chữ hoa và chữ thường :\*\***

console.log("Hello".toLowerCase()); // hello
console.log("Hello".toUpperCase()); // HELLO

e) \***\*Tìm kiếm string con :\*\***

Phương thức : **str.indexOf(substr, pos)**

lấy ra index của chữ đó, còn không tìm thấy thì trả về -1

let str = "I am a js dev";
console.log(str.indexOf("a", 3));

//output : 5

h) \***\*muốn tìm hết vị trí của một chữ\*\***

Khi tìm thấy một vị trí, mình lưu lại ví trí đó để sử dụng cho lần lặp tiếp theo. Cho đến khi kết quả là -1 thì dừng lại.

let str = "I am a js dev";
let target = "a";

let pos = 0;
while (true) {
let foundPos = str.indexOf(target, pos);
if (foundPos === -1) break;

console.log("found pos:", foundPos);
pos = foundPos + 1;
}

m) \***\*Tìm kiến index từ cuối lên đầu:\*\***

Cú pháp : str.lastIndexOf(substr, pos)

let str = "I am a js dev";
console.log(str.lastIndexOf("a")); // 5

n) \***\*Dùng inludes thì trả lại true/false :\*\***

hữu ích khi cần kiểm tra tính tồn tại của substring mà không quan tâm vị trí

let str = "I am a js dev";
console.log(str.includes("js")); // true
console.log(str.includes("JS")); // false

tham số thứ hai của str.includes() có thể là position nhaa

g ) \***\*Phương thức str.startsWith(substr) :\*\***

let str = "I am a js dev";
console.log(str.startsWith("I am")); // true
console.log(str.startsWith("js")); // false

f) \***\*Phương thức str.endsWith(substr) :\*\***

let str = "I am a js dev";
console.log(str.endsWith("I am")); // false
console.log(str.endsWith("dev")); // true

z) \***\*Phương thức lấy giá trị của string slice():\*\***

let str = "I am a js dev";
console.log(str.slice(2, 4)); // am

let str = "I am a js dev";
console.log(str.slice(2)); // am a js dev

let str = "I am a js dev";
console.log(str.slice(-3, -1)); // de

i) \***\*Phương thức str.substring(start [, end]) :\*\***

Phương thức này gần giống phương thức str.slice(start, [, end]) chỉ khác ở chỗ là: phương thức substring cho phép start có thể lớn hơn end và substring không áp dụng được cho trường hợp start, end có giá trị âm, ví dụ:

let str = "I am a js dev";

// trường hợp bình thường
console.log(str.substring(2, 4)); // am

// trường hợp không có end
console.log(str.substring(2)); // am a js dev

// trường hợp start lớn hơn end
console.log(str.substring(4, 2)); // am

CÓ NGHĨA LÀ (4,2) SẼ ĐƯỢC WRAP LẠI VÀ THỰC THI NHƯ (2,4) đó

y) \***\*Phương thức str.substr(start [, length]) :\*\***

Trả về substring bắt đầu từ vị trí start và lấy số kí tự là length.

let str = "I am a js dev";
console.log(str.substr(2, 2)); // am - bắt đầu từ vị trí 2, lấy 2 kí tự

Không có giá trị length() thì trả về đến hết string.

Nếu giá trị start là âm, thì việc lấy substring được tính từ cuối (vị trí kí tự cuối cùng là -1):

let str = "I am a js dev";
console.log(str.substr(-2, 2)); // ev

==> Kết luận : Trong ba phương thức trên thì phương thức slice có vẻ linh động hơn cả, vì nó ngắn gọn, dễ nhớ và hỗ trợ tham số âm.

Phương thức substr thì đã bị lỗi thời.

U) \***\*So sánh String :\*\***

- kí tự viết thường lớn hơn kí tự viết hoa vì JavaScript được encode bằng UTF-16

`console.log("a" > "A"); // true`

**str.codePointAt(pos)** : đổi string sang số unicode

```

console.log("a".codePointAt(0)); // 97
console.log("A".codePointAt(0)); // 65

```

"a"> "A" vì 97>65

**String.fromCodePoint(code)** : trả về kí tự dựa trên mã code

`console.log(String.fromCodePoint(97)); // a`

I) **ES6 Template String:**

- Tạm gọi là cú pháp **${expression}** cho phép viết biểu thức ngay trong String

```

let name = "Lam Pham";
let greeting = `I'm ${name}`;

console.log(greeting);

```

- Thường ghép nối một câu hoàn chỉnh, có thể dùng toán tử + hoặc concat().Tuy nhiên, dùng ES6 String nhìn gọn gàng và đẹp hơn. Áp dụng được cho biểu thức toán học thay vì toán tử +

- Viết biểu thức toán học hoặc hàm ngay trong string

**Lưu ý: là dùng dấu nháy `` chứ không phải dấu "" nha**

**Tagged template ES6**

ES6 String bình thường expression là biến hoặc return của 1 hàm, nhưng ta cũng có thể kết hợp 2 hàm lại bằng 1 hàm để trong expression , 1 hàm trước ES6

```

const math = ([x, y], op) => op(Number(x), Number(y));
const plus = (x, y) => x + y;
const result = math`6 ${plus} 3`;
console.log(result); // 9

```

**Lưu ý: Thường nếu ES6 expression ở đầu và cuối string đó, mà function đó có 3 tham số thì rất có thể chữ string ở giữa sẽ bị đem đi làm tham số thứ 3**

**HÔM NAY BẮT ĐẦU TỪ 6 THÁNG 4 2024**

1. **MAP LÀ GÌ**

Map là một cấu trúc dữ liệu có type là object. Tuy nhiên object chỉ có 2 kiểu value là symbol và key, còn map() đa dạng value hơn như Boolean/Number/String/NaN/...

```

const map1 = new Map();
console.log(typeof map1); // object

```

_Khởi tạo Map rỗng_ : `const map = new Map()`

**Khởi tạo Map từ Array**

Array hợp lệ để khởi tạo Map là các phần tử của array phải là một mảng hai phần tử.

**Khởi tạo Map từ Arguments**

giống y chang array mà khác cách viết thôi

**Khởi tạo map từ map**

Giống tạo một clone mới thôi

**Cách thêm phần tử vào Map()**

Cú pháp

`map.set(key,value)`

Nếu key chưa tồn tai thì nó tạo mới, nếu đã tồn tại thì nó gán giá trị mới

Ngoài ra, cú pháp trên có thể dùng để thêm 1 lần rất nhiều cặp key-value trong cùng một dòng

**Lấy giá trị của phần tử trong Map**

Để lấy value tương ứng với key của map trong JavaScript, bạn có thể sử dụng phương thức map.get(key) .
Nếu không tồn tại thì trả về undefined

**Kiểm tra phần tử tồn tại trong Map**

dùng phương thức has : `map.has(key);`

**Xoá một phần tử trong Map**

dùng phương thức : map.delete(key);

**Xoá tất cả phần tử trong Map**

sử dụng phương thức clear : map.clear()

**Duyệt qua các phần tử trong Map**

    + sử dụng for.. of
    + sử dụng forEach (dùng forEach thì nó có 3 tham số cho xài luôn, key-value-map)

**Phương thức map.keys()**

trả về keys

**Phương thức map.values()**

trả về values

**Chuyển Map thành Array**

sử dụng cú pháp spread để tạo một array toàn keys hoặc values từ map

**2. SO SÁNH MAP VÀ OBJECT**

Khi nào dùng Object, khi nào dùng Map

**OBJECT**

    + Nếu key chỉ đơn giản là symbol và string
    + Json chỉ hỗ trợ object
    + Thích hợp khi ít thuộc tính

**Map**

    + muốn sử dụng đa dạng key hơn như key là : object, function...
    + duy trì thứ tự các keyss. Tại vì khi lặp object, thứ tự nó không còn giống như lúc nó đc thêm vào
    + Map mà mình lưu trữ tập tin lớn thì nó làm tốt hơn

**3. HỌC VỀ SET**

- Set trong JS là một loại object, cho phép chúng ta lưu trữ dữ liệu mà không trùng lặp, nó là duy nhất bằng thuật toán SameValueZero
- Chỉ khác ở chỗ thuật toán này coi NaN là giống nhau (mặc dù NaN == NaN là false).
- Đa số áp dụng cho string và number, còn object khác thì khác
- có thể lưu NaN và undefine vào

`const set1 = new Set();`

**a) Khởi tạo set() rỗng**

**b) Khởi tạo set() từ Array**

Array là một loại iterable object. _Note:_ Iterable object là một object có thể được lặp lại qua các phần tử của nó. Nói cách khác, bạn có thể sử dụng vòng lặp để truy cập từng phần tử trong object.

**c) Khởi tạo set() từ String**

String cũng là một loại iterable object.

**d) Khởi tạo set() từ arguments**

arguments là đối tượng có sẵn trong hàm, dùng để lưu trữ mảng các tham số truyền vào.

Ngoài ra, còn có khởi tạo set từ : NodeList, TypedArray, Set từ Map, Set từ Set

**d+) Thêm phần tử vào Set**

`set.add(value);`

**g) Lấy số lượng phần tử trong Set**

dùng set.size()

**h) Kiểm tra phần tử tồn tại trong Set**

dùng set.has()

Nó dùng toán tử nghiêm nghặt === để so sánh đó

**i) Xoá một phần tử trong Set**

dùng set.delete(value)

**q) duyệt qua tất cả phần tử trong set()**

    + dùng for ... of

    + dùng forEach()

    + dùng 3 phương thức : set.keys(), set.values() và set.entries()

**h) Chuyển Set thành Array và ngược lại**

sử dụng Array.from hoặc sử dụng toán tử spread

**4.Destructuring assignment trong Javascript**

- Destructuring Assignment trong JavaScript là một cú pháp đặc biệt cho phép bạn lấy ra dữ liệu từ Object hoặc Array và gán chúng vào các biến thông thường.

- Tuy nhiên, việc "lấy ra dữ liệu" này chỉ copy mà không làm thay đổi cấu trúc của Object hoặc Array.

**a) Destructuring Assignment với Array**

`let [firstName, lastName] = ["David", "Walsh"];`

**b) Khai báo giá trị default**

`let [firstName, lastName = "Anonymous"] = ["David"];`

Vế phải có một phần tử nên lastName nhận giá trị mặc định bằng Anonymous.

**c) Bỏ qua một số phần tử trong mảng**

chỉ muốn lấy ra một vài giá trị trong đó thì có thể sử dụng toán tử dấu phẩy ,

`let [title, , , color] = ["window", 300, 400, "#000"];`

Lúc này, phần tử ứng chỉ số 1 (bằng 300) và 2 (bằng 400) bị bỏ qua.

**d) Gán các giá trị còn lại của mảng cho một biến khác**

- ở đây mình lấy ra một phần tử và các phần tử còn lại được gán vào một biến khác :
  sử dụng cú pháp spread ...

`let [title, ...others] = ["window", 300, 400, "#000"];`

OUTPUT :

title = "window"

others = [300, 400, "#000"]

- biến others có giá trị là một mảng các phần tử còn lại.

**g) Hoán đổi giá trị của biến**

```
let a = 1;
let b = 2;

[a, b] = [b, a];
```

**h) Sao chép mảng**

Mảng trong JavaScript là kiểu dữ liệu tham chiếu, nên việc sử dụng toán tử gán = thực chất là copy địa chỉ, ví dụ:

```
const a = [1, 2];
const b = a;

console.log(b); // [1, 2]
console.log(b === a); // true
```

Nếu bạn muốn b vẫn có giá trị giống a nhưng b === a là false thì có thể sử dụng destructuring assignment trong JavaScript với cú pháp spread ... như sau:

```
const a = [1, 2];
const [...b] = a;

console.log(b); // [1, 2]
console.log(b === a); // false
```

**z) Lấy dữ liệu từ obj hoặc arr để gán cho biến**

```
let { firstName, lastName } = { firstName: "David", lastName: "Walsh" };
/*
 * firstName = David
 * lastName = Walsh
 */
```

Ví dụ trên thực hiện khai báo và gán luôn giá trị cho các biến firstName và lastName

Ngoài ra, ta có thể tách biệt việc khai báo và gán như sau:

```
let firstName, lastName;
({ firstName, lastName } = { firstName: "David", lastName: "Walsh" });
/*
* firstName = David
* lastName = Walsh
*/
```

**z+1) Khai báo giá trị default**

là gán giống trên nhưng trong biến gán sẵn ko cần bằng

`let { firstName, lastName = "Anonymous" } = { firstName: "David" };`

**j) Gán tên mới cho biến**

Để ngắn gọn, bạn có thể đặt tên mới cho biến khi thực hiện destructuring như sau:

```
let { firstName: fn, lastName: ln } = { firstName: "David", lastName: "Walsh" };
/*
 * fn = David
 * ln = Walsh
 */
```

**o) Gán các giá trị còn lại của Object cho một biến khác**

cú pháp spread ... để gán các thuộc tính còn lại cho object khi thực hiện destructuring.

```javascript
let { a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 };
/*
 * a = 10
 * b = 20
 * rest = { c: 30, d: 40 }
 */
```

**5. KHỞI TẠO DATE**

- Vẫn là cú pháp = new Date()

\_ Hàm new **Date(milliseconds)** tạo một đối tượng date bằng cách thêm mili giây vào thời gian bằng không. Tham số biểu thị thời gian đã trôi qua tính bằng mili giây kể từ ngày 1 tháng 1 năm 1970 theo giờ UTC.Feb 12, 2022

- Thời gian trước ngày 01/01/1970 có timestamp âm, ví dụ ngày 31/12/1969:

```javascript
let dec31_1969 = new Date(0 - 24 * 3600 * 1000);
console.log(dec31_1969); // Wed Dec 31 1969 07:00:00 GMT+0700 (Indochina Time)
```

- chuyển đổi string sang đối tượng Date :

```javascript
let date = new Date("2021-12-19");
console.log(date); // Sun Dec 19 2021 07:00:00 GMT+0700 (Indochina Time)
```

- hàm khởi tạo đầy đủ các thông tin của Date :

`new Date(year, month, date, hours, minutes, seconds, ms)`

- Độ chính xác tối đa là 1 mili giây:

```javascript
let date = new Date(2021, 0, 1, 2, 3, 4, 567);
// 01/01/2021, 02:03:04.567
```

- **Truy cập các phần tử của Date():**

Phương thức getFullYear(): trả về năm (gồm 4 chữ số).

Phương thức getMonth(): trả về tháng (từ 0 đến 11).

Phương thức getDate(): trả về ngày trong tháng (từ 1 đến 31).

Phương thức getHours(): trả về giờ.

Phương thức getMinutes(): trả về phút.

Phương thức getSeconds(): trả về giây.

Phương thức getMilliseconds(): trả về mili giây.

- **Thay đổi các phần tử của Date** :

Phương thức setFullYear(year, [month], [date])

Phương thức setMonth(month, [date])

Phương thức setDate(date)

Phương thức setHours(hour, [min], [sec], [ms])

Phương thức setMinutes(min, [sec], [ms])

Phương thức setSeconds(sec, [ms])

Phương thức setMilliseconds(ms)

Phương thức setTime(milliseconds)

**Chuyển date về number**

Khi đối tượng Date được chuyển đổi về dạng số, Date sẽ trở thành timestamp, giống như cách sử dụng date.getTime().

```javascript
let date = new Date();
console.log(+date); // 1639886372852
console.log(date.getTime()); // 1639886372852
```

- Phương thức Date.parse(str) : sẽ parse string ở định dạng tương ứng và trả về giá trị timestamp, nếu định dạng hoặc giá trị không hợp lệ thì trả về NaN

- Tháng đếm từ 0 (tháng 1) đến 11 (tháng 12).

- Ngày trong tuần đếm từ 0 (chủ nhật) đến 6 (thứ 7).

- Phương thức Date.now() trả về timestamp hiện tại mà không cần tạo mới đối tượng Date.

**6. JSON trong JavaScript**

**a) Json là gì**

- viết tắt của JavaScript Object Notation. Đây là một định dạng chung để biểu diễn các giá trị và object.

- JSON được sử dụng nhiều để trao đổi dữ liệu giữa client (JavaScript) và server (Ruby, PHP, Java,...).

- JSON trong JS có hai phương thức là:

  - JSON.stringify(): chuyển object thành string.

  - JSON.parse(): chuyển string thành object.

**b) Phương thức JSON.stringify**

phương thức JSON.stringify(user) nhận vào một object và trả về string biểu diễn object đã truyền vào.
