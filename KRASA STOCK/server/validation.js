
const {z} = require ('zod');
const schema = z.object({
    name : z.string().min(4,{message:'El nombre debe tener minimo 4 letras'}),
    password: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
});

module.exports ={schema};