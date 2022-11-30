// object를 JSON으로
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

// 배열을 JSON으로
json = JSON.stringify(['apple', 'banana']);
console.log(json);

// object를 json으로
const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // 자바스크립트에만 자체로 들어있는 데이터라서 json에 포함되지 않는다.
    jump: () => {
        console.log(`${this.name} can jump!`);
    } // 함수는 json에 포함되지 않는다. 데이터가 아니기 때문.
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json); // 원하는 property만 골라서 json으로 변환 가능

// 조금 더 세밀하게 통제할 때 => callback 함수 사용
json = JSON.stringify(rabbit, (key, value) => { // 모든 key와 value들이 전달된다.
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value; // ellie로 변환
});
console.log(json);

// JSON을 object로
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());