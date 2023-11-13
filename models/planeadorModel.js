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
    this._paradigma = '';
    this._otras = '';
    this._Habilidad1 = "";
    this._Habilidad2 = "";
    this._Habilidad3 = "";
    this._Seguimiento1 = "";
    this._Seguimiento2 = "";
    this._Seguimiento3 = "";
    this._Herramientas1 = "";
    this._Herramientas2 = "";
    this._Herramientas3 = "";
    this._momento1 = '';
    this._momento2 = '';
    this._momento3 = '';
    this._diseno1 = '';
    this._diseno2 = '';
    this._diseno3 = '';
    this._pregunta1 = '';
    this._pregunta2 = '';
    this._pregunta3 = '';
    this._observaciones = ''
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

  get otras() {
    return this._otras;
  }

  set otras(valor) {
    this._otras = valor;
  }

  get paradigma() {
    return this._paradigma;
  }

  set paradigma(valor) {
    this._paradigma = valor;
  }

  get Habilidad1() {
    return this._Habilidad1;
  }
  set Habilidad1(valor) {
    this._Habilidad1 = valor;
  }

  get Habilidad2() {
    return this._Habilidad2;
  }
  set Habilidad2(valor) {
    this._Habilidad2 = valor;
  }

  get Habilidad3() {
    return this._Habilidad3;
  }
  set Habilidad3(valor) {
    this._Habilidad3 = valor;
  }

  get Seguimiento1() {
    return this._Seguimiento1;
  }
  set Seguimiento1(valor) {
    this._Seguimiento1 = valor;
  }

  get Seguimiento2() {
    return this._Seguimiento2;
  }
  set Seguimiento2(valor) {
    this._Seguimiento2 = valor;
  }

  get Seguimiento3() {
    return this._Seguimiento3;
  }
  set Seguimiento3(valor) {
    this._Seguimiento3 = valor;
  }

  get Herramientas1() {
    return this._Herramientas1;
  }
  set Herramientas1(valor) {
    this._Herramientas1 = valor;
  }

  get Herramientas2() {
    return this._Herramientas2;
  }
  set Herramientas2(valor) {
    this._Herramientas2 = valor;
  }

  get Herramientas3() {
    return this._Herramientas3;
  }
  set Herramientas3(valor) {
    this._Herramientas3 = valor;
  }

  get momento1() {
    return this._momento1;
  }

  set momento1(value) {
    this._momento1 = value;
  }

  get momento2() {
    return this._momento2;
  }

  set momento2(value) {
    this._momento2 = value;
  }

  get momento3() {
    return this._momento3;
  }

  set momento3(value) {
    this._momento3 = value;
  }

  get diseno1() {
    return this._diseno1;
  }

  set diseno1(value) {
    this._diseno1 = value;
  }

  get diseno2() {
    return this._diseno2;
  }

  set diseno2(value) {
    this._diseno2 = value;
  }

  get diseno3() {
    return this._diseno3;
  }

  set diseno3(value) {
    this._diseno3 = value;
  }

  get pregunta1() {
    return this._pregunta1;
  }

  set pregunta1(value) {
    this._pregunta1 = value;
  }

  get pregunta2() {
    return this._pregunta2;
  }

  set pregunta2(value) {
    this._pregunta2 = value;
  }

  get pregunta3() {
    return this._pregunta3;
  }

  set pregunta3(value) {
    this._pregunta3 = value;
  }

  get observaciones() {
    return this._observaciones;
  }

  set observaciones(value) {
    this._observaciones = value;
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
