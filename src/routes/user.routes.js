import { Router } from 'express';
import {
    register,
    login,
    update,
    remove,
    getUser
} from '../controller/user.controller';

const app = Router();

app.post('/register', register);
app.post('/login', login);
app.get('/users', getUser);
app.put('/login/:userId', update);
app.delete('/login/:userId', remove);


export default app;