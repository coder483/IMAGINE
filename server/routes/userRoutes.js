import express from 'express'
import {registerUser,loginUser, userCredits} from "../controllers/userController.js"
import userAuth from '../middlewares/auth.js'


const userRouter = express.Router()

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.get('/credits',userAuth,userCredits)

export default userRouter

//http://localhost:8080/api/user/registerUser
//http://localhost:8080/api/user/login
//http://localhost:8080/api/image/generate-image