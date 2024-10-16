btn.onclick = () => {

let ultimoDigito =Number(dia.value % 10)

console.log(ultimoDigito)
let mesSelecionado = Number(mes.value)

if(Number(dia.value)>=1 && Number(dia.value)<=31){

    if (ultimoDigito == 1 || ultimoDigito == 2){
        nome.innerHTML = 'Desenvolvedor (a)'
    }else if (ultimoDigito >=3 && ultimoDigito <=5){
        nome.innerHTML = 'Programador(a)'
    }else if (ultimoDigito >=6 && ultimoDigito <=8){
        nome.innerHTML = 'Estagiário(a)'
    }else{
        nome.innerHTML = 'Senior(a)'
    }
    switch(mesSelecionado) {
        case 1:
            nome.innerHTML += ' bugado (a)'
            break;
        case 2:
            nome.innerHTML += ' do CTRL C, CTRL V'
            break
        case 3:
            nome.innerHTML += ' das gambiarras'
            break
        case 4:
            nome.innerHTML += ' que culpa o cache'
            break
        case 5:
            nome.innerHTML += ' que esquece o que faz '
            break
        case 6:
            nome.innerHTML += ' do git vazio'
            break
        case 7:
            nome.innerHTML += ' das try/ catch vazia'
            break
        case 8:
            nome.innerHTML += ' famosinho do Linkedin'
            break
        case 9:
            nome.innerHTML += ' caçador de Bugs'
            break
        case 10:
            nome.innerHTML += ' do windows pirata'
            break
        case 11:
            nome.innerHTML += ' do Update sem where'
            break
        case 12:
            nome.innerHTML += ' do commit bugado'
            break
    }
} else {
    alert('Digite um dia valido');
    dia.value =''
}


}