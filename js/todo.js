const toDoForm = document.querySelector(".js-toDo"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDo";

let toDos = [];
/**빈 어레이 만들어서 사용하기
 */
function deleteToDo(event) {
  event.preventDefault();
  const target = event.target.parentNode;
  toDoList.removeChild(target);
  const filteredToDo = toDos.filter(function (toDo) {
    return (
      toDo.id !== parseInt(target.id)
    ); /** parseInt 는 스트링을 스트링이 아니게 바꿔준다. 처음에 둘이 같은 형식이 아니라서 인식을 못해서 오류가 났었다.*/
  });
  toDos = filteredToDo; /** toDos=filteredToDo라고 바뀌니까 toDos는 const가 아니라 let이어야한다.*/
  localStorage.setItem(
    TODO_LS,
    JSON.stringify(filteredToDo)
  ); /** 오브젝트를 텍스트로 바꾸는 함수 JSON0.stringfy 왜바꾸나면 로컬스토리지는 
    텍스트만 저장할 수 있기 때문이다. 오브젝트는 저장할 수 없다.*/
}

/*니꼬는 function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
  saveToDos함수를 따로 만들었다.
  */

function paintToDo(text) {
  const li = document.createElement(
      "li"
    ) /** 자바에서 element를 만들어주는 함수*/,
    span = document.createElement("span"),
    btn = document.createElement("button");
  const newId = toDos.length + 1;
  btn.addEventListener("click", deleteToDo);
  btn.innerText = "✖"; /**이모티콘 -> 윈도우 + "." */
  const toDoObj = {
    text: text,
    id: newId,
  };
  li.appendChild(btn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  toDos.push(toDoObj); /**어레이 안에 오브젝트 넣어준다. */
  span.innerText = text;
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  toDoInput.value = "";
  paintToDo(currentValue);
  localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function loadToDo() {
  const currentToDo = localStorage.getItem(TODO_LS);
  if (currentToDo !== null) {
    const parsedToDo = JSON.parse(currentToDo);
    parsedToDo.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}
/** forEach 랑 filter 함수는 각각에 적용된다. 안에 함수를 따로 만들어줘야한다.
 * parsedToDo.forEach(function(toDo) {
      paintToDo(toDo.text); 이것처럼
*/
function init() {
  loadToDo();
  toDoForm.addEventListener("submit", handleSubmit);
}
/**addEventListener쓸 때 처음 event에는 "" 쓰고 뒤에 함수에는 ""를 안쓴다. */
init();

// const toDoForm = document.querySelector(".js-toDoForm"),
//   toDoInput = toDoForm.querySelector("input"),
//   toDoList = document.querySelector(".js-toDoList");

// const TODOS_LS = "toDos";

// let toDos = [];

// function deleteToDo(event) {
//   const btn = event.target;
//   const li = btn.parentNode;
//   toDoList.removeChild(li);
//   const cleanToDos = toDos.filter(function(toDo) {
//     return toDo.id !== parseInt(li.id);
//   });
//   toDos = cleanToDos;
//   saveToDos();
// }

// function saveToDos() {
//   localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
// }

// function paintToDo(text) {
//   const li = document.createElement("li");
//   const delBtn = document.createElement("button");
//   const span = document.createElement("span");
//   const newId = toDos.length + 1;
//   delBtn.innerText = "❌";
//   delBtn.addEventListener("click", deleteToDo);
//   span.innerText = text;
//   li.appendChild(delBtn);
//   li.appendChild(span);
//   li.id = newId;
//   toDoList.appendChild(li);
//   const toDoObj = {
//     text: text,
//     id: newId
//   };
//   toDos.push(toDoObj);
//   saveToDos();
// }

// function handleSubmit(event) {
//   event.preventDefault();
//   const currentValue = toDoInput.value;
//   paintToDo(currentValue);
//   toDoInput.value = "";
// }

// function loadToDos() {
//   const loadedToDos = localStorage.getItem(TODOS_LS);
//   if (loadedToDos !== null) {
//     const parsedToDos = JSON.parse(loadedToDos);
//     parsedToDos.forEach(function(toDo) {
//       paintToDo(toDo.text);
//     });
//   }
// }

// function init() {
//   loadToDos();
//   toDoForm.addEventListener("submit", handleSubmit);
// }

// init();
