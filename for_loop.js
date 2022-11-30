// 반복문

// for문
// for(let i = 0; i < 10; i++) {
//     console.log(i + 1);
// }

// 상단과 동일
// for(let i = 1; i < 11; i++) {
//     console.log(i);
// }

// 상단과 동일
// for(let i = 1; i <= 10; i++) {
//     console.log(i);
// }


// while
// let i = 0;
// while(i < 10) {
//   console.log(i);
//   i++;
// }

// while(true)는 무한 반복
// false여야 멈춤
while(true) {
    let answer = confirm('계속 할까요?');
    if(!answer) { // 특정 조건이 되었을 때 break 해주는 것이 중요
        break;
    }
}

// continue
// 짝수만
for(let i=0; i<10; i++) {
    if(i % 2) {
        continue; // continue는 false에 멈추고 다음 반복 진행
    }
    console.log(i); // console에 찍히는게 짝수
}