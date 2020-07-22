const users = [ {nom:'Redfield', prenom:'Chris'},{nom:'Kennedy', prenom:'Leon'}]

const clicked = () => {
    const body = document.querySelector('liste')

    for (const users of users) {
        const li = document.createElement('li')
        div.innerHTML = users
        body.appendChild(li)
    }
}

document.querySelector('#BtRecherche').addEventListener('click', clicked)