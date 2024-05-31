const jsPDF = require("jspdf");



const doc = new jsPDF();

doc.text ("prueba DE ENVIO " ,10,10);
doc.save ("a4.pdf");




//necesito traer de la lista de productos ,los productois que tengan un stock menor a 
//10 y ponerlos en el pdf que luegop se enviara por email 