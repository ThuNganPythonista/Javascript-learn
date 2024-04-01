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