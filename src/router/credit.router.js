import {Router} from 'express';
import {addCredit, getCredits, manageCredits} from '../controller/credit.controller'

const app = Router();

app.post('/credit/add', addCredit);
app.post('/credit/manage', manageCredits);
app.get('/credit/getAll', getCredits);



export default app;