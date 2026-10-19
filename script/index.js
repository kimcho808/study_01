//index.js
//자바스크립트로 버튼 색상 바꾸기
const btnG = document.querySelectorAll ('.button_g button');
console.log(btnG);

for(let i of btnG){
    i.addEventListener('click',()=>{
        for(let i of btnG){
            i.classList.remove('active');
        }
        i.classList.add('active');
    });
}