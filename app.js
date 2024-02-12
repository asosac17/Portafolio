const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const botonCopiar = document.querySelector(".btn-copiar");  
let cajaTexto = document.querySelector(".caja-texto");
const mono = document.querySelector(".contenedor-mono");
const contenedor = document.querySelector(".contenedor-parrafo");
const resultado = document.querySelector(".contenedor-resultado");

cargarEventListeners();
function cargarEventListeners() {
    botonEncriptar.addEventListener("click", encriptar);

    botonDesencriptar.addEventListener("click", desencriptar);

    botonCopiar.addEventListener("click", copiar);
}

function encriptar() {
    let recuperarTexto = cajaTexto.value;
    let textoEncriptado = encriptarTexto(recuperarTexto);

    if(textoEncriptado) {
        limpiarHTML();
        ocultarAdelante();

        let parrafo = document.createElement("p");
        parrafo.innerHTML = `${textoEncriptado}`;
        resultado.appendChild(parrafo);

        limpiarTextArea();
    } else {
        alert("Debes agregar texto");
    }
}
function desencriptar() {
    let recuperarTexto = cajaTexto.value;
    let textoDesencriptado = desencriptarTexto(recuperarTexto);

    if(textoDesencriptado) {
        limpiarHTML();

        let parrafo = document.createElement("p");
        parrafo.innerHTML = `${textoDesencriptado}`;
        resultado.appendChild(parrafo);

        limpiarTextArea();
    } else{
        alert("Debes agregar texto");
    }
    
}


function copiar() {
    let contenido = resultado.textContent;
    navigator.clipboard.writeText(contenido);
}

function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function limpiarTextArea() {
    while(cajaTexto.value) {
        cajaTexto.value = "";
    }
}

function ocultarAdelante() {
    mono.classList.add("ocultar");
    contenedor.classList.add("ocultar");
    resultado.classList.remove("ocultar");
    botonCopiar.classList.remove("ocultar");
}

function mostrarAdelante() {
    mono.classList.remove("ocultar");
    contenedor.classList.remove("ocultar");
    resultado.classList.add("ocultar");
    botonCopiar.classList.add("ocultar");
}


function encriptarTexto(mensaje) {
    let texto = mensaje;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++) {
        if(texto[i] == "a") {
            textoFinal = textoFinal + "ai";
        }
        else if(texto[i] == "e") {
            textoFinal = textoFinal + "enter";
        }
        else if(texto[i] == "i") {
            textoFinal = textoFinal + "imes";
        }
        else if(texto[i] == "o") {
            textoFinal = textoFinal + "ober";
        }
        else if(texto[i] == "u") {
            textoFinal = textoFinal + "ufat";
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
    }

    return textoFinal;
}

function desencriptarTexto(mensaje) {
    let texto = mensaje;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++) {
        if(texto[i] == "a") {
            textoFinal = textoFinal + "a";
            i = i + 1;
        }
        else if(texto[i] == "e") {
            textoFinal = textoFinal + "e";
            i = i + 4;
        }
        else if(texto[i] == "i") {
            textoFinal = textoFinal + "i";
            i = i + 3;
        }
        else if(texto[i] == "o") {
            textoFinal = textoFinal + "o";
            i = i + 3;
        }
        else if(texto[i] == "u") {
            textoFinal = textoFinal + "u";
            i = i + 3;
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
    }

    return textoFinal;
}