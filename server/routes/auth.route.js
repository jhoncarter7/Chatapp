import {Router} from 'express';
import { signUpUser, loginUser, logoutUser} from '../controllers/auth.controller.js';


const route = Router();

route.post('/signup', signUpUser)
route.post('/login', loginUser)
route.get('/logout', logoutUser)

export default route;