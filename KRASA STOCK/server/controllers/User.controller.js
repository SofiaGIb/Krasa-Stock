const {PrismaClient} = require ("@prisma/client");
const prisma = new PrismaClient();


const  usersAll = async (req,res) =>{
 try {
    const users = await prisma.user.findMany({});
    res.status(200).json(users);
 } catch (error) {
    console.log(error);
 }
};

//!.........................................................

const newUser = async (password,email,name) => {
   try {
    const userNew = await prisma.user.create({
data :{
    password:password,
    email:email,
    name:name
},
    }) 
   } catch (error) {
    console.log({error});
   }

}

module.exports = {
    newUser, usersAll
}