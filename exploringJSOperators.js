// Task 1
let x;
let y;

// Task 2
x = 10;
y = 15;

// Task 3
console.log("Sum:", x+y);
console.log("Difference:", x-y);
console.log("Product:", x*y);
console.log("Quotient:", x/y);

// Task 4
x += y;
console.log("Updated x:", x);
y -= 2;
console.log("Updated y:", y);
x *= y;
console.log("Updated x:", x);
x /= y;
console.log("Updated x:", x);

// Task 5
let equal = x == y;
let greater = x > y;
let not_equal = x != y;
console.log("Is x equal to y?", equal);
console.log("Is num1 greater than num2?", greater);
console.log("Is num1 not equal to num2?", not_equal);

// Task 6
let isPositive = x > 0 && y > 0;
let isEven = x % 2 == 0 || y % 2 == 0;
console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);