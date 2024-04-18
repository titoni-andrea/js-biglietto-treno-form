let ageUser = document.getElementById("select-eta").value;

const bottoneForm = document.getElementById("bottone")
    

bottoneForm.addEventListener("click", function () {
    let nomeUtente = document.getElementById("name").value;
    let NumKm = document.getElementById("km").value;
    let ageUser = document.getElementById("select-eta").value;

    let costKm = 0.21;

    let costTicket = NumKm * costKm;

    const senzaDato = "Devi inserire tutti i dati nel form per avere il  prezzo del tuo biglietto!";

    // console.log(`Il costo base del biglietto è: ${costTicket.toFixed(2)}€`);

    if (NumKm == 0 || NumKm == null) {
        alert(senzaDato);
    }

    else if (ageUser == 0 || ageUser == null || ageUser == "placeholder") {
        alert(senzaDato);
    }

    else if (nomeUtente == 0 || nomeUtente == null) {
        alert(senzaDato);
    }

    else if (ageUser == "Minorenne") {
        document.getElementById("tipo-ticket").innerHTML = "Per te che sei MINORENNE c'è uno sconto del 20%!";
        document.getElementById("costo-ticket").innerHTML = `${(costTicket * 0.8).toFixed(2)}€`;
        document.getElementById("offerta").innerHTML = "Sconto Minorenne";
        document.getElementById("num-treno").innerHTML = Math.floor(Math.random() * 90000 + 10000);
        document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 9 + 1);
        document.getElementById("nome-ticket").innerHTML = nomeUtente

        document.getElementById("name").value = ""
        document.getElementById("km").value = ""
        document.getElementById("select-eta").value = ""
    }
    else if (ageUser == "Senior") {
        document.getElementById("tipo-ticket").innerHTML = "Per te che sei SENIOR c'è uno sconto del 40%!";
        document.getElementById("costo-ticket").innerHTML = `${(costTicket * 0.6).toFixed(2)}€`;
        document.getElementById("offerta").innerHTML = "Sconto Senior";
        document.getElementById("num-treno").innerHTML = Math.floor(Math.random() * 90000 + 10000);
        document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 9 + 1);
        document.getElementById("nome-ticket").innerHTML = nomeUtente

        document.getElementById("name").value = ""
        document.getElementById("km").value = ""
        document.getElementById("select-eta").value = ""
    }
    else {
        document.getElementById("costo-ticket").innerHTML = `${costTicket}€`;
        document.getElementById("offerta").innerHTML = "Prezzo Intero";
        document.getElementById("num-treno").innerHTML = Math.floor(Math.random() * 90000 + 10000);
        document.getElementById("carrozza").innerHTML = Math.floor(Math.random() * 9 + 1);
        document.getElementById("nome-ticket").innerHTML = nomeUtente

        document.getElementById("name").value = ""
        document.getElementById("km").value = ""
        document.getElementById("select-eta").value = ""
    }
})

