import { Router } from "express";
import { Controller } from "../controllers/empresa";
import  checkJwt  from "../middleware/jwt";
const routes = Router();
const controller = new Controller();

routes.post('/empresa/agregar',   controller.agregarEmpresa);
routes.post('/empresa/actualizar', checkJwt.checkJWT, controller.actualizarEmpresa);
export default routes;