// function
function printHello() {
  console.log("Hello");
}
printHello(); // Hello만 출력 가능

function log(message) {
  // parameter로 전달
  console.log(message);
}
log("Hello"); // 원하는 메세지 입력 가능

// object parameters : reference가 저장
// reference로 저장되므로 함수 안에서 변경된 사항이 그대로 메모리에 적용,
// => 변경된 사항에 대해서 알 수 있다.
function changeName(obj) {
  // object의 이름을 coder로 변경하는 함수
  obj.name = "coder";
}
const sera = { name: "sera" }; // object가 reference로 저장
changeName(sera);
console.log(sera);

// Default parameters
// parameter를 전달하지 않을 때 대체될 것을 지정할 수 있음.
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");

// Rest parameters
// (...something) => 배열의 형태로 parameter 전달
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  for (const arg of args) {
    // args에 있는 모든 것을 출력
    console.log(arg);
  }
  args.forEach((arg) => console.log(arg)); // 상단과 같다.
}
printAll("dream", "coding", "sera");

// Local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
// { } 블럭 안에서 변수를 선언하면 = 지역변수 = 내부에서만 접근이 가능
let globalMessage = "global"; // 전역 변수
function printMessage() {
  let message = "hello";
  console.log(message); // 지역 변수
  console.log(globalMessage);
  function printAnother() {
    // 함수 안에 다른 함수 선언 가능
    console.log(message);
    let chiledMessage = "hello";
  }
  // console.log(chiledMessage); 부모(상위) 부분에서는 자식(하위) 부분을 볼 수 없다.
}
printMessage();
// console.log(message); 지역 변수이므로 밖에서 호출 불가능

// return
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 빠른 return, 빠른 종료
// bad
function upgradeUser(user) {
  if (user.point > 10) {
  }
} // if와 else를 번갈아 쓰는 것보다는

// good, 빨리 return
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
}

// 1. Function expression
// 함수에 이름이 없음 = anonymous function
const print = function() {  // function을 선언함과 동시에 print라는 변수에 할당
    console.log('print');
};
print();
const printAgain = print; // 다른 변수에 또 할당 가능(재사용가능)
printAgain();
const sumAgain = sum; // 위에 있는 함수 재사용
console.log(sumAgain(1,3));

// 2. Callback 함수
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
const printYes = function () {
    console.log('yes!');
};

const printNo = function print() {
    console.log('no!');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// 함수를 간결하게 만들어줌, 함수 이름은 없음
// const simplePrint = function() {
//     console.log('simplePrint');
// };
// => 상단 함수를 화살표 함수로
const simplePrint = () => console.log('simplePrint');

// const add = function(a, b) {
//     return a + b;
// }
// 상단 함수를 화살표 함수로
const add = (a, b) => a + b;

const simpleMultiply = (a, b) => {
    // 조금 더 다양한 일을 하기 위해 블럭이 필요하다면
    // 블럭을 쓰려면 return 해줘야한다.
    return a * b;
};

// IIFE : 함수를 선언함과 동시에 호출
// function hello() {
//     console.log('IIFE');
// }
// hello();

// 상단을 IIFE로
(function hello() {
    console.log('IIFE');
})();

// Q. function calculate(command, a, b)
// command : add, substract, divide, multiply, remainder
// 정해진 데이터를 처리할 때는 if문 보다는 switch가 낫다.
// const calculate = {
//     add : function (a, b) {
//         console.log(a + b);
//     }
// };
// calculate.add(1,2);

// 정답!!
function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unknown command');
  }
}
console.log(calculate('add', 2, 3))