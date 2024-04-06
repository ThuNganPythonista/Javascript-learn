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

//continue

const arr2 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  if (i === 3) continue;
  console.log(i);
}

//return

const arr3 = [1, 2, 3, 4, 5];
arr3.forEach(function (item, i) {
  //mặc định tham số lần lượt ở đây là item, index, array rồi
  if (i === 3) return;
  console.log(item);
});

//every

function condition_Meet(item, index) {
  return item > 10;
}
console.log(arr3.evevry(condition_Meet));

//filter

function isBigEnough(element, index, array) {
  return element >= 10;
}
arr = [12, 5, 8, 130, 44];
console.log(arr.filter(isBigEnough));

//find

function isBigEnough(element, index, array) {
  return element >= 10;
}
arr = [12, 5, 8, 130, 44];
console.log(arr.find(isBigEnough)); // y chang filter nhưng chỉ trả về 1 phần tử đầu thôi

//findIndex

function isBigEnough(element, index, array) {
  return element >= 10;
}
arr = [12, 5, 8, 130, 44];
console.log(arr.findIndex(isBigEnough));

//map (true/false)

function isBigEnough(element, index, array) {
  return element >= 100;
}
arr = [12, 5, 8, 130, 44];
console.log(arr.map(isBigEnough));

// map (new arr)
const numBers = [1, 4, 9];
const roots = numBers.map(Math.sqrt);

console.log(roots);
console.log(numBers);

// reduce()

const num_bers = [1, 2, 3, 4, 5];
const su_m = num_bers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(su_m);

//concat ()

var projec1 = ["PHP", "CSS"];
var projec2 = ["HTML", "Python", "JS"];
var children = projec1.concat(projec2);
console.log(children);

//Array.from ()

let arrayLike = {
  0: "a",
  1: "b",
  length: 2,
};

let arr4 = Array.from(arrayLike);
console.log(arr4);

console.log(parseInt("100px")); // 100
console.log(parseFloat("1.1em")); // 1.1

// ES6 string

let x = 1;
let y = 2;
let sum1 = (x, y) => x + y;

console.log(`Sum of x and y is: ${x + y}`); // Sum of x and y is: 3

console.log(`Sum of x and y is: ${sum1(x, y)}`); // Sum of x and y is: 3

// map từ array

const map2 = new Map([
  [1, "a"],
  [2, "b"],
]);
console.log(map2);

// map từ arguments

function func4() {
  const map4 = new Map(arguments);
  console.log(map4);
}

func4(["one", 1], ["two", 2], ["three", 3]);

// map từ map

const map6 = new Map([
  ["a", 1],
  ["b", 2],
]);
console.log(map6);
const map6_clone = new Map(map6);
console.log(map6_clone);

//map từ set

const set5 = new Set([
  ["a", 1],
  ["b", 2],
]);
console.log(set5);
const map5 = new Map(set5);
console.log(map5);
