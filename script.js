//Almaceno todas las opciones que existirán en el juego.
let paises = ["Argentina", "Brasil", "Portugal", "Chile", "Perú", "Bolivia", "España", "Alemania", "Holanda", "Francia", "Italia", "Uruguay", "Colombia", "Ecuador", "Venezuela", "Suecia", "Noruega", "Rusia", "Cuba", "Canada", "China", "Cuba", "Egipto", "Gales", "Ghana", "Grecia", "Israel", "Japón", "México"]

var paisesConFoto = {"Argentina": "img/ar.png",
                "Brasil": "img/br.png",
                "Portugal": "img/pt.png",
                "Chile": "img/cl.png",
                "Perú":"img/pe.png",
                "Bolivia": "img/bo.png",
                "España": "img/es.png",
                "Alemania": "img/de.png",
                "Holanda": "img/nl.png",
                "Francia": "img/fr.png",
                "Italia": "img/it.png",
                "Uruguay": "img/uy.png",
                "Colombia":"img/co.png",
                "Ecuador": "img/ec.png",
                "Venezuela":"img/ve.png",
                "Suecia": "img/se.png",
                "Noruega": "img/no.png",
                "Rusia": "img/ru.png",
                "Cuba": "img/cu.png",
                "Canada":"img/ca.png",
                "China":"img/cn.png",
                "Cuba":"img/cu.png",
                "Egipto":"img/eg.png",
                "Gales":"img/gb-wls.png",
                "Ghana":"img/gh.png",
                "Grecia":"img/gr.png",
                "Israel":"img/il.png",
                "Japón":"img/jp.png",
                "México":"img/mx.png"

            }


let paisesJugados = [];
let correcto;
let opciones;
let numPregunta;
let numCorrectas;

const opc1 = document.getElementById("op1");
const opc2 = document.getElementById("op2");
const opc3 = document.getElementById("op3");
const opc4 = document.getElementById("op4");


//comenzar el juego
function comenzarJuego(){
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("juego-terminado").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    reiniciarValores();
    siguientePregunta();
}

function reiniciarValores(){
    numPregunta = 0;
    numCorrectas = 0;
    paisesJugados = [];
}

function volverAlInicio(){
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("juego-terminado").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
}

//Creo la nueva respuesta correcta
function crearOpCorrecta(){
    let opCorrecta = paises[Math.floor(Math.random() * paises.length)];

    while(paisesJugados.indexOf(opCorrecta) !== -1){
        opCorrecta = paises[Math.floor(Math.random() * paises.length)];
    } 

       return opCorrecta;
}


function mostrarBandera(){
    document.getElementById("imagen").innerHTML = '<img class="imagen text-center" src="'+paisesConFoto[correcto]+'" alt="">';
}



//Funcion para intentar acertar
function intentar(opc){
    document.getElementById("esCorrecta").style.display = "block";
    deshabilitarBotones();
    if(opciones[opc] == correcto){
        numCorrectas++;
        document.getElementById("esCorrecta").innerHTML = "<h4 class='corr'> ¡Correcto! La bandera es de " + correcto + " </h4>";
    } else{
        document.getElementById("esCorrecta").innerHTML = "<h4 class='inc'> ¡Incorrecto! La bandera es de " + correcto +"</h4>";
    }
    document.getElementById("siguiente-pregunta").style.display = "block";

}

function mostrarOpciones(){
    opc1.innerHTML = opciones[0];
    opc2.innerHTML = opciones[1];
    opc3.innerHTML = opciones[2];
    opc4.innerHTML = opciones[3];
}



function siguientePregunta(){
    if(numPregunta == 10){
        terminarJuego();
    } else{
        correcto = crearOpCorrecta();
        paisesJugados.push(correcto);
        mostrarBandera();
        crearOpciones();
        sumarPregunta();
        mostrarOpciones();
        activarBotones();
        document.getElementById("esCorrecta").style.display = "none";
        document.getElementById("siguiente-pregunta").style.display = "none";
    }
    

}

function sumarPregunta(){
    numPregunta++;
    document.getElementById("cantPreguntas").innerHTML = "<h5>" + "Pregunta " + numPregunta + "/10 </h5>";
}

function crearOpciones(){
    opciones = [correcto];

    while (opciones.length < 4) {
    let paisAAgregar = paises[Math.floor(Math.random() * paises.length)];
    if (opciones.indexOf(paisAAgregar) == -1) {
        opciones.push(paisAAgregar)
    }
    }
    mezclarOpciones();
}

function terminarJuego(){
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("juego-terminado").style.display = "block";
    document.getElementById("resultadoFinal").innerHTML = "<h1 class='resultadoFinal m-3'> <b>" + numCorrectas + "/10 </b></h1>"
}

function deshabilitarBotones(){
    opc1.disabled = true;
    opc2.disabled = true;
    opc3.disabled = true;
    opc4.disabled = true;
}

function activarBotones(){
    opc1.disabled = false;
    opc2.disabled = false;
    opc3.disabled = false;
    opc4.disabled = false;
}



//Funcion para mezclar las opciones
function mezclarOpciones(){

    for (let i = opciones.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = opciones[i];
      opciones[i] = opciones[j]; 
      opciones[j] = temp;
    }
}