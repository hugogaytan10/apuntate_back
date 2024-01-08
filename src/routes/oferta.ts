import { Router } from "express";
import { Controller } from "../controllers/oferta";
import checkJwt from "../middleware/jwt";

const routes = Router();
const controller = new Controller();

routes.post('/oferta/agregar', checkJwt.checkJWT, controller.agregarOferta);
routes.post('/oferta/conseguir', checkJwt.checkJWT, controller.conseguirOfertas);
routes.post('/oferta/quitar', checkJwt.checkJWT, controller.quitarOferta);

export default routes;