import { Router } from 'express';
import {
    addCredit,
    getCredits,
    manageCredits,
    getCreditById,
    remove
} from '../controller/credit.controller'

const app = Router();

app.post('/credit/', addCredit);
app.put('/credit/:creditId', manageCredits);
app.get('/credit/getAll', getCredits);
app.get('/credit/:creditId', getCreditById);
app.delete('/credit/:creditId', remove);



export default app;