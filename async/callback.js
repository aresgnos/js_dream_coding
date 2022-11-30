"use strict";

// 자바스크립트는 동기적이다.
// 호이스팅이 된 이후로는 작성한 코드가 하나하나씩 순차적으로 실행된다.
// hoisting : var 변수와 함수 선언들을 가장 위로 끌어올려 처리

console.log("1");
// 비동기적 실행
// setTimeout(function() {
//     console.log('2');
// }, 1000); // 1000ms = 1초 뒤에 실행

// 상단을 화살표 함수로
setTimeout(() => {
  console.log("2");
}, 1000);
console.log("3");

// 동기적 callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

// 비동기적 callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

// callback 지옥
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "sera" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "sera") {
        onSuccess({ name: "sera", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
