let num1 = 10;
let num2 = 5;
let str1 = 'hello';
let str2 = 'world';
let bool1 = true;
let bool2 = false;

console.log("Test 1: Is num1 > num2? I predict true.");
console.log(num1 > num2);

console.log("Test 2: Is num1 === num2? I predict false.");
console.log(num1 === num2);

console.log("Test 3: Is str1 + str2 === 'helloworld'? I predict true.");
console.log(str1 + str2 === 'helloworld');

console.log("Test 4: Is str1 === str2? I predict false.");
console.log(str1 === str2);

console.log("Test 5: Is bool1 !== bool2? I predict true.");
console.log(!bool1);

console.log("Test 6: Is num1 < num2 || bool1 === bool2? I predict false.");
console.log(num1 < num2 || !bool2);

console.log("Test 7: Is num1 * num2 >= 50 && bool1 === true? I predict true.");
console.log(num1 * num2 >= 50 && !bool1);

console.log("Test 8: Is bool1 && bool2 || num1 > num2? I predict true.");
console.log(bool1 && bool2 || num1 > num2);

console.log("Test 9: Is typeof str1 === 'string'? I predict true.");
console.log(typeof str1 === 'string');

console.log("Test 10: Is typeof num1 === 'string'? I predict false.");
console.log(typeof num1 === 'string');
