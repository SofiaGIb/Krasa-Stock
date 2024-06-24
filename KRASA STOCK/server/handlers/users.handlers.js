const { usersAll, newUser,protejida } = require("../controllers/User.controller");


const {schema} = require ('../validation')
const {z} = require('zod')

const protected = async (req,res) => {

}
//!..........................................
const users = async (req, res) => {
  try {
    const users = await usersAll(req, res);
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

//!................................................

const userNew = async (req, res) => {

  try {
    const {  password, name } = req.body;
    try {
      schema.parse({ name, password });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      return res.status(500).json({ message: "Error de validación", error });
    }
    const nuevoUsuario = await newUser(name,password);
    if(nuevoUsuario.message === "Usuario ya registrado"){
      return res.status(400).json({message :"Usuario ya registrado"})
    };
   
   
  
    res.status(200).json({ message: "Usuario creado" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  protected,
  userNew,
  users,
};
