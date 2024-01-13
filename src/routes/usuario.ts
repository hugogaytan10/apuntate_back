import { Router } from "express";
import { Controller } from "../controllers/usuario";
import checkJwt from "../middleware/jwt";
const routes = Router();
const controller = new Controller();

routes.post('/usuario/agregar',  controller.agregarUsuario);
routes.post('/usuario/actualizar', checkJwt.checkJWT, controller.actualizarUsuario);
routes.post('/usuario/informacion', checkJwt.checkJWT, controller.InformacionUsuarioPostulado);
export default routes;