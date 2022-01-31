
// document.body.classList.add(localStorage.getItem("pageColor")|| "red")

// var el = document.querySelectorAll(".switch-color li")
// var classList=[];

// for(var i =0 ; i <= el.length; i++){
// classList.push(el[i].getAttribute("data-color"));

// el[i].addEventListener("click" , function(){
// document.body.classList.remove(...classList)
// document.body.classList.add(this.getAttribute("data-color"));
// localStorage.setItem("pageColor" , this.getAttribute("data-color"))

// },

// )
// }

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









// var productbtn = document.getElementById("product-btn");
// var productContainer = document.getElementById("product-container")

// var data =[
//     {id:1 , name:"product1" , desc:"bla bla bla"}, 
//     {id:2 , name:"product2" , desc="bla bla bla"}, 
//     {id:3 , name:"product3" , desc="bla bla bla"}, 
//     {id:4 , name:"product4" , desc="bla bla bla"}, 
// ],
// function drawUi(item){
// item.forEach(function (ele) {
//     productContainer.innerHTML += "<div>" + ele.name + "</div>"
// });
// }

// window.onload = function(){
//     drawUi(data)
// }
// productbtn.addEventListener("click", addItem)
// function addItem(){
//    var productInput = document.getElementById("product-input")
//    if (productInput== "")alert("youshould enter data")
// }
// var x = 1;
// function hoiest(){
//     if(true){
//         var x =2
//     }
//     console.log(x)
// }
// hoiest()

// const register = {
// firstName:"nesrin",
// lastName:"mohamed",
// password:"123",
// email:"nesrin mohamed@yahoo.com"
// }

// function makeRegister(){
// console.log(register)
// }
// makeRegister(register)

// const data =[1 , 2 ,3]
// const [n1,n2,n3] =data 
// console.log(n1, n2 , n3)

// function printparams(a , b){
//     console.log(a * b)
// }
// printparams(1,2)

// console.log(window.innerWidth)
// console.log(window.innerHeight)
// var x = window.confirm("do you want delete");
// if (x == true){
//     alert(yes)
// }else{
//     alert(no)
// }
// console.log(screen)




// window.onscroll = function() {myFunction()};

// var header = document.getElementById("header");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     header.classList.add("sticky")
//   } else {
//     header.classList.remove("sticky");
//   }
// }
// document.write("Hello");
// document.getElementById("res").innerHTML = " Hello Java Script";
// var btn = document.getElementById("btn");
// var demo = document.getElementById("demo")
// var x = 2
// btn.onmousemove = function(){
// demo.innerHTML = ++x;

// }
// for (var i=0 ; i<=10 ; i++){
//   console.log(i)
// }

// btn.addEventListener("click" , function(){
//   console.log("teseeeee")
// })

// function action (){
//   demo.innerHTML= "code"
// }
// btn.onclick = action

// var x = 8;
// document.write(x ** 2);
// console.log(+true)
// console.log(+false)
// console.log(x += 2)
// var s = 5 , y= 6
// if(s == 5 || y==8){
// console.log("yes")
// }else{
//   console.log("no")
// }
// function log (){
//  var x=2 , y=3;
//  console.log(x + y)
// }
// log()

// var fun = function test (){
//   console.log("expression function ")
// };
// fun ();


// (function code (){
// console.log("code")
// })();

// var el =document.querySelectorAll(".list li");
// var content = document.querySelector("#content");
// var btn = document.querySelector("#addtocard");
//  var totalPrice = 0;
//  var total = document.querySelector("#totalPrice")

//  allitems.forEach(function (item){
// item.onclick = function(){
//     totalPrice += parseInt(item.getAttribute("price"))
// content.innerHTML += item.textContent +" ";

// if (content != " ")
// btn.style.display="block"
// }

//  })
//  btn.onclick = function(){
//     total.innerHTML = totalPrice ;
//  }

// var str = "Hello world javascript"
// var res= str.toUpperCase()
// console.log(res)


// var arry = ["hamza ", "ahmed" , "mohamed"]
// var res = arry.push("test");
// console.log(arry , res)
// var obj= [
//     {"name":"ahmed",
//     "age":20,
//     "tel":123456
//     },
//     {
//     "name":"mohamed",
//     "age":15,
//     "tel":true
//     },
    
//     {
//     "name":"yaser",
//     "age":10,
//     "tel":null
//     }
//     ]

//     var str = JSON.stringify(obj)


//    document.write(str)



// function loadData(){
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange=function(){

//         if(this.readyState = 4 && this.status == 200){
//             console.log(JSON.parse(this.responseText))
//         }
//     }
//     xhttp.open("GET" , "https://jsonplaceholder.typicode.com/posts", true)
// xhttp.send()
// }

// loadData()