/**
 * Planeador MEDITA
 * @author msastoque
 * @since 25 de Octubre 2022
 */

function onOpen() {
    SpreadsheetApp.getUi().createMenu('Eugenio')
        .addItem('Herramienta Planeador MEDITA', 'mostrarBarraLateral')
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
        const plantilla = getPlantilla();

        let fila = 2;

        // let hojaActual = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
        // let rango = hojaActual.getRange('A' + fila + ':AD' + fila);
        //creamos instancia del la Clase GestorPlaneador
        const gestor = new GestorPlaneador();
        let planeador = gestor.getDatos(2);

        let celda = planeador.grado; // getCell(1,1) retorna A2
        let estado;
        let grado;
        let periodo;
        let semanas;

        let carpeta = getCarpeta();

        let contadorDocumentos = 0;

        while (celda != '') {

            estado = planeador.estado;

            if (estado != true) {
                //obtener todos los datos de la fila
                grado = planeador.grado;
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

                if (planeador.escrita == true) {
                    body.replaceText('<e>', '✔');
                }
                else {
                    body.replaceText('<e>', '');
                }

                if (planeador.tarea == true) {
                    body.replaceText('<t>', '✔');
                }
                else {
                    body.replaceText('<t>', '');
                }

                if (planeador.interactiva == true) {
                    body.replaceText('<i>', '✔');
                }
                else {
                    body.replaceText('<i>', '');
                }


                // body.replaceText('<<otras>>', rango.getCell(1, 16).getValue());

                // body.replaceText('<c>', rango.getCell(1, 9).getValue());
                // body.replaceText('<d>', rango.getCell(1, 9).getValue());



                //convertir a pdf y guardar en carpeta

                documento.saveAndClose();

                let docPdf = documento.getAs('application/pdf');
                docPdf.setName(documento.getName() + '.pdf');
                docNuevo.moveTo(carpeta)
                DriveApp.createFile(docPdf).moveTo(carpeta);

                //#region enviar correos
                // let destinatario = 'msastoque@cips.edu.co';
                // let asunto = 'aquí el asunto del correo';
                // let cuerpo = 'aquí el contenido';
                // GmailApp.sendEmail(destinatario, asunto, cuerpo, { attachments: [docPdf] })

                //#endregion

                contadorDocumentos++;
            }


            //siguiente fila
            fila++;
            planeador = gestor.getDatos(fila);
            celda = planeador.grado;
        }
        //Mensaje final
        if (contadorDocumentos > 0) {

            ui.alert('Se han generado ' + contadorDocumentos + ' documentos y sus pdfs')
        }
        else {
            ui.alert('No se han generado documentos')
        }

    } else {
        ui.alert('Se ha cancelado la generación de documentos')
    }

    //metodo 1 ok Habilitar el botón de la barra lateral cargando nuevamente la barra lateral.
    //mostrarBarraLateral();

    //metodo 2 no ok Habilitar el botón de la barra lateral con un return
    return{};

    //
}







