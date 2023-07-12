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

//boolean
const amIFat = false; //true, false, null => 데이터 타입
let something; //undefined; => 데이터 타입
//null은 값이 없다는 뜻(컴퓨터에 값이 없음을 의도적으로 알리기 위해 채워진 값)
//undefined는 값은 있지만 아직 정의되지 않음
console.log(amIFat);
console.log(something);

//array
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

//Get Item from Array
console.log(daysOfWeek);

//Add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);

//object: property를 가진 데이터를 저장함
const player = { //중괄호
    //property(특성) 작성
    name: "hilxx",
    points: 10,
    beautiful: true,
    fat: false
};
console.log(player);
console.log(player.fat);
player.fat = true; //object 내용물은 const여도 수정 가능
//player = false => 전체를 하나의 값으로 바꾸려고 할 때 오류가 남
console.log(player["name"]);
player.lastName = "potato"; //property 추가 가능
player.points = player.points + 15;
console.log(player);