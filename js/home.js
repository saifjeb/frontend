var studentName = "Ali";
console.log("studentName:", studentName);

var isNew = true;
console.log("isNew:", isNew);

var marks = [10, 20, 30, 40, 50]
console.log("marks:", marks);

var student = { 
    name: "Ali",
    age: 20,
    isNew: true 
}
console.log("student:", student);

var y = null;
console.log("y:", y);

var ageAString = "20";
console.log("ageAString:", ageAString); 

var age = 20;
console.log("age1:", age);
age = 30;
console.log("age2:", age);

let price = 100
console.log("price1:", price);7
price = 200
console.log("price2:", price);

const tax = 0.1
console.log("tax1:", tax);
//compare in js
//
// if condition
if(age > 18){
    console.log("Adult");
}

if(age != ageAString){
    console.log("age is greater than 18");
}
// == value
// === value and type
// != value
// !== value and type
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to
// && and
// || or

// function : block of code for commands that comands execute when called
// 1- delcare function
// function functionName(){
// code
// }
function hello(){
    alert("hello")
}
function jsBgColorChange(){
    var jspart =document.getElementById("jspart")
    console.log("jspart:", jspart)
    if (jspart.style.backgroundColor == 'lightblue') {
    jspart.style.backgroundColor = 'red'
    } 
    else {
    jspart.style.backgroundColor = 'lightblue'
    }
    
}

// 2- call function
function calculate() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var op = document.getElementById("op").value;

  var result = 0;
  switch(op){
      case "+":
          result = parseInt(num1) + parseInt(num2);
          break;
      case "-":
           result = parseInt(num1) - parseInt(num2);
          break; 
      case "*":
          result =  parseInt(num1) * parseInt(num2);
          break;
          
      case "/":
          result = num2 !== 0 ? num1 / num2 : NaN;
          break;
  }

  let message = `Result: ${result}`;

  if (!Number.isFinite(result)) {
    message += " (invalid operation)";
  } else if (!Number.isInteger(result)) {
    message += " — prime check applies to integers only.";
  } else if (result <= 1) {
    message += " — not prime (must be > 1).";
  } else {
    message += isPrime(result) ? " — prime ✅" : " — not prime ❌";
  }

  document.getElementById("result").innerText = message;
}

function isPrime(n) {
  if (n % 2 === 0) return n === 2;
  const limit = Math.floor(Math.sqrt(n));
  for (let i = 3; i <= limit; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

var switchButton = document.getElementsByClassName('switch')[0]
switchButton.addEventListener('click', function() {
  var checkbox = document.getElementById('checkbox')
  console.log(document.getElementById("myCheckbox"));
  console.log(checkbox.checked)
})

function gen5Elements() {
    var elementdiv = document.getElementById("gen5Elements");
    var ul = document.createElement("ul")
    for (let index =0; index <= 5; index++) {
        var li = document.createElement("li")
        var a = document.createElement("a")
        a.innerHTML = "element " + (index+1)
        li.appendChild(a)
        ul.appendChild(li)
    }
    elementdiv.appendChild(ul)
}