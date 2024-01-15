import { Request, Response } from "express";
import Trabajo from "../models/trabajo";

const trabajoModel = new Trabajo();

export class Controller {
    //retorna 10 trabajos al usuario que busca trabajo
    async conseguirTrabajos(req: Request, res: Response) {
        try {
            const trabajos = await trabajoModel.conseguirTrabajos();
            res.status(200).json(trabajos);
        } catch (error) {
            res.status(400).json(error);
        }
    }
    //conseguir trabajo por rangos
    async conseguirTrabajosPorRango(req: Request, res: Response) {
        try {
            const trabajos = await trabajoModel.conseguirTrabajosRango(req.body.inicio, req.body.fin);
            res.status(200).json(trabajos);
        } catch (error) {
            res.status(400).json(error);
        }
    }
    //retorna los trabajos de una empresa
    async conseguirTrabajosCreados(req: Request, res: Response) {
        try {
            const trabajos = await trabajoModel.conseguirTrabajosCreados(req.body.EmpresaId);
            res.status(200).json(trabajos);
        } catch (error) {
            res.status(400).json(error);
        }
    }
    //agrega un trabajo
    async agregarTrabajo(req: Request, res: Response) {
        try {
            const trabajo = await trabajoModel.agregarTrabajo(req.body);
            res.status(200).json(trabajo);
        } catch (error) {
            res.status(400).json(error);
        }
    }
    //actualiza un trabajo
    async actualizarTrabajo(req: Request, res: Response) {
        try {
            const trabajo = await trabajoModel.actualizarTrabajo(req.body);
            res.status(200).json(trabajo);
        } catch (error) {
            res.status(400).json(error);
        }
    }
    // da de baja un trabajo
    async eliminarTrabajo(req: Request, res: Response) {
        try {
            const trabajo = await trabajoModel.eliminarTrabajo(req.body.Id);
            res.status(200).json(trabajo);
        } catch (error) {
            res.status(400).json(error);
        }
    }
    //buscar ciudades de los trabajos
    async buscarCiudades(req: Request, res: Response) {
        try {
            const trabajo = await trabajoModel.buscarCiudades();
            res.status(200).json(trabajo);
        } catch (error) {
            res.status(400).json(error);
        }
    }
    //buscar trabajo con texto
    async buscarTrabajo(req: Request, res: Response) {
        try {
            const trabajo = await trabajoModel.buscarTrabajoConTexto(req.body.texto);
            res.status(200).json(trabajo);
        } catch (error) {
            res.status(400).json(error);
        }
    }
    //busccar trabajo con texto y ciudad 
    async buscarTrabajoConTextoYCiudad(req: Request, res: Response) {
        try {
            const trabajo = await trabajoModel.buscarTrabajoConTextoYCiudad(req.body.texto, req.body.ciudad);
            res.status(200).json(trabajo);
        } catch (error) {
            res.status(400).json(error);
        }
    }
    //buscar trabajo por ciudad y estatus activo
    async buscarTrabajoConCiudad(req: Request, res: Response) {
        try {
            const trabajo = await trabajoModel.buscarTrabajoPorCiudad(req.body.ciudad);
            res.status(200).json(trabajo);
        } catch (error) {
            res.status(400).json(error);
        }
    }
}