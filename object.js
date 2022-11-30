// Object
// const name = 'sera';
// const age = 4;
// print(name, age); // parameter로 전달
// function print(name, age) {
//     console.log(name);
//     console.log(age);
// } // parameter로 전달
// 이런 방식은 전달해야하는 인자가 많을 때 효율적이지X
// 따라서 Object 사용

// object 만드는 법
// object = { key : value }
const obj1 = {};
const obj2 = new Object();

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const sera = { name: "sera", age: 20 };
print(sera);

// 자바스크립트는 동적인 언어이므로 뒤늦게 property 추가 가능
// 가능하면 피해야한다.
sera.hasJob = true;
console.log(sera.hasJob);

console.log(sera.name); // .
// [], key는 항상 string type으로 전달해야함 ('')
// 동적으로 key의 value를 받아와야할 때 유용하게 사용
console.log(sera['name']);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(sera, 'name');
printValue(sera, 'age');


const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'deve', age: 4 };
// person4 추가
const person4 = new Person('ellie', 30);
console.log(person4);

// property를 반복할 필요 없이 함수를 만들어서 object 형성
// constructor function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this
}

// in operator : 해당하는 object 안에 key가 있는지 없는지 확인
console.log('name' in sera); // t
console.log('age' in sera); // t
console.log('random' in sera); // f
console.log(sera.random); // undefined

console.clear(); // console에 이전 것들 지우기

// for..in : 모든 key들을 받아올 수 있다.
// for (key in obj)
for (key in sera) {
    console.log(key);
}

// for..of
// for (value of 순차적인 데이터)
const array = [1, 2, 4, 5];
// for(let i = 0; i < array.length; i++) {
//     console.log(array);
// }
// => 이것을 쉽게
for(value of array) {
    console.log(value);
}

// cloning
const user = { name: 'sera', age: '20'};
const user2 = user;
user2.name = 'coder'; // 'coder'로 변경
// user2의 reference의 name = user의 reference의 name
console.log(user);

// object 복사하기 예전ver.
const user3 = {}; // 빈 object를 만든다.
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);

// 다른 방법
// 자바스크립트의 모든 object는 이 Object를 상속한다. (기본으로 있음)
// const user4 = {}; // 빈 target을 만든다.
// Object.assign(user4, user); // (새로 만들 것, 복사할 대상)
// console.log(user4);

// = 상단과 같음
const user4 = Object.assign({}, user);
console.log(user4);

// 또 다른 example
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
// 뒤에 나올수록 앞에 동일한 property가 있다면 값이 덮어씌워진다. (뒤에 값으로)
console.log(mixed.color);
console.log(mixed.size);