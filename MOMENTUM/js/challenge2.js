const loginForm = document.querySelector("#login-form");
// const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

function onLoinSubmit(tomato){
    tomato.preventDefault();
    // console.log("hello" ,loginInput.value);
    // console.log("click!!!");

    const username = loginInput.value;
    console.log(username);
    // if(username === ""){
    //     alert("Please write your name");
    // } else if(username.length >15){
    //     alert("Your name is too long.");
    // }
    // => html에서 required maxlength="15" 이렇게 쓸 수 있음
}

loginForm.addEventListener("submit", onLoinSubmit);
// tomato.preventDefault(); 이걸로 submit되지 않음

// onLoinSubmit({information})

//https://codesandbox.io/s/frosty-austin-7vrk2d
//codesandbox.io