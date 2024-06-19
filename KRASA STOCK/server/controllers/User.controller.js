const {PrismaClient} = require ("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require ('bcrypt')


const  usersAll = async (req,res) =>{
 try {
    const users = await prisma.user.findMany({});
    res.status(200).json(users);
 } catch (error) {
    console.log(error);
 }
};

//!.........................................................

const newUser = async (name,password) => {
    try {
        const salt = await bcrypt.genSalt(5);
        const hashPassword = await bcrypt.hash(password,salt)
    const verify = await prisma.user.findUnique({
        where:{
            name:name
        }
    });
    //averiguar como no mandar toda la info del usuarios  
    //mover validaciones a un archivo aparte con una class
    return verify
            ? { message: "Usuario ya registrado" }
            : await prisma.user.create({
                data: {
                    password: hashPassword,
                    name: name
                }
            });
    } catch (error) {
        console.log({ error });
        return { message: "Error al crear el usuario", error };
    }
}
module.exports = {
    newUser, usersAll
}