30 THÁNG 3 2024 ĐẾN 5 THÁNG 3 2024

CHỈ GHI CHÚ TUẦN NÀY - CHỈ GHI CHÚ TUẦN NÀ

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

<!-- arr = [1,2,3,4,5]

    Array.prototype.reduce = function(callback,result){
    for (let i =0; i<this.length;i++){
        result = callback(result, this[i], i, this) // result là biến dự trữ, this[i] là current value
        // ví dụ cái lần chạy thứ nhất result = 1, this [i] = 2 thì result sẽ là 3 ở lần chạy thứ hai, vậy this[i] ở lần chạy thứ 2 sẽ là 3, vậy 3+3 = 6. ở lần chạy thứ 3 thì this[i]=4, nên result = 6+4=10, cứ như vậy
        }
} -->

    + TH2 : Không có initialValue

<!-- Array.prototype.reduce = function(callback,result){
        let i = 0;
        if (arguments.length<2){
            // argument là biến đặc biệt trong js để truy cập đối tượng argument, nếu không có initialValue thì argument < 2
            i = 1       // nếu không truyền initialValue thì biến của ta sẽ là phần tử đầu tiên của mảng là result = this[0] còn i sẽ = 1 để this[i] biến hiện tại là phần tử thứ hai của mảng.
            result = this[0]
        }
    for (;i<this.length;i++){
        result = callback(result, this[i], i, this)
        }
}  -->

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

**6. Symbol.iterator**

Ví dụ array và string là iterable vì nó dùng for .. of được, nhưng object thì không
