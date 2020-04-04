/* 기억해야 될 부분
처음에 시작할 때 init function 만들고 시작하기
처음에 const 만들어 줄때 위에것부터 천천히 만들기
new Date(), date.getHours(), date.getMinutes(),  date.getSeconds() 쓰는 방법 기억하기
텍스트 안에서 가정문 쓰는 방법 ?랑 : 를 사용하자!
예)clock_text.innerText = 
`${hours < 10 ? `0${hours}` : hours}:           ?이 ~라면 이란 뜻이고 :가 ~이 아니라면 이라는 뜻이다.
${minutes < 10 ? `0${minutes}` : minutes}:
${seconds < 10 ? `0${seconds}` : seconds}`

setInterval쓰는 법도 기억하기
setInterval(getTime, 1000);
시간단위는 밀리세컨드이다 1000밀리세컨드=1초
*/

const clock_container = document.querySelector(".js-clock"),
  clock_text = clock_container.querySelector("span");

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clock_text.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
