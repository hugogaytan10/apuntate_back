import { Request, Response } from "express";
import Users from "../models/usuario";

const usuario = new Users();

export class Controller {
    async agregarUsuario(req: Request, res: Response) {
        try {
            const newUsuario = await usuario.agregarUsuario(req.body);
            res.status(200).json(newUsuario);
        } catch (error) {
            res.status(400).json(error);
        }
    }  
    async actualizarUsuario(req: Request, res: Response) {
        try {
            const newUsuario = await usuario.actualizarUsuario(req.body);
            res.status(200).json(newUsuario);
        } catch (error) {
            res.status(400).json(error);
        }
    }                       
    async InformacionUsuarioPostulado(req: Request, res: Response) {
        try {
            const newUsuario = await usuario.conseguirInformacionUsuario(req.body.id);
            res.status(200).json(newUsuario);
        } catch (error) {
            res.status(400).json(error);
        }
    }                                                          
}