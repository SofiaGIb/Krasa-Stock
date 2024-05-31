const { default: jsPDF } = require("jspdf")

import React from 'react'

export default function nodemailer() {

const tra = "elementos con  poco stock"

doc.text(10,10,tra);
doc.save('lista-productos')
  return (
    <div>
      <button onClick={crearpdf}>crear pdf </button>
    </div>
  )
}
