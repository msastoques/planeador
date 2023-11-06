/**
 * Clase que trae los daros de la hoja de cálculo.
 */
class GestorPlaneador {
  constructor() {
    this._planeadorModel = new PlaneadorModel();
    this._hojaActual = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

  }

  getDatos(fila) {
    const rango = this._hojaActual.getRange('A' + fila + ':AD' + fila);
    
    this._planeadorModel.estado = rango.getCell(1, 1).getValue();
    this._planeadorModel.grado = rango.getCell(1, 2).getValue();
    this._planeadorModel.periodo = rango.getCell(1, 3).getValue();
    this._planeadorModel.semanas = rango.getCell(1, 4).getValue();
    this._planeadorModel.pregunta = rango.getCell(1, 5).getValue();
    this._planeadorModel.inicio = rango.getCell(1, 6).getValue();
    this._planeadorModel.desarrollo = rango.getCell(1, 7).getValue();
    this._planeadorModel.cierre = rango.getCell(1, 8).getValue();
    this._planeadorModel.tema = rango.getCell(1, 9).getValue();
    this._planeadorModel.desempeno = rango.getCell(1, 10).getValue();
    this._planeadorModel.indicador = rango.getCell(1, 11).getValue();
    this._planeadorModel.actividades = rango.getCell(1, 12).getValue();
    this._planeadorModel.escrita = rango.getCell(1, 13).getValue();
    this._planeadorModel.tarea = rango.getCell(1, 14).getValue();
    this._planeadorModel.interactiva = rango.getCell(1, 15).getValue();
    this._planeadorModel.otras = rango.getCell(1, 16).getValue();

    //chequear que el documento fue creado
    const estado = this._planeadorModel.estado;
    const grado = this._planeadorModel.grado;

    if (estado != true && grado != "") {

      const fechaActual = new Date();
      const fechaFormateada = formatDateWithDayAndMonthName(fechaActual);

      rango.getCell(1, 30).setValue(fechaFormateada)
      rango.getCell(1, 1).insertCheckboxes();
      rango.getCell(1, 1).setValue('true');
    }

    return this._planeadorModel;
  }
}


//#region prueba

// function prueba() {
//  const gestor = new GestorPlaneador();

//   let planeador = gestor.getDatos(3);

//   Logger.log(planeador.grado)
// }

//#endregion


