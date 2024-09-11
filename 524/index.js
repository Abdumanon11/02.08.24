/* let inp = document.querySelector(`input`)
let btn = document.quer *//* ySelector(`button`)




btn.onclick = () => {
  if( inp.getAttribute(`type`) === "text"){
    inp.setAttribute(`type` , `password`)
    btn.innerHTML = "🙈" 
  }else{
    inp.setAttribute(`type` , `text`)
    btn.innerHTML= "🙊"
  }
}



let img = document.querySelector(`first`)
let img2 =document.querySelector(`second`)

img2.onclick = () => {
  if (img.getAttribute('second') === "first"){
    img
  }
}

 
*/const tabItems = document.querySelectorAll('.tabheader__item');
const tabContents = document.querySelectorAll('.tabcontent');

tabItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    tabContents.forEach((content) => {
      content.style.display = 'none';
    });
    tabContents[index].style.display = 'block';
  });
});






