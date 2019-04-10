'use strict';
  //let elem = document.getElementsByTagName('img')[0];
  //elem.classList.toggle("slide");
let slideShow = 1;
display(slideShow);

function buttons(n) {
  display(slideShow += n);
}

function actifId(n) {
  display(slideShow = n);
}

function display(n) {

  let imgSlide = document.getElementsByClassName("slide");
  let id = document.getElementsByClassName("demo");
  /*console.log(n);*/
    (n > imgSlide.length) ? slideShow = 1 : null;
    n < 1 ? slideShow = imgSlide.length : null;
    /*console.log(slideShow.length);*/
    for (let i = 0; i < imgSlide.length; i++) {
      // To replace visible hidden
      imgSlide[i].style.opacity = "0";
      /*console.log(imgSlide[i]);*/
    }

    for (let i = 0; i < id.length; i++) {

      id[i].className = id[i].className.replace(" numbers", "");
    }
  //  To replace visible true
  imgSlide[slideShow-1].style.opacity = "1";

  id[slideShow-1].className += " numbers";
}



