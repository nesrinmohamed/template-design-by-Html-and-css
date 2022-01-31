document.body.classList.add(localStorage.getItem("pageColor")|| "red")

var ele = document.querySelectorAll(".switch-color li")
var classList=[];

for(var i =0 ; i <ele.length; i++){
classList.push(ele[i].getAttribute("data-color"));

ele[i].addEventListener ('click',  function(){
document.body.classList.remove(...classList)
document.body.classList.add(this.getAttribute("data-color"));
localStorage.setItem("pageColor" , this.getAttribute("data-color"))

},

)
}

var input = document.getElementById("my-input")
var btn = document.getElementById("btn")

btn.onclick= function(){
   " use strict";
   if(this.textContent === "Show Password"){
       input.setAttribute("type" , "text");
       this.textContent ="Hide Password"
   }else{
    input.setAttribute("type" , "password");
    this.textContent ="Show Password"
   }
}

var x =[1,2,3]
x.forEach(function(item , index, array){
    console.log(item , index, array)
})
