// async

// function fetchUser() {
//     // 비동기적 함수
//   return new Promise((resolve, reject) => {
//     // 가져오는데 10초가 걸리는 백엔드가 있다고 가정
//     resolve("sera");
//   });
// }

// 상단과 동일
// async => 자동으로 함수안에 있는 코드들이 promise로 변환
async function fetchUser() {
  return "sera";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// await
// async가 붙은 함수 안에서만 사용 가능
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return "🍎";
}

async function getBanana() {
  // dealy가 끝날 때가지 기다렸다가 '🍌'를 return
  await delay(1000);
  return "🍌";
}
// 상단과 동일
// function getBanana() {
//     return delay(3000)
//     .then(() => '🍌');
// }

// function pickFruites() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }
// 상단과 동일
// async function pickFruites() {
//     const apple = await getApple();
//     const banana = await getBanana();
//     return `${apple} + ${banana}`;
// }
// 그런데, 이렇게 하면
// apple 기다리고 banana가 수행되므로
// promise를 만들어서 병렬적으로 수행이 되도록 한다
// =>
async function pickFruites() {
  // async를 붙이면 promise로 변환되며
  // promise는 만들자마자 실행된다.
  // 병렬적으로 동시에 실행 가능
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruites().then(console.log);

// Promise APIs
function pickAllFruits() {
  // Promise.all => promise 배열을 전달하면
  // 모든 promise들이 다 받아질 때까지 모아준다.
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ") // .join => 배열을 string으로
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    // 배열에 전달된 promise중 가장 먼저 값을 return하는 것을 전달받음
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);