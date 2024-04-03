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
