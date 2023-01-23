function encriptar() {
    const texto = document.getElementById("ingresoTexto").value.toLowerCase();
    
    const condiciones = {
        "e": "enter",
        "o": "ober",
        "i": "imes",
        "a": "ai",
        "u": "ufat"
    }

    let letras = texto.split('');
    letras = letras.map(function(letra){
        return condiciones[letra] || letra;
    });

    let textoCifrado = letras.join('');

    document.getElementById("vector").style.display = "none";
    document.getElementById('subtexto-right').style.display = "none";
    document.getElementById("titulo-right").style.display = "none";
    document.getElementById("copiar").style.display = "block";
    document.getElementById("texto-right").style.display = 'block';
    document.getElementById("texto-right").innerHTML = textoCifrado;
    document.getElementById("ingresoTexto").innerHTML = " ";
    
}

function desencriptar() {
    const texto = document.getElementById("ingresoTexto").value.toLowerCase();
    
    const condiciones = {
        "enter": "e",
        "ober": "o",
        "imes": "i",
        "ai": "a",
        "ufat": "u"
    }

    let txtDescifrado = texto;
    
    Object.keys(condiciones).map(function(key){
        let expReg = new RegExp(key, 'g')
        txtDescifrado = txtDescifrado.replace(expReg, condiciones[key])
    });

    document.getElementById("vector").style.display = "none";
    document.getElementById('subtexto-right').style.display = "none";
    document.getElementById("titulo-right").style.display = "none";
    document.getElementById("copiar").style.display = "block";
    document.getElementById('texto-right').style.display = 'block';
    document.getElementById("texto-right").innerHTML = txtDescifrado;
    document.getElementById("ingresoTexto").innerHTML = " ";
}


function copiar() {
    let contenido = document.querySelector("#texto-right");
    contenido.select()
    document.execCommand('copy')
    alert('El texto esta copiado')
}


const button = document.getElementById('modo-Oscuro'); 
const imagen = document.getElementById('imagen-logo');
const imagenDos = document.getElementById('vector')

button.addEventListener('click', () =>{
    document.body.classList.toggle('dark')
    button.classList.toggle('active')

    if(document.body.className == 'dark'){
        imagen.src = './img/Vector3.svg'
        vector.src = './img/Muñeco2.svg'

    }else{
        imagen.src = './img/Vector.svg'
        vector.src = './img/Muñeco.svg'
    }

});
