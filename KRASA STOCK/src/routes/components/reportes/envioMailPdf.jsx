import React from 'react';
import {jsPDF} from 'jspdf';


function envioMailPdf() {

    
    
    const doc = new jsPDF();
    doc.texto('prueba recibida',10,10);
    doc.guardar ("a4.pdf");
    //!.....................................................................................................
    
  return (
    <div>
      
    </div>
  )
}

export default envioMailPdf
