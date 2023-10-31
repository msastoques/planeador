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