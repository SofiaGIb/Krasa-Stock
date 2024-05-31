import { jsPDF } from "jspdf";

function envioMailPdf(stock) {

  const doc = new jsPDF();
  doc.text(stock, 10, 10);
  doc.save("a4.pdf");
}

export default envioMailPdf;



