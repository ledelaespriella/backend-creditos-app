import { Router } from "express";
import { register, login, getAdmin, update } from "../controller/admin.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const app = Router();

app.post('/admin/register', register);
app.post('/admin/login', login);
app.post('/admin/:id', update);
app.get('/admin/get', authMiddleware, getAdmin);


export default app;