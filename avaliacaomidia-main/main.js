function tocasom(idElementoAudio){
    document.querySelector(idElementoAudio).play()
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const efeito= tecla.classLit[1];
    const idAudio= `#som_${efeito}`;

    tecla.onclick = fuction (){
        tocasom(idAudio);
    }

    tecla.onkeydown= fuction(evento){
        if (evento.code != 'Tab'){
            tecla.classList.add('ativa')
        }
    }
    tecla.onkeyup= fuction(){
        tecla.classList.remove('ativa')
    }
}

