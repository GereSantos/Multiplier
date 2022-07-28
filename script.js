const doublevelocity = (velocity) => {
    return velocity = velocity * 2
}

console.log(doublevelocity(10))

const triplevelocity = (velocity) => {
    return velocity = velocity * 3
}

const quatriple = (velocity) => {
    return velocity = velocity * 4
}



let chosen = window.prompt('Bem vindo ao Multiplicador de velocidade! \n'
    + ' Deseja mutiplicar a velocidade em quantas vezes? \n'
    + ' 1 - Dobro da velocidade \n'
    + ' 2 - Triplo da velocidade \n'
    + ' 3 - Quádruplo da velocidade\n')

let velocity = window.prompt('Digite a sua velocidade que sofrerá a multiplicação ')
switch (chosen) {
    case '1':
        alert('Velocidade antes a multiplicação ' + velocity + '\n' +
            'Velocidade após multiplicação(Dobro): ' + doublevelocity(velocity))
        break;
    case '2':
        alert('Velocidade antes a multiplicação ' + velocity + '\n' +
            'Velocidade após multiplicação(Triplo): ' + triplevelocity(velocity))
        break;
    case '3':
        alert('Velocidade antes a multiplicação ' + velocity + '\n' +
            'Velocidade após multiplicação(Quadruplo): ' + quatriple(velocity))
        break;
    default:
        alert('Fora do Escopo! \n' +
            'Finalizando Programa...')
        break;
}
