import {Router} from 'express';
import { signUpUser, loginUser, logoutUser} from '../controllers/auth.controller.js';


const route = Router();

route.post('/signup', signUpUser)
route.get('/login', loginUser)
route.get('/logout', logoutUser)

export default route;