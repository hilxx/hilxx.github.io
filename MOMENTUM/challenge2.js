//#3.7부터 css도 적용하므로 challenge2로 링크 걸기
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass = "clicked";
    // h1.className = "active";
    //  if(h1.className === clickedClass){}
    if(h1.className.contain(clickedClass) === clickedClass) {
        // h1.className = "";
        h1.classList.remove(clickedClass);
    } else{
        // h1.className = clickedClass;
        h1.classList.add(clickedClass);
    }
    console.log(h1.className);
}

h1.addEventListener("click", handleTitleClick);