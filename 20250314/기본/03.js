const p1 = { name: 'john', age: 20 };
p1.age = 22;
console.log(p1);

p1 = { name: 'Lee', age: 25 };

// 결과
// { name: 'john', age: 22 }
// 5행 TypeError: Assignment to constant variable.
