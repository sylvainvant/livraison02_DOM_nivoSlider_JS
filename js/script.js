'use strict';
  //let elem = document.getElementsByTagName('img')[0];
  //elem.classList.toggle("slide");
  let slideShow = 1;
  let themeLight = true;
  var pathImg = [
  "./img/img1.jpeg",
  "./img/img2.jpeg",
  "./img/img3.jpeg",
  "./img/img4.jpeg"/*,
  "./img/img5.jpeg"*/
  ]
  CreateListLI();
  addEventControlBtn();


  function addEventControlBtn(){
    var listControlBtn = document.getElementsByClassName("controlBtn");
    for (var i = 0; i < listControlBtn.length; i++) {
      listControlBtn[i].addEventListener("click",controlBtn)
    }
  }

  function controlBtn(){
    var elementActive = document.getElementsByClassName("btn active");
    var id = parseInt(elementActive[0].dataset.id,10);
    var direction = parseInt(this.dataset.id,10);
    var count = id + direction;

    (count < 0)?count=pathImg.length-1:null;
    (count>pathImg.length-1)?count = 0:null;
    classControlActive(count);
  }

  function display() {
    var id = this.dataset.id;
    classControlActive(id);
  }

  function classControlActive(id){
    var listBtn = document.getElementsByClassName("btn");
    var listImg= document.getElementsByClassName("img");
    for (let i = 0; i < pathImg.length; i++) {
      if(i == id){
        listBtn[i].classList.add("active");
        listImg[i].classList.add("active");
      }
      else{
       listBtn[i].classList.remove("active");
       listImg[i].classList.remove("active");
     }
   }
 }


//Create HTML ELEMENTS
function CreateListLI(){
  var ulElement = document.getElementsByClassName("cadre");
  for (var i = 0; i < pathImg.length; i++) {
    var liElement = document.createElement("li");

    var imgLiElement = document.createElement("img");
    imgLiElement.src = pathImg[i];
    imgLiElement.classList.add("img");
    if(i==0){
      imgLiElement.classList.add("active");
    }
    liElement.append(imgLiElement)
    ulElement[0].append(liElement);
  }
  createListNav();
}
function createListNav(){
 var ulElement = document.getElementsByClassName("cadre-demo");
 for (var i = 0; i < pathImg.length; i++)
 {
  var liElement = document.createElement("li");
  var buttonLiElement = document.createElement("button");
  buttonLiElement.dataset.id = i;
  buttonLiElement.classList.add("btn");
  if(i==0){
    buttonLiElement.classList.add("active");
  }
  liElement.append(buttonLiElement)
  ulElement[0].append(liElement);
  buttonLiElement.addEventListener("click",display);
}
}





// add event click icon theme
theme.addEventListener("click",function() {
  themeLight = !themeLight;

  if(themeLight) {
    document.body.style.backgroundColor = "inherit";
    document.body.style.color = "#4d4d4d";
  } else{
    document.body.style.backgroundColor = "#4d4d4d";
    document.body.style.color = "white";
  }
})
