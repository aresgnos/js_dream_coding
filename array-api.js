"use strict";

// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join("|"); // '구분자'
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = fruits.split(","); // 구분자를 전달해야함.
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5); // 삭제된 결과를 return함.
  console.log(result); // [3, 4, 5]
  console.log(array); // [1, 2, 3, 4, 5]
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  // const result = students.find(function(item, index) {
  //     // console.log(item, index);
  //     return item.score === 90;
  // });

  const result = students.find((item) => item.score === 90);
  console.log(result); // 처음으로 callback함수가 true인 것을 return
}

// Q6. make an array of enrolled students
{
  // const result = students.filter(function(item, index) {
  //     return item.enrolled === true;
  // })
  // 상단을 간단하게 (화살표 함수 사용)
  const result = students.filter((item) => item.enrolled === true);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((item) => item.score);
  // 점수 두배
  // const result = students.map((item) => item.score * 2);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((item) => item.score < 50);
  console.log(result);

  // const result2 = students.every((item) => item.score < 50);
  // console.log(result2);
}

// Q9. compute students' average score
{
  // prev = 이전에 callback함수에서 return된 값
  // curr = 배열의 item을 순차적으로 전달받음
  // const result = students.reduce((prev, curr) => {
  //     console.log('-----------');
  //     console.log(prev);
  //     console.log(curr);
  //     return prev + curr.score; // return한 값들이 순차적으로 prev에 전달
  // }, 0);

  // 상단과 같음
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result);

  // 평균값
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  // const result = students.map((item) => item.score);
  // console.log(result);
  // const result2 = result.join(',');
  // console.log(result2);

  // 상단과 같음
  const result = students //
    .map((item) => item.score)
    // .filter((score) => score >= 50) // 50점보다 같거나 크면
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students //
    .map((item) => item.score)
    .sort((a, b) => a - b) // 작은순으로 정렬
    // .sort((a, b) => b - a) // 큰순으로 정렬
    .join();
  console.log(result);
}

{
  const number = [1, 2, 3, 4, 5];
  const result = number.shift();
  console.log(number);
}

{
  const number = [1, 2, 3, 4, 5];
  const result = number.unshift(2);
  console.log(number);
}

// reduce
{
// 배열의 모든 수 합치기
const arr = [1, 2, 3, 4, 5];

// for, for of, forEach 사용
// let result = 0; // 초기화
// arr.forEach((num) => {
//   // result = result + num;
//   result += num;
// });

// reduce 사용
const result = arr.reduce((prev, cur) => {
  return prev + cur;
}, 0);

console.log(result);
}

// reduce 사용-2
{
  const userList = [
    { name: "민지", age: 11 },
    { name: "유리", age: 19 },
    { name: "혜진", age: 20 },
    { name: "주희", age: 30 },
    { name: "정민", age: 40 },
  ];

  // 나이가 19살보다 많은 사람의 배열
  const result = userList.reduce((prev, cur) => {
    if(cur.age > 19) {
      prev.push(cur.name);
    }
    return prev;
  }, []);
  console.log(result);

  const result2 = userList.reduce((prev, cur) => {
    // return prev = prev + cur.age;
    return prev += cur.age;
  }, 0);
  console.log(result2);

}
