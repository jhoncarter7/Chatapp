import {Router} from 'express';
import { signUpUser, loginUser, logoutUser} from '../controllers/auth.controller.js';


const router = Router();

router.post('/signup', signUpUser)
router.post('/login', loginUser)
router.get('/logout', logoutUser)

export default router;