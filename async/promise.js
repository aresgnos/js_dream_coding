"use strict";

// Producer : promise 만들기
// promise는 class
const promise = new Promise((resolve, reject) => {
  console.log("doing something...");
  setTimeout(() => {
    // resolve : 성공적으로 수행했을 때
    resolve("sera"); // 성공했을 때
    // reject(new Error("no network")); // 수행중 문제가 생겼을 때
  }, 2000);
});

// Consumer : 만든 promise를 이용
// then, catch, finally로 값을 받아옴
promise
  .then((value) => {
    // 성공했을 때를 다루는 함수
    // promise라는 변수가 잘 수행되면 value(parameter='sera')를 받아온다.
    console.log(value);
  })
  .catch((error) => {
    // 에러를 다루는 함수
    console.log(error);
  })
  .finally(() => {
    // 성공, 실패 상관없이 무조건 마지막에 호출되는 함수
    // 성공, 실패 상관없이 어떤 기능을 수행하고 싶을 때 사용
    console.log("finally");
  });

// Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  // 서버 통신
  setTimeout(() => resolve(1), 1000); // 성공하면 숫자 1 전달
});

fetchNumber // 비동기적인 것들을 묶어서 처리 가능
  .then((num) => num * 2) // then은 값을 전달해도 되고
  .then((num) => num * 3)
  .then((num) => {
    // then은 또다른 비동기함수도 전달 가능
    // 새로운 promise 전달
    return new Promise((resolve, reject) => {
      // 서버 통신
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// Error
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐔"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 🥚`), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

// getHen()
//   .then((hen) => getEgg(hen))
//   .then((egg) => cook(egg))
//   .then((meal) => console.log(meal));

// 한가지만 받아서 그대로 전달하는 경우 생략 가능
// 상단과 같음
// getHen() //
//   .then(getEgg)
//   .catch((error) => {
//     return "🍕";
//   })
//   .then(cook)
//   .catch(console.log)
//   .then(console.log);
