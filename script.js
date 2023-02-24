const input=document.getElementById("inputs");
const ol= document.querySelector("section");
const light = document.querySelector(".pic");
const add = document.querySelector(".enterBtn");
const close = document.getElementsByTagName("span");
const boxs =document.getElementsByTagName("button");
const listItems = document.getElementsByTagName("li");
const all = document.querySelector(".all");
const activeButton = document.querySelector(".active");
const completed = document.querySelector(".completed");
const clearCompleted = document.querySelector(".comp");


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
  
   
  //to show number of items remaining
  const uncheckedList = document.querySelectorAll("li.crossed").length-1;
  document.querySelector(".dynamic").innerHTML =listItems.length-uncheckedList;
 
 

  
//toggle list style when circle button is clicked
function toggleStyles(){ 
        circle.classList.toggle('circle');
        li.classList.toggle('crossed');
        const uncheckedList = document.querySelectorAll("li.crossed").length;
        document.querySelector(".dynamic").innerHTML =listItems.length-uncheckedList;
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

  input.value = "";


  //delete list when x is clicked
    for (var i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.remove();
        const uncheckedList = document.querySelectorAll("li.crossed").length;
        document.querySelector(".dynamic").innerHTML =listItems.length-uncheckedList;
      }
    }
  
 //function to show all list items
function showAll(){
  const uncheckedList = document.querySelectorAll("li.crossed").length;
  document.querySelector(".dynamic").innerHTML =listItems.length-uncheckedList;
     if(li.style.display="none"){
     li.style.display="block"
         activeButton.style.color="rgb(124, 122, 122)"
     all.style.color="blue"
     completed.style.color="rgb(124, 122, 122)"
   }false
   }
 all.addEventListener("click",showAll);


//function to show active list
function active(){

   activeButton.style.color="blue"
  all.style.color="rgb(124, 122, 122)"
  completed.style.color="rgb(124, 122, 122)"
    if(li.classList.contains('crossed')){
    li.style.display="none"
   }else{
      li.style.display="block"
    }
    const uncheckedList = document.querySelectorAll("li.crossed").length;
    if(uncheckedList=0){
      document.querySelector(".dynamic").innerHTML =0;
    }else{
      return document.querySelector(".dynamic").innerHTML =listItems.length-uncheckedList;
    }
  }
activeButton.addEventListener("click", active);


 //function to show completed
function completedList(){
  const uncheckedList = document.querySelectorAll("li.crossed").length;
  document.querySelector(".dynamic").innerHTML =uncheckedList;
  activeButton.style.color="rgb(124, 122, 122)"
  all.style.color="rgb(124, 122, 122)"
  completed.style.color="blue"
  document.querySelector(".dynamic").innerHTML = uncheckedList; 
   if(li.classList.contains('crossed')){
     li.style.display="block"
    }else{
      li.style.display="none"
    }

     }
 completed.addEventListener("click",completedList);

 //function to clear completed
function clearOut(){
   if(li.classList.contains('crossed')){
     li.remove();
     return showAll()
    }else{
      li.style.display="block"
    }
   
   }
 clearCompleted.addEventListener("click",clearOut)
}

function addListAfterClick(){
  if(inputLength() > 0){
    createListElement();
  }
}

function addListAfterKeypress(event){
   if(inputLength() > 0 && event.keyCode === 13){
      createListElement();
   }
}
add.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterKeypress); 







 


