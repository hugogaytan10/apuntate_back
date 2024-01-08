import { Router } from 'express';
import { Controller } from '../controllers/login';
const routes = Router();
const controller = new Controller();

routes.post('/login',  controller.login);

export default routes;