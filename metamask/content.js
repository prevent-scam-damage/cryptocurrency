// 모든 엘리먼트의 클래스를 가져오는 예제
const elements = document.querySelectorAll("*");
let classes = [];

elements.forEach((element) => {
  if (element.classList.length > 0) {
    classes = classes.concat([...element.classList]);
  }
});

console.log(classes);
