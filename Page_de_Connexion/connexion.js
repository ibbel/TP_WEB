const send = event =>{
    event.preventDefault()
    for (i of event.target) {
        if (i.value.includes('<')){
            alert("Nom invalide")
        }
    }
}

document.querySelector("#FormConnexion").addEventListener("submit", send)