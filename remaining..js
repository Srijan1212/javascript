const fullname="Srijan Dhungana"
let firstname= fullname.slice(0 , 5)
let lastname= lastname .slice(6,14)
console.log(firstname)*/
/*
const temp= 38;
if(temp>0 && temp<=40){
    console.log("The temperature is good");

}
else{
    console.log("The temperature is bad")
}
*/
/*
function Name(name ,age){
    console.log(`My name is ${name}`)
    console.log(`My name is ${age}`)
   
}
Name("Srijan",19);
*/
/*
function isEven(number){
    window.prompt("Ënter a number");
    if(number%2==0){
    return true;
    }
    else{
        return false;
    }
}
*/
/*
let fruits=["apple","banana","orange"];
fruits.push("coconut")
fruits.pop()
fruits.unshift("coconut")
fruits.shift()
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])
*/

/*
let fruits=["apple","banana","orange"];
let nooffruits=fruits.length
console.log(nooffruits)
*/

/*
let fruits=["apple","banana","orange"];
fruits.sort().reverse();
for(let i=0; i<fruits.length;i++){
console.log(fruits[i])
}
*/
/*
const textbox=document.getElementById("textbox")
const radio=document.getElementById("radio")
const radios=document.getElementById("radios")
const result=document.getElementById("result")
const submit=document.getElementById("submit")
function test(){
if(radio.checked){
    result.textContent="yes she is"

}
else if(radios.checked){
result.textContent="no she isnt"
}
else[
    result.textContent="She is a dhoti even if it is not selected"
]
}
