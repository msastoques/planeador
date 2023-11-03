/**
 * Retorna el literal de un número del 1 al 11.
 * @param {number} numero - El número entero a convertir en literal.
 * @returns {string} El literal correspondiente al número o "Número fuera de rango" si está fuera del rango válido.
 */
function literalNumero(numero) {
    var literales = [
      "Cero","Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve", "Diez", "Once"
    ];
  
    if (numero >= 0 && numero <= 11) {
      return literales[numero - 1];
    } else {
      return "Número fuera de rango";
    }
  }



  function reemplazarComasYEspaciosPorGuiones(texto) {
    // Utiliza la función replace con una expresión regular para reemplazar comas y espacios por guiones.
    const textoModificado = texto.replace(/[, ]/g, '-');
    return textoModificado;
  }

/**
 * Reemplaza comas y espacios por guiones en un texto.
 *
 * @param {string} texto - El texto original en el que se realizarán los reemplazos.
 * @returns {string} El texto modificado con comas y espacios reemplazados por guiones.
 */
function reemplazarComasYEspaciosPorGuiones(texto) {
  // Utiliza la función replace con una expresión regular para reemplazar comas y espacios por guiones.
  const textoModificado = texto.replace(/ y /g, '-').replace(/[, ]/g, '-').replace(/--/g, '-');
  return textoModificado;
}
//probar
// const textoOriginal = "1,2, 3 y 4";
// const textoModificado = reemplazarComasYEspaciosPorGuiones(textoOriginal);
// console.log(textoOriginal)
// console.log(textoModificado)

