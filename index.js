// Optional chaining

const user = {
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "Anytown",
  },
};

const city = user?.address?.city;

console.log(city);

// Symbol.for()

let id1 = Symbol("id");
let id2 = Symbol.for("id");
let id3 = Symbol.for("id");

console.log(id1 === id2);
console.log(id1 === id3);
console.log(id2 === id3);

// Symbol.keyFor()

let hello1 = Symbol.for("id");
let hello2 = Symbol.keyFor(hello1);
console.log(hello2);

//sort + ascending

let a = [9, 100, 45, 33];

a.sort((a, b) => a - b);

console.log(a);

//  Selection Sort

function selectionSort(arr) {
  let currentValueNewIndex;
  for (let i = 0; i < arr.length; i++) {
    currentValueNewIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[currentValueNewIndex] > arr[j]) {
        // số đứng sau bé hơn số đứng trước
        currentValueNewIndex = j; // nếu TH xảy ra = j thì nhảy xuống cái thằng if ở dưới @@
      }
    }
    if (i !== currentValueNewIndex) {
      // số đứng sau lớn hơn số đứng trước
      let temp = arr[i]; // cái này đễ giữ giá trị arr[i] để ghi đè cho số đứng sau thành số đứng trước
      arr[i] = arr[currentValueNewIndex]; // này đổi chổ arr[i] sang arr[j]
      arr[currentValueNewIndex] = temp; // còn cái số j lúc đó thành i nên ghi đè nè
    }
  }
  return arr;
}

// sort bằng bảng chữ cái tiếng Việt

const provinces = [
  "Hà Giang",
  "Hà Nam",
  "Hà Nội",
  "Hà Tĩnh",
  "Hòa Bình",
  "Hưng Yên",
  "Hải Dương",
  "Hải Phòng",
  "Hậu Giang",
];

const result = provinces.sort((a, b) => a.localeCompare(b)); // a và b là 2 elements liên tiếp trong cái array đó, còn localeCompare là build-in string method để sort() so sánh 2 a và b theo local kí tự
console.log(result); // localeCompare trả giá trị âm nếu a đứng trước b và dương nếu a sau b

//forEach format 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

forEach(numbers, function (element) {
  sum += element;
});
console.log(sum);

//forEach format 2

function printContentArray(array) {
  // ví dụ : in ra nội dung mảng
  array.forEach(function print(element) {
    console.log(element);
  });
}

printContentArray([1, 3, 5]);

// arr.some()

const arr = [1, 2, 3, 4, 5];

arr.some(function (item, index) {
  if (index === 3) return true; // nếu index = 3 thì dừng
  console.log("i=", index);
});
