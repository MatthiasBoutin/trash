var aDeviner = Math.round(Math.random() * 10)

var essai = window.prompt("Devinez un nombre entre 1 et 10")

while(essai != aDeviner) {
    if(essai > aDeviner) {
        essai = window.prompt("C'est moins")
    } else {
        essai = window.prompt("C'est plus")
    }
}

window.alert("Bravo, vous avez deviné le nombre !")