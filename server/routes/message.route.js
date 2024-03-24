import  express  from "express"
import { sendMessages, getMessages } from "../controllers/message.controller.js"
import verifyjwt  from "../middlewares/jwtVerify.js"

const router = express.Router()

router.get('/:id', verifyjwt, getMessages)
router.post('/send/:id', verifyjwt, sendMessages)


export default router