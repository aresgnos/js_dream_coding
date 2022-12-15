function makeFunc() {
  var name = "Sera";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
// myFunc 변수에 displayName을 리턴함

myFunc();
// 리턴된 displayName 함수를 실행(name 변수에 접근)

function makeAdder(x) {
  var y = 1;
  return function (z) {
    y = 100;
    return x + y + z;
  };
}

var add5 = makeAdder(5);

console.log(add5(2));
console.log(add5(3));

// 변수
let age = 30;
function showAge() {
  console.log("age", age);
  // let age = 20; => error
}
showAge();

let name;
name = 'Mike';

var age2;
age2 = 30;

// const는 선언하면서 바로 할당을 해줘야함.
const gender = 'male';