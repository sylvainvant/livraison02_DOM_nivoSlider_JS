'use strict';
  //let elem = document.getElementsByTagName('img')[0];
  //elem.classList.toggle("slide");
let i = 0;
function nextSlide() {
  let elem = document.getElementsByTagName('img')[0];
if(i > elem.lenght){
    console.log("loop for");
    //elem.classList.toggle("slide");
     elem[i].style.display = "none";
i++;
    //elem.classList.toggle("img");
}


}

