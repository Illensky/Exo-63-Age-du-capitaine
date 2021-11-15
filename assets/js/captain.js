capio = document.querySelector('#capitaine')
console.log(capio)

let ageCapio = 0
for (let i = 0; i < 60; i++) {
    ++ageCapio

        if(ageCapio<=18){
            capio.innerHTML += "le capitaine a " + ageCapio + ". Le capitaine est jeune.<br><br>";
        }

        else if(ageCapio<=50) {
            capio.innerHTML += "le capitaine a " + ageCapio + ". le capitaine n'est pas très vieux.<br><br>";
        }

        else{
            capio.innerHTML += "le capitaine a " + ageCapio + ". le capitaine est vieux.<br><br>";
        }
}