const mycheckbox= document.getElementById("mycheckbox");
const visa= document.getElementById("visa");
const paypal= document.getElementById("paypal");
const mastercard= document.getElementById("mastercard");
const btn= document.getElementById("btn");
const subbutton= document.getElementById("subbutton");
const paymentresult= document.getElementById("paymentresult");

btn.onclick=function(){
    if(mycheckbox.checked){
        subbutton.textContent="You have subscribed"
    }
    else{
        subbutton.textContent="You have not subscribed" 
    }
    if(visa.checked){
        paymentresult.textContent="payment with visa card"
    }
    else if(mastercard.checked){
        paymentresult.textContent="payment with mastercard"
    }
    else if(paypal.checked){
            paymentresult.textContent="payment with paypal"
        }
    else{
        paymentresult.textContent="error,you gotta pay otherwise fuck off"
    }


}
