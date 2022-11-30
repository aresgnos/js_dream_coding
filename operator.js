console.log("my" + "car"); // string 합치기
console.log("1" + 2); // '1'을 string으로 인식
console.log(`string literals: 1 + 2 = ${1 + 2}`); // 1+2가 계산돼서 3이 string으로
console.log("ellie's \nbook"); // 줄바꿈

let counter = 2;
const preIncrement = ++counter;
// 상단 코드와 같음
// counter = counter + 1;
// preIncrement = counter;
console.log(counter);
console.log(preIncrement);

let x = 3;
let y = 6;
x += y; // x = x + y; => 반복되는 x 생략 가능
x -= y;
x *= y;
x /= y;

console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// ** || (or), && (and), ! (not)
const value1 = false; // false
const value2 = 4 < 2; // false

// || (or), 하나라도 true면 true를 반환
// 여기서 value1이 true면 동작을 멈추기 때문에
// 가벼운 것을 앞에 배치하고 expression이나 함수는 가장 뒤에 배치한다.
// check()가 true이니 결국 true를 반환
console.log(`or: ${value1 || value2 || check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log("hi");
  }
  return true; // 결국 true 반환
}
// ! (not)
console.log(!value1); // false를 true로 바꿈

// Equality
const stringFive = "5";
const numberFive = 5;
console.log(typeof stringFive);
console.log(typeof numberFive);

// loose equality, with type conversion=타입을 변경해서 검사
console.log('stringFive == numberFive', stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// 되도록 strict equality를 사용 (===)
// no type conversion = 타입을 신경써서 검사
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const sera1 = { name: "sera" };
const sera2 = { name: "sera" };
const sera3 = sera1;
console.log(sera1 == sera2); // reference가 다르기 때문에 false
console.log(sera1 === sera2); // reference가 다르기 때문에 false
console.log(sera1 === sera3); // true

console.log(0 == false); // true, emtpy string으로 간주될 수 있다.
console.log(0 === false); // false, 0은 boolean이 아니다.
console.log("" == false); // false, empty 문자열 = false
console.log("" === false); // false, empty 문자열은 boolen이 아니다.
console.log(null == undefined); // true, null과 undefined은 특이하게 같은 것으로 간주된다.
console.log(null === undefined); // false, null과 undefined는 다른 타입이다.

// if, else if, else
const name = "df";
if (name === "sera") {
  console.log("Welcome, Sera!");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  // 위에 둘 다 false면 else
  console.log("unkwnon");
}

// ? => 이름이 sera니? true면 yes false면 no를 출력
console.log(name === "sera" ? "yes" : "no");

// switch statement
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!"); // 결과가 같은 것끼리는 묶을 수 있다.
    break;
  default:
    console.log("same all!");
    break;
}

// 반복문 while = i > 0이 false로 나오기전까지 반복
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--; // 1씩 감소
}

// 반복문 do while = { } 블럭을 먼저 실행하고, 조건이 맞는지 안 맞는지 검사
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// 조건문이 맞을 때만 { } 블럭을 실행하고 싶다면 => while
// { } 블럭을 먼저 실행하고 싶다면 => do while

// for loop => for(begin; condition; step)
// begin은 처음 한번만 호출, 조건 -> 진행 반복 (조건이 false가 될 때까지)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}
// let으로 지역변수 선언
// 반복문 내에서만 사용 가능, 반복문이 끝나면 사용할 수 없다.
for (let i = 3; i > 0; i = i - 2) {
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// break : 완전히 종료
// continue : 끝내고 다음 step으로

// Q1. 0-10까지 짝수만 print해라 (continue 사용)
for (let i=0; i<11; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(`Q1. ${i}`);
}

// Q2. 0-10까지 프린트 하되 8이 되면 그만
for (let i=0; i<11; i++) {
    if( i > 8 ) {
        break;
    }
    console.log(`Q2. ${i}`);
}