function getTime(){
//1. 크리스마스 날짜를 얻기 위한 코드 (GMT+0900 - 한국 표준시)
const xmasDay = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);
//2. 현재 시간 생성
const now = new Date();
//3. 현재 시간 - 크리스마스 = 남은 날짜
const difference = new Date(xmasDay - now);

//4. 남은 날짜 1초 단위로 나타내기
const secondsInMs = Math.floor(difference / 1000);
const minutesInMs = Math.floor(secondsInMs / 60);
const hoursInMs = Math.floor(minutesInMs / 60);
const days = Math.floor(hoursInMs / 24);

//5. 화면에 출력될 값을 가지고 있는 변수 - 모듈러(%) 연산 사용
const seconds = secondsInMs % 60;
const minutes = minutesInMs % 60;
const hours = hoursInMs % 24;

//6. 1의 단위를 01,02 .. 이런 식으로 나타내기 위한 코드 _ 삼항연산자 사용
const daysStr = `${days < 10 ? `0${days}` : days}d`;
const hoursStr = `${hours < 10 ? `0${hours}` : hours}d`;
const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}d`;
const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}d`;

const dDay = document.querySelector("#x-masDate");
dDay.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
}
getTime();
setInterval(getTime, 1000);