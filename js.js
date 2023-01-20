
/**
 * funcion para obtener los datos de los input
 * @returns 
 */
const obtenerValores = () => {
    const valorPrimero = document.getElementById("dia").value;
    const valorSegundo = document.getElementById("mes").value;
    const valorTercero = document.getElementById("anio").value;
    return[valorPrimero, valorSegundo, valorTercero];
    
}
/**
 * funcion que comprueba si el valor obtenido esta vacio
 * @param {*} str 
 * @returns verdadero si esta vacio o falso si no lo esta
 */
function comparacionStrVacio(str) {
    return (!str || str.length === 0 );
}

/**
 * obtiene los valores de la funcion obtenerValores()
 * @returns un mensaje de alerta si es false o el dia laboral si es true
 */
const comparaValoresValidos = () => {
    const valorComparar = obtenerValores();

    return comparacionStrVacio(valorComparar[0]) === true ? alert("por favor introduzca una fecha valida") : valorComparar[0] > 31 ? alert("por favor introduzca una fecha valida") : valorComparar[0] < 0 ?
    alert("por favor introduzca una fecha valida") : comparacionStrVacio(valorComparar[1]) === true ? alert("por favor introduzca una fecha valida") : valorComparar[1] > 12 ? alert("por favor introduzca una fecha valida") : valorComparar[1] < 0 ?
    alert("por favor introduzca una fecha valida") : comparacionStrVacio(valorComparar[2]) === true ? alert("por favor introduzca una fecha valida") : valorComparar[2] > 3000 ? alert("por favor introduzca una fecha valida") : valorComparar[2] < 2000 ?
    alert("por favor introduzca una fecha valida") : document.getElementById("resultado").value =  dia() + ", es " + compararDiasLaborales();
}

/** 
 * obtiene los valores de la funcion obtenerValores() 
 * @param {*} int 
 * @returns el dia de la semana de 0 a 6 gracias a la funcion date
 */
const convertirDia = (diaF) => {
    const valores = obtenerValores();
    const fecha = [valores[1], valores[0], valores[2]];
    let fech = fecha.join();
    const d = new Date(fech);
    let dia = d.getDay();
    diaF = dia;
    return  diaF;
}


/**
 * obtiene el dia de la funcion convertirDia() en numero del 0 al 6
 * @returns el dia de la semana en string
 */
const dia = () => {
    let diaC = convertirDia();
    let dias = "";
    switch (diaC) {
        case 0:
            dias = "Domingo";
            break;
        case 1:
            dias = "Lunes";
            break;
        case 2:
            dias = "Martes";
             break;
        case 3:
            dias = "Miercoles";
             break;
        case 4:
            dias = "Jueves";
            break;
        case 5:
            dias = "Viernes";
            break;
        case 6:
            dias = "Sabado";
            break;
        default:
            "el dia seleccionado no se encuentra disponible seleccione entre 1 a 7"
            break;
    }
    return dias;
}
/**
 * obtiene el dia de la semana de la funcion dia()
 * @returns si el dia es laborable o fin de semana
 */
const compararDiasLaborales = () => { return dia() === "Lunes" ? "dia laboral" : 
    dia() === "martes" ? "dia laboral" : dia() === "Miercoles" ? "dia laboral" : 
    dia() === "Jueves"? "dia laboral" : dia() === "Viernes" ? "dia laboral" : "fin de semana";
}
/**
 * obtiene los datos de la funcion comcomparaValoresValidos() y se mandara a llamar con el boton calcula
 */
const mostrarResultado = () => {
    comparaValoresValidos();
}
