//1. 변수 설정
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); //toDoForm 안에 있는 input 선택
//= const toDoInput = documnet.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

//6-1.
const TODOS_KEY ="todos";

//5. toDos의 array설정
let toDos = []; //newTodo를 할 때마다 그 텍스트를 toDos의 array에 push하고 싶음

//5-2.
function saveToDos(){
    //toDos array의 내용을 localStorage에 넣는 일을 함.
    // localStorage.setItem("todos", toDos);
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //stringify = 값을 저장하고 싶을 때 많이 사용
}

//4.
function deleteToDo(event){
    //console.log(event.target); //target은 HTML의 element이다.
    //console.dir(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    //console.log(li.id);
    li.remove();
    //10-1. filter를 사용해서 delete값을 줄 것
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //우리가 클릭한 li.id와 다른 toDo는 남겨두고 싶다는 뜻
    //toDos DB에서 todo를 지운 뒤에 savedToDos를 한 번 더 불러야함.
    saveToDos();
}

//3.
function paintToDo(newTodo){
    // console.log("i will paint", newTodo);
    const li = document.createElement("li");
    li.id = newTodo.id; //9-2.
    const span = document.createElement("span");
    span.innerText = newTodo.text; //9-2. .text추가
    const button = document.createElement("button");
    button.innerText ="x";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    // console.log(li);
    toDoList.appendChild(li);
}

//2. function 설정
function handleToDoSubmit(event){
    event.preventDefault();
    // console.log(toDoInput.value);
    const newTodo = toDoInput.value;
    //console.log(toDoInput.value);
    toDoInput.value = ""; //enter누를 때마다 input의 value 값이 비워짐
    //console.log(newTodo, toDoInput.value);
    //9.
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    //5-1. newTodo를 하기 전에 toDos array를 가져와서 newTodo를 push할 것
    toDos.push(newTodoObj);
    paintToDo(newTodo);
    saveToDos();
}
//2-1.
toDoForm.addEventListener("submit", handleToDoSubmit);

//8.
function sayHello(item){
    // console.log("hello");
    console.log("this is the turn of", item); //= if절의 내용에 이걸 추가하면 똑같음paresdToDos.forEach((item) => console.log("this is the turn of", item));
}

//6.
const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(saveToDos);

//7.
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    // console.log(paresdToDos);
    //paresdToDos.forEach(sayHello); //forEach는 array의 각 item에 대해 function을 실행하게 해줌.
    //paresdToDos.forEach((item) => console.log("this is the turn of", item)); => sayhello라는 function을 만들 필요 없이 짧게 쓸 수 있는 방법
    //9. 새로 추가할 때도 기존 + 새로운 것이 다 localStorage에 남도록!
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}