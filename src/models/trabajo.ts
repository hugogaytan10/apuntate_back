import connection from '../services/mysql';


export interface ITrabajo {
    Id?: number;
    Titulo: string;
    Descripcion: string;
    Salario: number;
    Direccion: string;
    Ciudad: string;
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
            connection.query(`SELECT * FROM trabajo WHERE Estatus = 1 AND Empresa_Id = ?`,
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
            connection.query(`CALL InsertarTrabajo(?,?,?,?,?,?,?,?,?)`,
                [trabajo.Titulo, trabajo.Descripcion, trabajo.Salario, trabajo.Direccion, trabajo.Ciudad, trabajo.Tiempo,  trabajo.Contrato, trabajo.Modalidad, trabajo.EmpresaId],
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
            connection.query(`CALL ActualizarTrabajo(?,?,?,?,?,?,?,?,?,?)`,
                [trabajo.Id, trabajo.Titulo, trabajo.Descripcion, trabajo.Salario, trabajo.Direccion,trabajo.Ciudad, trabajo.Tiempo, trabajo.Contrato, trabajo.Modalidad, trabajo.EmpresaId],
                async (err: any, results: any) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(results);
                }
            );
        });
    }

    eliminarTrabajo(id: number) {
        return new Promise(async (resolve, reject) => {
            connection.query(`UPDATE trabajo SET Estatus = 0 WHERE Id = ? `,
                [id],
                async (err: any, results: any) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(results);
                }
            );
        });
    }

    //buscar las ciudades de los trabajos
    buscarCiudades(){
        return new Promise(async (resolve, reject) => {
            connection.query(`SELECT DISTINCT Ciudad FROM trabajo WHERE Estatus = 1`,
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
            connection.query(`SELECT * FROM trabajo WHERE Estatus = 1 AND Titulo LIKE ?`,
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