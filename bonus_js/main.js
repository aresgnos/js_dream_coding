// number, string, boolean, null, undefined
let number = 2;
let numser2 = number;
console.log(number);
console.log(numser2);

number2 = 3;
console.log(number2);

// Object
let obj = {
  name: "sera",
  age: 5,
};
console.log(obj.name);

let obj2 = obj;
console.log(obj2);
console.log(obj2.name);

obj.name = "ellie";
console.log("---------");
console.log(obj.name);
console.log(obj2.name);

// const로 선언했지만 가능
// object는 reference로 공간이 할당되기 때문
const obj3 = {
  name: "해은",
  age: 5,
};
obj3.name = "현규";
console.log(obj3.name);

// function
const num = 1;
const num2 = 2;
const result = num + num2;
console.log(result);

// 함수 선언
function add(a, b) {
  return a + b;
}

// 함수 호출
const sum = add(2, 3);
console.log("sum", sum);
// 상단과 동일
const doAdd = add;
const result2 = doAdd(3, 4);
console.log(result2);

// 인자가 없는 함수
function print() {
  console.log("print");
}
print(555); // 인자가 없기 때문에 인자를 전달해도 받지 않음

console.clear();

function divide(a, b) {
  return a / b;
}

// function surprise(operator) {
//     const result3 = operator(2, 3); // add(2, 3)과 같음
//     console.log(result3);
// }
// surprise(add);

function surprise(operator) {
  const result3 = operator(2, 3); // divide(2, 3)과 같음
  console.log(result3);
}
surprise(divide);

// boolean
// false : 0, -0, ' ', null, undefined
// true : -1, '문자', []
let abc = 9; // 값을 할당하지 않으면 => undefined

if (abc) {
  console.log("true!");
}
// 상단과 동일
// && = 앞이 true여야 뒤가 실행
// => abc에 값이 할당되어야 뒤가 실행된다.
abc && console.log(abc);

// class
class Counter {
    // 생성자(Constructor)
    // class안의 변수값을 초기화해준다. = 값을 '처음'으로 할당
    constructor(runEvery5Times) {
        this.counter = 0;
        this.callback = runEvery5Times;
    }

    // methods
    // class에서 함수를 선언할 때는 function을 적지 않아도 된다.
    increase() { // increase(runIf5times)
        this.counter++; // 1씩 증가
        console.log(this.counter);
        if(this.counter % 5 === 0) { // 5의 배수에 알림
            // console.log('yo!'); // 밖에서 수정 불가능
            // runIf5Times(this.counter);
            // this.callback(this.counter);
            // callback은 printSomething을 가르킨다.

            // 하단을 간단하게
            this.callback && this.callback(this.counter); // callback이 undefined이 아니면
            // if(this.callback) { // callback이 있으면 실행
            //     this.callback(this.counter);
            // }
        }
    }
}
// 수정 가능
function printSomething(c) {
    console.log(`yo! ${c}`);
    console.log(c);
}
function alertNum(c) {
    alert(`Wow! ${c}`);
}

// const coolCounter = new Counter();

const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);

// coolCounter.increase(printSomething);
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();

// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase(alertNum);
