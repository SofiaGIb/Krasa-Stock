const {Router} =  require('express')
const { userNew,users} = require("../handlers/users.handlers")

const userRouter = Router();


userRouter.post ('/',userNew)
userRouter.get("/",users)
module.exports = userRouter;