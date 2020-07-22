const send = (event) =>{
    event.preventDefault()
    for(let elem of event.target){
        console.log(elem.value)
    }
}

document.querySelector("#FormInscription").addEventListener('submit', send)