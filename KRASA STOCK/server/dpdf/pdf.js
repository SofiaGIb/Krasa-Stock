const {jsPDF} = require("jspdf");



const doc = new jsPDF();

doc.text ("prueba DE ENVIO " ,10,10);
doc.save ("a4.pdf");




