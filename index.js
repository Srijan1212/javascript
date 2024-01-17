
function rollit() {
    const idunno = document.getElementById("idunno").value;
    const result = document.getElementById("result");
    const images = document.getElementById("ïmages");
    const values = [];
    const diceImages = []; 

    for (let i = 0; i < idunno; i++) {
        const value = Math.ceil(Math.random() * 6);
        values.push(value);
        diceImages.push(`<img src="dice ${value}.png" alt="Dice${value}">`);
    }

    result.textContent = `Dice: ${values.join(', ')}`;
    images.innerHTML = diceImages.join('');
}
