import connection from '../services/mysql';


export interface ITrabajo {
    Id?: number;
    Tiulo: string;
    Descripcion: string;
    Salario: number;
    Direccion: string;
    Tiempo: string;
    Estatus: number;
    Contrato: string;
    Modalidad: string;
    EmpresaId?: number;
}

class Trabajos {
    //para los usuarios que buscar trabajo
    conseguirTrabajos() {
        return new Promise(async (resolve, reject) => {
            connection.query(`SELECT * FROM trabajo WHERE Estatus = 1 limit 10`,
                async (err: any, results: any) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(results);
                }
            );
        });
    }

    //rescatar los trabajos de una empresa
    conseguirTrabajosCreados(EmpresaId: number) {
        return new Promise(async (resolve, reject) => {
            connection.query(`SELECT * FROM trabajo WHERE Estatus = 1 AND EmpresaId = ?`,
                [EmpresaId],
                async (err: any, results: any) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(results);
                }
            );
        });
    }

    agregarTrabajo(trabajo: ITrabajo) {
        return new Promise(async (resolve, reject) => {
            connection.query(`CALL InsertarTrabajo(?,?,?,?,?,?,?,?)`,
                [trabajo.Tiulo, trabajo.Descripcion, trabajo.Salario, trabajo.Direccion, trabajo.Tiempo,  trabajo.Contrato, trabajo.Modalidad, trabajo.EmpresaId],
                async (err: any, results: any) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(results);
                }
            );
        });
    }

    actualizarTrabajo(trabajo: ITrabajo) {
        return new Promise(async (resolve, reject) => {
            connection.query(`CALL ActualizarTrabajo(?,?,?,?,?,?,?,?)`,
                [trabajo.Id, trabajo.Tiulo, trabajo.Descripcion, trabajo.Salario, trabajo.Direccion, trabajo.Tiempo, trabajo.Contrato, trabajo.Modalidad, trabajo.EmpresaId],
                async (err: any, results: any) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(results);
                }
            );
        });
    }

    eliminarTrabajo(trabajo: ITrabajo) {
        return new Promise(async (resolve, reject) => {
            connection.query(`UPDATE trabajo SET Estatus = 0 WHERE Id = ? `,
                [trabajo.Id],
                async (err: any, results: any) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(results);
                }
            );
        });
    }

    //buscar trabajos similares a los que busco el usuario 
    buscarTrabajoConTexto(texto: string) {
        return new Promise(async (resolve, reject) => {
            connection.query(`SELECT * FROM trabajo WHERE Estatus = 1 AND Tiulo LIKE ?`,
                ['%' + texto + '%'],
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
export default Trabajos;