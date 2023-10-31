/**
 * Planeador MEDITA
 * @author msastoque
 * @since 25 de Octubre 2022
 */

function onOpen() {
    SpreadsheetApp.getUi().createMenu('Eugenio')
    .addItem('Herramienta Planeador MEDITA','mostrarBarraLateral')
    .addToUi();
}

function mostrarBarraLateral() {
    let ui = HtmlService.createHtmlOutputFromFile('BarraLaterlal').setTitle('Herramienta Planeador MEDITA');
    SpreadsheetApp.getUi().showSidebar(ui);
}

function generarDocumentos() {
    let hojaActual = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
}



