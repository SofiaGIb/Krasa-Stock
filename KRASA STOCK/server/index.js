const {enviarcorreo} = require ('./nodemailer/nodemailer')
const app = require ("./app")
const port = 3001;

app.get("/",(req,res)=>{res.send("hola mundo")})
app.listen(port,async () => {
    console.log(`Server is listening at http://localhost:${port}`);
    try {
        await enviarcorreo();
      } catch (error) {
        console.error('Error al enviar el correo:', error);
      }
    });