const {Router} =  require('express')
const { userNew,users,protected} = require("../handlers/users.handlers")

const userRouter = Router();


userRouter.post ('/',userNew)
userRouter.get("/",users)
userRouter.get('/protected',protected)
module.exports = userRouter;