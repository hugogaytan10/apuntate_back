import { Router } from "express";
import { Controller } from "../controllers/trabajo";
import checkJwt from "../middleware/jwt";
const routes = Router();
const controller = new Controller();
routes.get('/trabajos', controller.conseguirTrabajos);
routes.post('/trabajo/buscar', controller.buscarTrabajo);
routes.post('/trabajos', checkJwt.checkJWT, controller.conseguirTrabajosCreados);
routes.post('/trabajo/agregar', checkJwt.checkJWT, controller.agregarTrabajo);
routes.post('/trabajo/actualizar', checkJwt.checkJWT, controller.actualizarTrabajo);
routes.post('/trabajo/eliminar', checkJwt.checkJWT, controller.eliminarTrabajo);

export default routes;