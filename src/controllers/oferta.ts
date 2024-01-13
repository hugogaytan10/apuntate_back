import { Request, Response } from "express";
import Ofertas from "../models/oferta";

const oferta = new Ofertas();

export class Controller {
    async agregarOferta(req: Request, res: Response) {
        try {
            const newOferta = await oferta.agregarOferta(req.body);
            res.status(200).json(newOferta);
        } catch (error) {
            res.status(400).json(error);
        }
    }
    async conseguirOfertas(req: Request, res: Response) {
        try {
            const newOferta = await oferta.conseguirOfertas(req.body.id);
            res.status(200).json(newOferta);
        } catch (error) {
            res.status(400).json(error);
        }
    }
    async quitarOferta(req: Request, res: Response) {
        try {
            const removeOferta = await oferta.quitarOferta(req.body.UsuarioId, req.body.TrabajoId);
            res.status(200).json(removeOferta);
        } catch (error) {
            res.status(400).json(error);
        }
    }
}

