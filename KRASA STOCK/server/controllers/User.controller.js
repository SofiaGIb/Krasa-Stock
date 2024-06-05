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

const newUser = async (name,password,email) => {
    console.log(password);
    try {
        const salt = await bcrypt.genSalt(5);
        const hashPassword = await bcrypt.hash(password,salt)
        console.log(hashPassword);
    const verify = await prisma.user.findUnique({
        where:{
            email:email
        }
    });
    return verify
            ? { message: "Usuario ya registrado" }
            : await prisma.user.create({
                data: {
                    password: hashPassword,
                    email: email,
                    name: name
                }
            });
            //$2b$05$nsQe8Zs31woRMoOHkrjAx.z3bincvxZrsG2w9THy1y0wzQOP6fWga
            //carmela $2b$05$uZ2FSgtRdVvOi0TR2eHZeeOksAAzgbYl0OXEU0kd7fZc7mDGboAG6
    } catch (error) {
        console.log({ error });
        return { message: "Error al crear el usuario", error };
    }
}
module.exports = {
    newUser, usersAll
}