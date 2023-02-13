var input=document.getElementById("inputs");
var ol= document.querySelector("section");
const light = document.querySelector(".pic");

//togle between light and dark mode
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

   //create circle button
   var circle = document.createElement("button");
   circle.style.width="20px"
   circle.style.height="20px"
   circle.style.border="2px solid purple"
   circle.style.borderRadius="10px"
   circle.style.marginRight="30px"
  
//toggle list style when circle button is clicked
function toggleStyles(){
        circle.classList.toggle('circle');
        li.classList.toggle('crossed');
}
  circle.addEventListener("click", toggleStyles);

  //create x button
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

  //delete list when x is clicked
    for (var i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.remove();
        document.querySelector(".dynamic").innerHTML = listItems.length;  
      }
    }

//to show number of items remaining
const listItems = document.getElementsByTagName("li");
 document.querySelector(".dynamic").innerHTML = listItems.length;


 //function to show all list items
const all = document.querySelector(".all");
function showAll(){
   if(li.style.display="none"){
     li.style.display="block"
     document.querySelector(".dynamic").innerHTML = listItems.length;
     activeButton.style.color="rgb(124, 122, 122)"
     all.style.color="blue"
     completed.style.color="rgb(124, 122, 122)"
   }
   }
 all.addEventListener("click",showAll);



//function to show active list
const activeButton = document.querySelector(".active");
function active(){
  if(li.classList.contains('crossed')){
    li.style.display="none"
    activeButton.style.color="blue"
    all.style.color="rgb(124, 122, 122)"
    completed.style.color="rgb(124, 122, 122)"
   }else{
      li.style.display="block"
    }
  }
activeButton.addEventListener("click", active);


 //function to show completed
const completed = document.querySelector(".completed");
function completedList(){
   if(!li.classList.contains('crossed')){
     li.style.display="none"
     activeButton.style.color="rgb(124, 122, 122)"
     all.style.color="rgb(124, 122, 122)"
     completed.style.color="blue"
    }else{
      li.style.display="block"
    }
   }
 completed.addEventListener("click",completedList);

 //function to show completed
const clearCompleted = document.querySelector(".comp");
function clearOut(){
   if(li.classList.contains('crossed')){
     li.remove();
    }else{
      li.style.display="block"
    }
   }
 clearCompleted.addEventListener("click",clearOut)
}


function addListAfterKeypress(event){
   if (inputLength() > 0 && event.keyCode === 13){
      createListElement();
   }
}
input.addEventListener("keypress", addListAfterKeypress); 







 


