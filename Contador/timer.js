let tela = document.getElementById('mostrador')

let iniciar = document.getElementById('inicio')
let maisDez = document.getElementById('acrescimo')
let recomecar = document.getElementById('reiniciar')
let paradaRetomada = document.getElementById('pararretormar')

let contador = 0
let bandeira = false
let intervalo;


let adicionar = () => {

    contador += 10
    atualizarTela()
    
}

let atualizarTela = () => {

    tela.textContent = contador

}

let iniciarCronometro = () => {

    if (!intervalo) {
        intervalo = setInterval(() => {
            atualizarTela()
            contador++
        }, 1000)
    }
}

let pausarRetormarCronometro = () => {
    if (bandeira) {

        iniciarCronometro() //Retomar
        bandeira = false
        paradaRetomada.textContent = 'Pausar'

    } else {

        clearInterval(intervalo) // Pausar
        intervalo = null
        bandeira = true
        paradaRetomada.textContent = 'Retomar'

    }
}

let reiniciarCronometro = () => {

    clearInterval(intervalo)
    intervalo = null
    contador = 0
    bandeira = false
    atualizarTela()
}


iniciar.addEventListener('click', iniciarCronometro)
maisDez.addEventListener('click', adicionar)
paradaRetomada.addEventListener('click', pausarRetormarCronometro)
recomecar.addEventListener('click', reiniciarCronometro)