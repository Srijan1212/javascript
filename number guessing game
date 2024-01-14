const minnumber=1;
const maxnumber=100;
const answer=Math.ceil(Math.random()*(maxnumber-minnumber ));
console.log(answer);
let attempts=0;
let guess;
let running=true;
while(running){
guess = window.prompt(`Take a guess between ${minnumber} - ${maxnumber}`);
guess= Number(guess);

if(isNaN(guess)){
    window.alert("Please enter a number");

}
else if(guess>maxnumber || guess<minnumber){
    window.alert("Use a number between 1 and 100");

}
else{
    attempts++;
        if(guess<answer){
    window.alert("A little bit higher");
        }
        else if(guess>answer){
    window.alert("A little bit lower");
        }
        else{
        window.alert(`Congrats, your answer is ${answer}.You took ${attempts} attempts `)
        running=false;
    
        }  
    }
}
