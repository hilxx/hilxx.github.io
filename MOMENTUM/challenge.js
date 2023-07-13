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

//challenge3
function sayHello(nameOfPerson, age){ //()안()=인수)에 데이터 값 넣기
    //sayHello를 실행할 때마다 나타남
    // console.log("Hello! my name is A"); 
    //argument(인수)는 function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법
    console.log("Hello my name is " + nameOfPerson + "and i am " + age);
}

//console.log("alalalal")에서 하는 방식과 동일하게 데이터를 보낼 수 있음
sayHello("nico", 30); //A를 nico로 바꾸기
sayHello("dal", 27);
sayHello("lynn", 22);

function plus(firstNumber, secondNumber) {
    //function 괄호 안의 매개변수에서 argument를 받을 수 있다. (여러개 받을 수 있음)
    console.log(firstNumber + secondNumber);
}
// console.log(firstNumber); => error / firstNumber는 function plus 안에서만 존재하기 때문
function divide(a,b){
    console.log(a/b);
}
plus(8, 60);
divide(98, 20);

const player2 = {
    name: "hilxx",
    sayHello: function(otherPersonsName){
        console.log("hello! " + otherPersonsName + ", nice to meet you");
    },
};

console.log(player2.name);
player2.sayHello("lynn");

//calculate 만들기
const calculator = {
    add: function (a, b) {
       return a+b;
    },
    minus: function(a, b){
        return a-b;
    },
    div: function(a, b){
        return a/b;
    },
    multi: function(a,b){
        return a*b;
    },
    power: function(a,b){
        return a**b;
    },
    last: function(a,b){
        return a%b;
        //return으로 변경시 console에 아무것도 뜨지 않을 것
    },
};

calculator.add(5,1);
calculator.minus(3,2);
calculator.div(4,7);
calculator.multi(5,2);
calculator.power(2,8);
calculator.last(90,4);

//2.11다시 듣기(0714_result)
const plusResult = calculator.add(5,1);
const minusResult = calculator.minus(plusResult, 10);
const divResult = calculator.div(10, minusResult);
const multiResult = calculator.multi(divResult, plusResult);
const powerResult = calculator.power(divResult, minusResult);

const age = 96; //1
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2; //3. 96 + 2 = 98
    //4. 98을 return함으로써, function을 호출하는 코드가 98이 됨.
}
//ageOfForeigner의 코드를 받고 싶음 => return
const krAge = calculateKrAge(age); //2. age=96
console.log(krAge);
//console.log를 지양하는 이유: console에 무언가를 log하는 것이기 때문 => 우리가 원하는 것은 데이터를 받아서 사용하거나 콘솔이 아닌 화면에 결과를 출력하고 싶어함 == return 쓰기
//return을 쓰는 이유: 함수를 통해 console.log 나 alert가 아니라 결과값을 받기 위해서
//return이 function이 function밖과 소통하는 방법

function calculateEnAge(ageOfNative){
    ageOfNative - 2;
    return "hello";
    //이렇게 되면 출력되는 값은 hello 이다
}
const enAge = calculateEnAge(age);
console.log(enAge);

//#3.0 The Document Object

const title = document.getElementById("title");
// console.dir(title);
title.innerText = "Got you!"
console.log(title.id); //title 출력
console.log(title.className); //비어있음 -> why? javascript로 추가했기 때문
