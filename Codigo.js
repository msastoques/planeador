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
    //obteber planeador-plantilla
    const plantilla = DriveApp.getFileById('1xhr4df2XdAXws9ghTIxqdHzJ0A1oI-WatCyzGRDqcRw');

    let fila = 2;
    
    let hojaActual = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    let rango = hojaActual.getRange('A' + fila + ':Z' + fila);

    
    let celda = rango.getCell(1, 1); // getCell(1,1) retorna A2
    

    //lista de variables para combinar correspondencia
    let estado ;
    let grado  ;
    let periodo;
    let semanas;



    while(!celda.isBlank()){
        //obtener todos los datos de la fila
        estado  = rango.getCell(1, 1).getValue();
        grado   = rango.getCell(1, 2).getValue();
        periodo = rango.getCell(1, 3).getValue();
        semanas = rango.getCell(1, 4).getValue();

        if(estado == 'Impreso')continue;

        rango.getCell(1, 1).setValue('Impreso');

        //Creamos documento copia de la plantilla
        const docNuevo = plantilla.makeCopy(grado + '-planeador-tecnologia-e-informatica-periodo-' + periodo + '-semanas-' + reemplazarComasYEspaciosPorGuiones(semanas));
        const documento = DocumentApp.openById(docNuevo.getId());
        const body = documento.getBody();

        //obtener y reemplazar datos

        //siguiente fila
        fila++;
        rango = hojaActual.getRange('A' + fila + ':Z' + fila);        
        celda = rango.getCell(1, 1);
    }

}

//funciones de prueba

//traer el número de columnas de un rango
function getNumCol() {

    DriveApp.getFileById('1xhr4df2XdAXws9ghTIxqdHzJ0A1oI-WatCyzGRDqcRw');
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[0];
    
    var range = sheet.getRange("B2:D5");
    Logger.log(range.getNumColumns());
}



