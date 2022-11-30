// 함수 선언
// 함수 표현식보다는 선언문이 더 자유롭다.
function doSomething(add) {
    console.log(add);
    const result = add(1, 2);
    console.log(result);
}

function add(a, b) {
    const sum = a + b;
    return sum;
}

// 함수 호출
// doSomething(add);

// add = 함수 자체
const addFun = add;
console.log(add);
addFun(1, 2);

// 함수 선언문 : 어디서든 호출 가능
// sayHello(); 여기서도 호출 가능(호이스팅)
function sayHello() {
    console.log('Hello');
}
sayHello();

// 상단과 동일
// 함수 표현식
// const sayHello = function() {
//     console.log('Hello');
// }
// 여기서만 호출 가능
// sayHello();

// 함수 선언문
// showError();
// function showError() {
//     console.log('error');
// }

// 함수 표현식
// const showError = function() {
//     console.log('error');
// }
// showError();
// => 화살표 함수로
const showError = () => {
    console.log('error');
}
showError();

const sayHi = function (name) {
    const msg = `Hi, ${name}`;
    console.log(msg);
}
sayHi('sera');
// => 화살표 함수로
// const sayHi = (name) => {
//     const msg = `Hi, ${name}`;
//     console.log(msg);
// }
// sayHi(sera);

// 함수 표현식
// const minus = function(num1, num2) {
//     const result = num1 - num2;
//     return result;
// }
// => 화살표 함수
const minus = (num1, num2) => {
    const result = num1 - num2;
    console.log(result);
    // return result;
}
minus(20, 10);


