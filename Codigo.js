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

    //ventana alerta para verificar la creacion de documentos
    let ui = SpreadsheetApp.getUi();
    let respuesta = ui.alert('Generador de documentos. Pulsa Si para continuar', ui.ButtonSet.YES_NO);
    if (respuesta == ui.Button.YES) {
    //obteber planeador-plantilla
    const plantilla = DriveApp.getFileById('1xhr4df2XdAXws9ghTIxqdHzJ0A1oI-WatCyzGRDqcRw');

    let fila = 2;
    
    // let hojaActual = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    // let rango = hojaActual.getRange('A' + fila + ':AD' + fila);
    //creamos instancia del la Clase GestorPlaneador
    const gestor = new GestorPlaneador();
    let planeador = gestor.getDatos(2);
    
    let celda = planeador.grado; // getCell(1,1) retorna A2
    let estado;
    let grado  ;
    let periodo;
    let semanas;    

    let carpeta = DriveApp.getFolderById('1d2q17bN0WMrp56anzZjENQQsDmkk6oqT');

    while(celda != ''){
       
        estado  = planeador.estado;    

        if(estado != true){
            //obtener todos los datos de la fila
            grado   = planeador.grado;
            periodo = planeador.periodo;
            semanas = planeador.semanas;

            //Creamos documento copia de la plantilla
            const docNuevo = plantilla.makeCopy(grado + '-planeador-tecnologia-periodo-' + periodo + '-semanas-' + reemplazarComasYEspaciosPorGuiones(semanas));
            const documento = DocumentApp.openById(docNuevo.getId());
            const body = documento.getBody();

            //Reemplazar datos            
            body.replaceText('<<grado>>', literalNumero(grado));
            body.replaceText('<<periodo>>', periodo);
            body.replaceText('<<semanas>>', semanas);
            body.replaceText('<<pregunta>>', planeador.pregunta);
            body.replaceText('<<inicio>>', planeador.inicio);
            body.replaceText('<<desarrollo>>', planeador.desarrollo);
            body.replaceText('<<cierre>>', planeador.cierre);
            body.replaceText('<<tema>>', planeador.tema);
            body.replaceText('<<desempeño>>', planeador.desempeno);
            body.replaceText('<<indicador>>', planeador.indicador);
            body.replaceText('<<actividad>>', planeador.actividades);

            // body.replaceText('<e>', rango.getCell(1, 13).getValue());
            // body.replaceText('<t>', rango.getCell(1, 14).getValue());
            // body.replaceText('<i>', rango.getCell(1, 15).getValue());

            // body.replaceText('<<otras>>', rango.getCell(1, 16).getValue());

            // body.replaceText('<c>', rango.getCell(1, 9).getValue());
            // body.replaceText('<d>', rango.getCell(1, 9).getValue());

       

            //convertir a pdf y guardar en carpeta

            documento.saveAndClose();

                let docPdf = documento.getAs('application/pdf');
                docPdf.setName(documento.getName() + '.pdf');
                docNuevo.moveTo(carpeta)
                DriveApp.createFile(docPdf).moveTo(carpeta);               
            }
            

            //siguiente fila
            fila++;
            planeador = gestor.getDatos(fila);
            celda = planeador.grado;
    }

        ui.alert('Documentos generados correctamente')
    } else {
        ui.alert('Se ha cancelado la generación de documentos')
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



