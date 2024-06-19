const { usersAll, newUser } = require("../controllers/User.controller");

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
    if ( !password || !name)
      return res.status(400).json({ message: "LOS CAMPOS DEBEN SER COMPLETADOS" });
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
  userNew,
  users,
};
