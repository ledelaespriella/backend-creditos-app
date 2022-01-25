import { Router } from 'express';
import {
    register,
    login,
    update,
    remove,
    getUser,
    solicitarCredito
} from '../controller/user.controller';

import { authMiddleware } from './../middleware/auth.middleware';

const app = Router();

app.post('/register', register);
app.post('/login', login);
app.get('/users', authMiddleware, getUser);
app.put('/login/:userId',authMiddleware ,update);
app.delete('/login/:userId', authMiddleware,remove);
app.post('/reqCredit',authMiddleware, solicitarCredito);


export default app;