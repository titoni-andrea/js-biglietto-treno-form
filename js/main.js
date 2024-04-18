const bottoneForm = document.getElementById("bottone-form")
    

bottoneForm.addEventListener("click", function () {
    let nomeUtente = document.getElementById("name").value;
    let NumKm = document.getElementById("km").value;
    let ageUser = document.getElementById("select-eta").value;

    let costKm = 0.21

    let costTicket = NumKm * costKm

    const senzaDato = "Devi inserire tutti i dati nel form per avere il  prezzo del tuo biglietto!"

    // console.log(`Il costo base del biglietto è: ${costTicket.toFixed(2)}€`)

    if (NumKm == 0 || NumKm == null) {
        console.log(senzaDato)
    }

    else if (ageUser == 0 || ageUser == null) {
        console.log(senzaDato)
    }

    else if (nomeUtente == 0 || nomeUtente == null) {
        console.log(senzaDato)
    }

    else if (ageUser == "Minorenne") {
        console.log(`Il costo del biglietto per te che sei minorenne è: ${(costTicket - ((costTicket / 100) * 20)).toFixed(2)}€`)
    }
    else if (ageUser == "Senior") {
        console.log(`Il costo del biglietto per te che hai più di 65 anni è: ${(costTicket - ((costTicket / 100) * 40)).toFixed(2)}€`)
    }
    else {
        console.log(`Il costo del biglietto intero è: ${costTicket.toFixed(2)}€`)
    }
})

