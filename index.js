const myButton =document.getElementById("myButton");
const myLabell =document.getElementById("myLabell");
const myLabel2 =document.getElementById("myLabel2");
const myLabel3 =document.getElementById("myLabel3");
const min=1;
const max=6;
let ranum1;
let ranum2;
let ranum3;

myButton.onclick=function(){
    ranum1=Math.floor(Math.random()*max)+min;
    ranum2=Math.floor(Math.random()*max)+min;
    ranum3=Math.floor(Math.random()*max)+min;
    Label1.textContent=ranum1;
    Label2.textContent=ranum2;
    Label3.textContent=ranum3;
}
