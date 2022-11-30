'use strict';

const foods = ['🍕', '🍔'];
console.log(foods);

foods.forEach(function(food, index, array) {
    console.log(food, index);
});

foods.push('🍟');
console.log(foods);
foods.pop();
console.log(foods);

const face = ['😀', '😂'];
const newFoods = foods.concat(face);
console.log(newFoods);

newFoods.reverse();
console.log(newFoods);

newFoods.push('🤣');
console.log(newFoods);

newFoods.slice(1,3);
console.log(newFoods);

newFoods.splice(1,1);
console.log(newFoods);

newFoods.unshift('😍');
console.log(newFoods);

console.log(newFoods.indexOf('🍔'));

console.clear();

console.log(newFoods);
newFoods.push('🍕');
console.log(newFoods);
console.log(newFoods.indexOf('🍕'));
console.log(newFoods.lastIndexOf('🍕'));

newFoods.forEach(function(food, index, array) {
    console.log(food, index);
})

const result = newFoods.includes('🍔');
console.log(result);
