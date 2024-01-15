const textbox = document.getElementById("textbox")
const Tofahrenheit = document.getElementById("Tofahrenheit")
const ToCelcius = document.getElementById("ToCelcius")
const result= document.getElementById("result")
let temp;
function convert(){
    if(Tofahrenheit.checked){
        temp=(textbox.value);
        temp =temp* 9/5 +32;
        result.textContent=temp+"°F "
    }
    else if(ToCelcius.checked){ 
        temp=(textbox.value);
        temp =(temp-32)*(5/9)
        result.textContent=temp+"°C"
    }
    else{
        result.textContent="Select a unit";
    }
}
