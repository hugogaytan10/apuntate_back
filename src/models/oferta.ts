import exp from 'constants';
import connection from '../services/mysql';

export interface IOferta {
    Id?: number;
    UsuarioId: number;
    TrabajoId: number;
}

class Ofertas {
    //relacionar un trabajo con un usuario
   agregarOferta(oferta: IOferta) {
        return new Promise(async (resolve, reject) => {
            connection.query(`insert into oferta (UsuarioId, TrabajoId) values (?,?)`,
                [oferta.UsuarioId, oferta.TrabajoId],
                async (err: any, results: any) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(results);
                }
            );
        });
    }

    //rescatar las ofertas de un usuario
    conseguirOfertas(UsuarioId: number) {
        return new Promise(async (resolve, reject) => {
            connection.query(`SELECT * FROM usuario as u join oferta as o join trabajo as t on u.Id = o.Usuario_Id and o.Trabajo_Id = t.Id WHERE u.Id`,
                [UsuarioId],
                async (err: any, results: any) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(results);
                }
            );
        });
    }
    //quitar la oferta de un usuario
    quitarOferta(UsuarioId: number, TrabajoId: number) {
        return new Promise(async (resolve, reject) => {
            connection.query(`DELETE FROM oferta WHERE UsuarioId = ? AND TrabajoId = ?`,
                [UsuarioId, TrabajoId],
                async (err: any, results: any) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(results);
                }
            );
        });
    }
   
}
export default Ofertas;