import { NextFunction, Response, Request } from "express";
const jwt = require('jsonwebtoken');

class JWT {

    async checkJWT(req: Request, res: Response, next: NextFunction) {

        try {
            const accessToken = req.header('token');
            if (!accessToken) {
                return res.sendStatus(401); // Usar "return" para salir de la función después de enviar la respuesta
            }
            jwt.verify(accessToken, process.env.secret, (err: any, user: any) => {
                if (err) {
                    res.sendStatus(401);
                } else {
                    next();
                }
            });
        } catch (error) {
            return res.sendStatus(400);  // Usar "return" aquí también
        }
    }


}

const objJWT = new JWT();
export default objJWT;