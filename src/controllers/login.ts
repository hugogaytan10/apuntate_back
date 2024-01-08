import { Request, Response } from "express";
import Login from "../models/login";

const loginModel = new Login();
export class Controller {
    async login(req: Request, res: Response) {
        try {
            const newLogin = await loginModel.login(req.body.Email, req.body.Contrasenia);
            res.status(200).json(newLogin);
        } catch (error) {
            res.status(400).json(error);
        }
    }
}