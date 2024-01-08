import { Request, Response } from "express";
import Empresas from "../models/empresa";

const empresa = new Empresas();

export class Controller {
    async agregarEmpresa(req: Request, res: Response) {
        try {
            const newempresa = await empresa.agregarempresa(req.body);
            res.status(200).json(newempresa);
        } catch (error) {
            res.status(400).json(error);
        }
    }  
    async actualizarEmpresa(req: Request, res: Response) {
        try {
            const newempresa = await empresa.actualizarempresa(req.body);
            res.status(200).json(newempresa);
        } catch (error) {
            res.status(400).json(error);
        }
    }                                                                                 
}