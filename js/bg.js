/**니꼬꺼 밑에 잇음
 * Math.floor(Math.random() * 6); 랜덤 숫자 만드는 수학 함수
 */

const background = document.querySelector("body");

function backGround() {
  const rndNum = Math.floor(Math.random() * 5);
  const image = new Image(); /**new Date처럼 new Image는 이미지 하나 const로 만들어준다. */
  image.src = `images/${rndNum +
    1}.jpg`; /**img.src 는 이렇게 사용한다. jpg붙여줘야한다.  */
  image.classList.add("bgStyle");
  image.addEventListener("load", function(event) {
    background.appendChild(image);
  });

  /**이미지는 색깔이 아니니까 이렇게 넣어준다.
   */
}

function init() {
  backGround();
}

init();

/*const body = document.querySelector("body");

const IMG_NUMBER = 4;

function paintImage(imgNUMBER) {
  const image = new Image();
  image.src = `images/${imgNUMBER + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();*/
