import { Router } from 'express';
import { login, register} from './../controller/client.controller';

const app = Router();

app.post('/auth/register', register);
app.post('/auth/login', login)


export default app;