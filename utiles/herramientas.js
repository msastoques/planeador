/**
 * Retorna el literal de un número del 1 al 11.
 * @param {number} numero - El número entero a convertir en literal.
 * @returns {string} El literal correspondiente al número o "Número fuera de rango" si está fuera del rango válido.
 */
function literalNumero(numero) {
    var literales = [
      "Cero","Primero", "Segundo", "Tercero", "Cuarto", "Quinto", "Sexto", "Séptimo", "Octavo", "Noveno", "Décimo", "Undécimo"
    ];
  
    if (numero >= 0 && numero <= 11) {
      return literales[numero];
      //return literales[numero - 1];
    } else {
      return "Número fuera de rango";
    }
  }



  function reemplazarComasYEspaciosPorGuiones(texto) {
    // Utiliza la función replace con una expresión regular para reemplazar comas y espacios por guiones.
    let textoModificado = texto.replace(/[, ]/g, '-');
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
try {
  let textoModificado = texto.replace(/ y /g, '-').replace(/[, ]/g, '-').replace(/--/g, '-');
  return textoModificado;
} catch (error) {
  return texto;
}

  
}
//probar
//function probar()
//{
//  const textoOriginal = "1,2, 3 y 4";
//  const textoModificado = reemplazarComasYEspaciosPorGuiones(textoOriginal);
//  console.log(textoOriginal)
//  console.log(textoModificado)
//}


/**
 * Genera un texto de fecha a partir de un objeto Date.
 * @param {Date} dateObj - Objeto Date del cual se generará el texto de fecha.
 * @param {string} [format] - Formato de fecha opcional (por defecto 'YYYY-MM-DD').
 * @returns {string} - Texto de fecha formateado.
 */
function formatDate(dateObj, format = 'YYYY-MM-DD') {
  if (!(dateObj instanceof Date)) {
    throw new Error('dateObj debe ser un objeto Date válido.');
  }

  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const day = String(dateObj.getDate()).padStart(2, '0');

  // Reemplazar las letras en el formato con la información de la fecha
  return format.replace('YYYY', year).replace('MM', month).replace('DD', day);
}

// Ejemplo de uso:
// const fechaActual = new Date();
// const fechaFormateada = formatDate(fechaActual, 'DD/MM/YYYY'); // Personaliza el formato según tus necesidades

// console.log(fechaFormateada); // Muestra la fecha formateada en la consola

/**
 * Formatea una fecha con el nombre del mes en lugar de su número.
 * @param {Date} dateObj - Objeto Date a formatear.
 * @returns {string} - Texto de fecha formateado con el mes en formato literal.
 */
function formatDateWithMonthName(dateObj) {
  if (!(dateObj instanceof Date)) {
    throw new Error('dateObj debe ser un objeto Date válido.');
  }

  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const year = dateObj.getFullYear();
  const month = monthNames[dateObj.getMonth()];
  const day = String(dateObj.getDate()).padStart(2, '0');

  return `${day} de ${month} de ${year}`;
}

// Ejemplo de uso:
// const fechaActual = new Date();
// const fechaFormateada = formatDateWithMonthName(fechaActual);

// console.log(fechaFormateada); // Muestra la fecha formateada en la consola

/**
 * Formatea una fecha con el nombre del día y el mes en formato literal.
 * @param {Date} dateObj - Objeto Date a formatear.
 * @returns {string} - Texto de fecha formateado con el día y mes en formato literal.
 */
function formatDateWithDayAndMonthName(dateObj) {
  if (!(dateObj instanceof Date)) {
    throw new Error('dateObj debe ser un objeto Date válido.');
  }

  const dayNames = [
    'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'
  ];

  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const day = dayNames[dateObj.getDay()];
  const month = monthNames[dateObj.getMonth()];
  const dayOfMonth = dateObj.getDate();
  const year = dateObj.getFullYear();

  return `${day} ${dayOfMonth} de ${month} de ${year}`;
}

// Ejemplo de uso:
// const fechaActual = new Date();
// const fechaFormateada = formatDateWithDayAndMonthName(fechaActual);

// console.log(fechaFormateada); // Muestra la fecha formateada en la consola


