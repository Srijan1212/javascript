const mytext = document.getElementById("mytext");
const mysubmit = document.getElementById("mysubmit");
const resultElement = document.getElementById("resultElement");
let age;
mysubmit.onclick=function(){
    age=mytext.value;
    age=Number(age);
if (age>=100){
    resultElement.textContent=`You are too old`;
}
else if(age==0){
    resultElement.textContent=`You were just born`;
}
else if(age<=0){
    resultElement.textContent=`Invalid`;
}
else if(age<=18){
    resultElement.textContent=`you cannot vote`;
}
else if(age>=18){
    resultElement.textContent=`You cn vote`;
}
   }
