import nodemailer from nodemailer

const enviarcorreo = async ()=> {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
    port: 456,
    secure: true,
    auth: {
      user: 'sofiagibanez@gmail.com',
      pass: 'biyidvvwukrmuylq'
    }
        
    })




let info = await transporter.sendMail({
    from: '"sofia" sofiagibanez@gmail.com>',
    to: 'danielarebecaspampinato@gmail.com',
    subject: 'Reporte en PDF',
    text: 'Adjunto encontrarás el reporte en PDF.',

  });

  console.log('Correo enviado: %s', info.messageId);
}