const a = 5;
const b = 2;
let myName = "hilee";
//pyson에서는 myName = "hilee" 이렇게만 쓰면 됨
//const 상수: 바꿀 수 없는 값
//let 바꿀 수 있는 값
//대부분 const를 기본적으로 쓰고, variable의 몇몇 중요한 부분은 let으로 만듦

//변수 재선언 재할당
//let   x       o
//const x       x
//var   o       o

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "hilxx";
console.log("your new name is " + myName);