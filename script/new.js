const list= document.getElementById("mylist");
const newName =document.getElementById("inputs");
const allItems = document.querySelectorAll("li");
function addListAfterKeypress(event){
   event.preventDefault
   if (event.keyCode === 13){
     const newItem =`<li>${newName.value}</li>`
     list.insertAdjacentHTML("afterbegin", newItem);
     newName.value=" ";
   }
   allItems.forEach((item)=>{
      item.addEventListener("click", function(e){
         const el = e.target;
         el.classList.toggle('crossed');
      })
   })
}