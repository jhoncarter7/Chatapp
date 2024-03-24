import express from "express"
import {getUserForSideBar} from  "../controllers/user.controller.js"
import verifyjwt from "../middlewares/jwtVerify.js"

const router = express.Router()

router.get("/", verifyjwt ,getUserForSideBar)

export default router