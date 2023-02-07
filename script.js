var input=document.getElementById("inputs");
var ol= document.querySelector("section");
const light = document.querySelector(".pic");


light.addEventListener('click', () => {
   document.body.classList.toggle('dark')
   if(document.body.classList.contains('dark')){
      document.getElementById("img").src="./images/icon-sun.svg"
   }else{
         document.getElementById("img").src="./images/icon-moon.svg"
      }
      }
   
)
var close = document.getElementsByTagName("span");
var boxs =document.getElementsByTagName("button");

function inputLength(){
   return input.value.length;
}

function createListElement(){
  
   var li = document.createElement("li");
   var circle = document.createElement("button");
   circle.style.width="20px"
   circle.style.height="20px"
   circle.style.border="2px solid purple"
   circle.style.borderRadius="10px"
   circle.style.marginRight="30px"
  


function treble(){
        circle.classList.toggle('circle');
        li.classList.toggle('crossed');
}
  circle.addEventListener("click", treble);

   var img = document.createElement("span");
   img.style.backgroundImage="url(./images/icon-cross.svg)"
  img.style.backgroundRepeat="no-repeat"
  img.style.float="right"
  img.style.height="30px"
   img.style.paddingTop="10px"
   img.style.paddingRight="28px"
   img.style.marginLeft="-30px"



  li.appendChild(circle);
   li.appendChild(document.createTextNode(input.value));
   ol.appendChild(li); 
   li.appendChild(img);
  input.value = ""
    for (var i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}


function addListAfterKeypress(event){
   if (inputLength() > 0 && event.keyCode === 13){
      createListElement();
   }
}
input.addEventListener("keypress", addListAfterKeypress); 

function countItems(){
 return `<button class= "dynamic">
 ${input.value}</button>`

}
document.addEventListener("change", countItems)



 


