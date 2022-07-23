const x = new Date('2022-07-19');
const y = new Date('2022-07-19');
const z = new Date();
const d = new Date().toISOString().split('T')[0];
const n = new Date(d);

// less than, greater than is fine:
console.log(x, y, z, n)
console.log('x < y', x < y); // false
console.log('x > y', x > y); // false
console.log('x <= y', x <= y); // true
console.log('x >= y', x >= y); // true
console.log()
console.log('x < z', x < z); // true
console.log('y > z', y > z); // false
console.log('x <= z', x <= z); // true
console.log('y >= z', y >= z); // false
console.log()
console.log('x < n', x < n); // true
console.log('y > n', y > n); // false
console.log('x <= n', x <= n); // true
console.log('y >= n', y >= n); // false

// anything involving '==' or '===' should use the '+' prefix
// it will then compare the dates' millisecond values

console.log('+x === +y', +x === +y); // true