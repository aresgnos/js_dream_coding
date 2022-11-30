"use strict";


// 데이터 타입

let globalNmae = "global name"; // 글로벌하게 선언한 변수는 어디서든 사용 가능
{
  // variable = 변수 rw(read/write) 가능
  let name = "sera"; // 변수 정의
  console.log(name);
  name = "hello"; // 변수에 다른 값 넣어서 저장
  console.log(name);
  console.log(globalNmae);
}
// console.log(name); => 사용할 수 없음, {} 안에서 지정한 변수이기 때문에
console.log(globalNmae);

// const r(readd only), 왠만하면 const로 (바뀔게 없다면)
const daysInWeek = 7;
const maxNumber = 5;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
// template literals, ``과 ${}를 쓰면 string과 변수를 합칠 수 있다.
const helloBob = `hi ${brendan}!`;
console.log(111, brendan);
console.log(typeof brendan);
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
const canRead = true;
const test = 3 < 1; // = false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null; // null로 값이 할당됨.
console.log(`value: ${nothing}, type: ${typeof nothing}`);


// undefined, 아무 것도 값이 할당되어 있지 않은 상태
let x;
console.log(`value: ${x}, type:${typeof x}`);

// symbol, 고유한 식별자가 필요할 때
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
// 동일한 symbol로 지정했어도 다른 string
console.log(symbol1, typeof symbol1);
console.log(symbol2, typeof symbol2);
console.log(symbol1 === symbol2);


