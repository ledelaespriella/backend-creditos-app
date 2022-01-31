import { Router } from 'express';
import {
    register,
    login,
    update,
    remove,
    getUser
} from '../controller/user.controller';
import { authMiddleware } from "../middleware/auth.middleware";

const app = Router();

app.post('/final/register', register);
app.post('/final/login', login);
app.get('/final/get', authMiddleware ,getUser);
app.put('/final/:userId', update);
app.delete('/login/:userId', remove);


export default app;