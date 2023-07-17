//#3.7부터 css도 적용하므로 challenge2로 링크 걸기
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const clickedClass = "clicked";
    // 1. h1.className = "active";
    // 2. if(h1.className === clickedClass){}
    // 3. if(h1.className.contain(clickedClass) === clickedClass) {
    //     2,3.// h1.className = "";
    //     4. h1.classList.remove(clickedClass);
    // } else{
    //     2,3.// h1.className = clickedClass;
    //     4. h1.classList.add(clickedClass);
    // }
    // console.log(h1.className);

    //5. h1.classList.toggle(clickedClass);
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);