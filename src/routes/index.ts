import { Application } from 'express';
import dotenv from 'dotenv';


import login from './login';
import usuario from './usuario';
import trabajo from './trabajo';
import empresa from './empresa';
import oferta from './oferta';
dotenv.config();
export default (app: Application) => {
    app.use('/api', login);
    app.use('/api', usuario);
    app.use('/api', trabajo);
    app.use('/api', empresa);
    app.use('/api', oferta);
}