/* 
맨밑에 니코형꺼 코드 있음
 */

const name_container = document.querySelector(".js-username"),
  input = name_container.querySelector("input"),
  hello_box = document.querySelector(".js-hello");

const USER_LS = "userName";

const UNSHOWING = "unShowing";

const SHOWING = "showing";

function helloUser(text) {
  name_container.classList.add(UNSHOWING);
  hello_box.classList.add(SHOWING);
  hello_box.innerText = `Hello! ${text}`;
}
/**preventDefault쓰는법 알아두기 */
function handleSubmit(event) {
  event.preventDefault();
  name_container.classList.remove(SHOWING);
  const currentValue = input.value;
  localStorage.setItem(USER_LS, currentValue);
  helloUser(currentValue);
}

/* function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

니꼬는 여기서 localStorage.setItem를 직접 실행시키지말고 function saveName 이란 함수를 따로 만들어서 했다.

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
} */

function askForName() {
  name_container.classList.add(SHOWING);
  name_container.addEventListener("submit", handleSubmit);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    helloUser(currentUser);
  }
}
/**loadName에서 if가정문으로 시작하기 */

function init() {
  loadName();
}

init();

/*   Nicollas's Codes
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello! ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
*/
