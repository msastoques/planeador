/**
 * Planeador MEDITA
 * @author msastoque
 * @since 25 de Octubre 2023
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

                body.replaceText('<<otras>>', planeador.otras);

                if (planeador.paradigma == "Convergente") {
                    body.replaceText('<c>', '✔');
                    body.replaceText('<d>', '');
                }
                else if (planeador.paradigma == "Divergente"){
                    body.replaceText('<c>', '');
                    body.replaceText('<d>', '✔');
                }
                else{
                    body.replaceText('<c>', '');
                    body.replaceText('<d>', '');
                }

                if (planeador.Habilidad1 != "") {
                    body.replaceText('<h1>', '✔');
                    body.replaceText('<<habilidad1>>', planeador.Habilidad1);
                }
                else {
                    body.replaceText('<h1>', '');
                    body.replaceText('<<habilidad1>>', '');
                }

                if (planeador.Habilidad2 != "") {
                    body.replaceText('<h2>', '✔');
                    body.replaceText('<<habilidad2>>', planeador.Habilidad2);
                }
                else {
                    body.replaceText('<h2>', '');
                    body.replaceText('<<habilidad2>>', '');
                }
                
                if (planeador.Habilidad3 != "") {
                    body.replaceText('<h3>', '✔');
                    body.replaceText('<<habilidad3>>', planeador.Habilidad3);
                }
                else {
                    body.replaceText('<h3>', '');
                    body.replaceText('<<habilidad3>>', '');
                }

                if (planeador.Seguimiento1 != "") {
                    body.replaceText('<s1>', '✔');
                    body.replaceText('<<seguimiento1>>', planeador.Seguimiento1);
                }
                else {
                    body.replaceText('<s1>', '');
                    body.replaceText('<<seguimiento1>>', '');
                }

                if (planeador.Seguimiento2 != "") {
                    body.replaceText('<s2>', '✔');
                    body.replaceText('<<seguimiento2>>', planeador.Seguimiento2);
                }
                else {
                    body.replaceText('<s2>', '');
                    body.replaceText('<<seguimiento2>>', '');
                }

                if (planeador.Seguimiento3 != "") {
                    body.replaceText('<s3>', '✔');
                    body.replaceText('<<seguimiento3>>', planeador.Seguimiento3);
                }
                else {
                    body.replaceText('<s3>', '');
                    body.replaceText('<<seguimiento3>>', '');
                }

                if (planeador.Herramientas1 != "") {
                    body.replaceText('<d1>', '✔');
                    body.replaceText('<<herramienta1>>', planeador.Herramientas1);
                }
                else {
                    body.replaceText('<d1>', '');
                    body.replaceText('<<herramienta1>>', '');
                }

                if (planeador.Herramientas2 != "") {
                    body.replaceText('<d2>', '✔');
                    body.replaceText('<<herramienta2>>', planeador.Herramientas2);
                }
                else {
                    body.replaceText('<d2>', '');
                    body.replaceText('<<herramienta2>>', '');
                }

                if (planeador.Herramientas3 != "") {
                    body.replaceText('<d3>', '✔');
                    body.replaceText('<<herramienta3>>', planeador.Herramientas3);
                }
                else {
                    body.replaceText('<d3>', '');
                    body.replaceText('<<herramienta3>>', '');
                }

                if (planeador.momento1 != "") {
                    body.replaceText('<m1>', '✔');
                    body.replaceText('<<momento1>>', planeador.momento1);
                }
                else {
                    body.replaceText('<m1>', '');
                    body.replaceText('<<momento1>>', '');
                }
                

                if (planeador.momento2 != "") {
                    body.replaceText('<m2>', '✔');
                    body.replaceText('<<momento2>>', planeador.momento2);
                }
                else {
                    body.replaceText('<m2>', '');
                    body.replaceText('<<momento2>>', '');
                }
                

                if (planeador.momento3 != "") {
                    body.replaceText('<m3>', '✔');
                    body.replaceText('<<momento3>>', planeador.momento3);
                }
                else {
                    body.replaceText('<m3>', '');
                    body.replaceText('<<momento3>>', '');
                }
                

                if (planeador.diseno1 != "") {
                    body.replaceText('<ñ1>', '✔');
                    body.replaceText('<<diseño1>>', planeador.diseno1);
                }
                else {
                    body.replaceText('<ñ1>', '');
                    body.replaceText('<<diseño1>>', '');
                }
                

                if (planeador.diseno2 != "") {
                    body.replaceText('<ñ2>', '✔');
                    body.replaceText('<<diseño2>>', planeador.diseno2);
                }
                else {
                    body.replaceText('<ñ2>', '');
                    body.replaceText('<<diseño2>>', '');
                }
                

                if (planeador.diseno3 != "") {
                    body.replaceText('<ñ3>', '✔');
                    body.replaceText('<<diseño3>>', planeador.diseno3);
                }
                else {
                    body.replaceText('<ñ3>', '');
                    body.replaceText('<<diseño3>>', '');
                }

                if (planeador.pregunta1 != "") {
                    body.replaceText('<g1>', '✔');
                    body.replaceText('<<pregunta1>>', planeador.pregunta1);
                }
                else {
                    body.replaceText('<g1>', '');
                    body.replaceText('<<pregunta1>>', '');
                }

                if (planeador.pregunta2 != "") {
                    body.replaceText('<g2>', '✔');
                    body.replaceText('<<pregunta2>>', planeador.pregunta2);
                }
                else {
                    body.replaceText('<g2>', '');
                    body.replaceText('<<pregunta2>>', '');
                }

                if (planeador.pregunta3 != "") {
                    body.replaceText('<g3>', '✔');
                    body.replaceText('<<pregunta3>>', planeador.pregunta3);
                }
                else {
                    body.replaceText('<g3>', '');
                    body.replaceText('<<pregunta3>>', '');
                }

                body.replaceText('<<observaciones>>', planeador.observaciones);
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







