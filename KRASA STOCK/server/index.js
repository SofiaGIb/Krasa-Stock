const app = require ("./app")
const port = 3001;

app.get("/",(req,res)=>{res.send("hola mundo")})
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
}); 