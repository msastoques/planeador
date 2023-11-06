/**
 * Clase que representa un planeador educativo.
 */
class PlaneadorModel {
  /**
  * Crea una nueva instancia de Planeador.
  */
  constructor() {
    this._estado;
    this._grado = 0;
    this._periodo = '';
    this._semanas = 0;
    this._pregunta = '';
    this._inicio = '';
    this._desarrollo = '';
    this._cierre = '';
    this._tema = '';
    this._desempeno = '';
    this._indicador = '';
    this._actividades = '';
    this._escrita = false;
    this._tarea = false;
    this._interactiva = false;
  }

  get estado() {
    return this._estado;
  }

  set estado(valor) {
    this._estado = valor;
  }
    /**
   * Obtiene el grado al que se aplica el planeador.
   * @returns {number} - El grado.
   */
  get grado() {
    return this._grado;
  }
  /**
   * Establece el grado al que se aplica el planeador.
   * @param {number} valor - El grado a establecer.
   */
  set grado(valor) {
    this._grado = valor;
  }

  get periodo() {
    return this._periodo;
  }

  set periodo(valor) {
    this._periodo = valor;
  }

  get semanas() {
    return this._semanas;
  }

   set semanas(valor) {
    this._semanas = valor;
  }

  get pregunta() {
    return this._pregunta;
  }

  set pregunta(valor) {
    this._pregunta = valor;
  }

  get inicio() {
    return this._inicio;
  }

  set inicio(valor) {
    this._inicio = valor;
  }

  get desarrollo() {
    return this._desarrollo;
  }

  set desarrollo(valor) {
    this._desarrollo = valor;
  }

  get cierre() {
    return this._cierre;
  }

  set cierre(valor) {
    this._cierre = valor;
  }

  get tema() {
    return this._tema;
  }

  set tema(valor) {
    this._tema = valor;
  }

  get desempeno() {
    return this._desempeno;
  }

  set desempeno(valor) {
    this._desempeno = valor;
  }

  get indicador() {
    return this._indicador;
  }

  set indicador(valor) {
    this._indicador = valor;
  }

  get actividades() {
    return this._actividades;
  }

  set actividades(valor) {
    this._actividades = valor;
  }

  get escrita() {
    return this._escrita;
  }

  set escrita(valor) {
    this._escrita = valor;
  }  

  get tarea() {
    return this._tarea;
  }

   set tarea(valor) {
    this._tarea = valor;
  }

 
  get interactiva() {
    return this._interactiva;
  }

   set interactiva(valor) {
    this._interactiva = valor;
  }
  
}

// Ejemplo de uso:
// const planeador = new Planeador();
// planeador.grado = '5to Grado';
// planeador.periodo = 'Primer Periodo';
// planeador.semanas = 4;
// planeador.pregunta = '¿Cómo funciona la fotosíntesis?';
// planeador.inicio = 'Introducción a la fotosíntesis';
// planeador.desarrollo = 'Experimentos y demostraciones en el aula';
// planeador.cierre = 'Resumen y discusión';
// planeador.tema = 'Biología - Fotosíntesis';
// planeador.desempeno = 'Evaluar la comprensión del proceso';
// planeador.indicador = 'Medición de la tasa de fotosíntesis';
// planeador.actividades = 'Lecturas, ejercicios prácticos';
// planeador.escrita = true;
// planeador.tarea = true;
// planeador.interactiva = false;

// console.log(planeador);
