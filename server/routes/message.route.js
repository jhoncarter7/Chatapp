import  express  from "express"
import { sendMessages } from "../controllers/message.controller.js"
import verifyjwt  from "../middlewares/jwtVerify.js"

const router = express.Router()

router.post('/send/:id', verifyjwt, sendMessages)


export default router