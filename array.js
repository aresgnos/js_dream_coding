'use strct';

// Array

// 배열 선언 방법
const arr1 = new Array(); // new
const arr2 = [1, 2]; // []로

// index 활용 => []로 접근
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits.length - 1); // 배열의 마지막 데이터에 접근

// 배열의 전체 데이터를 출력
// for 사용
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// for of 사용
for(let fruit of fruits) {
    console.log(fruit);
}
// forEach
// 배열 안에 들어있는 value들마다 내가 전달한 함수를 출력

// fruits.forEach(function(fruit, index, array) {
//     console.log(fruit, index);
// });
// => 상단과 같음
// 이름이 없는 함수는 화살표 함수로
fruits.forEach((fruit) => console.log(fruit));

// 배열에 추가, 삭제, 복사

// 제일 뒤에 추가 (push)
fruits.push('🥝', '🍉');
console.log(fruits);
// 제일 뒤를 삭제 (pop)
fruits.pop();
// 한번 더 호출하면 하나 더 삭제
console.log(fruits);

// 제일 앞에서부터 추가 (unshift)
fruits.unshift('🍍', '🍒');
console.log(fruits);
// 제일 앞에서부터 삭제 (shift)
fruits.shift();
console.log(fruits);

// ** shift, unshift는 pop과 push에 비해 느리다. (데이터 전체가 움직여야하므로)
// 따라서 pop과 push 사용 권장

// 지정된 위치에서 item 삭제 (splice)
// 몇개를 지울건지 지정하지 않으면 지정한 위치부터 모두 지워버린다.
fruits.push('🍅');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '🍋', '🍇'); // 지우고, 지정된 자리에 추가
console.log(fruits);

// 두가지의 배열을 묶어서 만들 수 있다. (concat)
const food = ['🍕','🍔'];
const newFruits = fruits.concat(food);
console.log(newFruits);

// 검색
// index를 찾을 때 (indexof)
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍅'));
// 해당 값이 있는지 없는지 (includes)
console.log(fruits.includes('😊')); // 해당 값이 있는지 없는지

// lastIndexOf
console.clear();
fruits.push('🍅');
console.log(fruits);
console.log(fruits.indexOf('🍅')); // 첫번째로 해당하는 값 리턴
console.log(fruits.lastIndexOf('🍅')); // 마지막에 해당하는 값 리턴

