'use strict';

// Class = template(틀)
// Class에 데이터를 넣어서 만든 것 : Object
class Person {
  // 생성자(object를 만들 때 필요한 데이터를 전달)
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }
  // methods
  speak() { // this(생성된 object)
    console.log(`${this.name}: hello!`);
  }
}

// 새로운 object를 만들 때는 new
const sera = new Person('sera', 20);
console.log(sera);
console.log(sera.name)
console.log(sera.age)
sera.speak(); // 함수 호출

// Getter, Setter
// 방어적으로 class를 만들 수 있음
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  // 값을 return
  get age() {
    return this._age;
  }
  // 값을 설정, 따라서 value를 받아와야함
  set age(value) {
    // if (value < 0) {
    //     throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
    // User의 filed에는 firstName, lastName, _age가 있음.
  }
}

const user1 = new User('Sera', 'Song', -1);
console.log(user1.age);

// Static 함수
// = object, 들어오는 데이터에 상관없이 공통적으로 class에 쓸 수 있는 것이라면 static 함수로
// class 자체에 연결, object마다 할당(X)
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher); // class에 연결되어있음.
Article.printPublisher();

// 상속
// 한번 정의하고 공통적으로 사용되는 속성값을 재사용
// 여기만 수정하면 공통적으로 수정 가능
class Shape {
  // fields
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  // methods
  draw() {
    console.log(`drawing ${this.color} color of`);
  }
  getArea() {
    return this.width * this.height;
  }
}
// extends class를 이용해서 shape를 연장
// shape를 상속
class Rectangle extends Shape {}

// 다양성
// 필요한 함수만 재정의 가능 = overriding
class Triangle extends Shape {
  draw() {
    super.draw(); // 부모의 draw 함수 호출
    console.log('🔺');
  }
  getArea() {
    return (this.width * this.height) /2;
  }
  toString() {
    return `Triangle :color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// intanceOf
// 왼쪽에 있는 object가 오른쪽에 있는 class로 만들어진 instance인지 아닌지 확인
// true or false를 return
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape); // shape를 상속
console.log(triangle instanceof Object);
// 자바스크립트에서 만든 모든 object, class들은 Object를 상속한 것

// 따라서 어떤 object든지 공통적으로 존재하는 methods를 사용 가능
console.log(triangle.toString());


// 코딩애플
// ex) 게임 캐릭터
// 이렇게 비슷한 object를 만들 일이 많을 때 class를 사용
// class = object를 뽑는 기계
// const nunu = {
//   q: 'consume',
//   w: 'snowball'
// }

// const garen = {
//   q: 'strike',
//   w: 'courage'
// }

// => 상단과 같음
// 옛날 문법
// constructor
// this = 기계로부터 생성되는 object들
// function 기계(parameter, parameter2) { // this가 존재하므로 class의 역할
//   this.q = parameter; // 새로 생성되는 object에 {q:'consume'} 추가
//   this.w = parameter2;
// }

// const nunu = new 기계('consume'); // object 생성
// console.log(nunu);
// const garen = new 기계('strike');
// console.log(garen);

// = 상단과 같음
// class 이용
class Hero { // class이름 -> 영어 대문자로 시작
  constructor(parameter, parameter2) {
    this.q = parameter;
    this.w = parameter2;
  }
}
const nunu = new Hero('consume', 'snowball');
const garen = new Hero('strike', 'courage');
console.log(nunu);
console.log(garen);