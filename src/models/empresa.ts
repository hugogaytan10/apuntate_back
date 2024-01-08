import connection from '../services/mysql';
import Login from './login';


export interface IEmpresa {
    Id?: number;
    Nombre: string;
    Apellido: string;
    Email: string;
    Contrasenia: string;
    Telefono: string;
    Direccion: string;
    EstadoCivil: string;
    FechaNac: string;
    EmpresaId?: number;
    Giro: string;
    NombreEmpresa: string;
    RFC: string;
}

class Empresas{

 

    agregarempresa(empresa: IEmpresa) {
        return new Promise(async (resolve, reject) => {
            connection.query(`CALL InsertarUsuarioEmpresa(?,?,?,?,?,?,?,?,?,?,?)`,
                [empresa.NombreEmpresa, empresa.Giro, empresa.RFC, empresa.Email, empresa.Contrasenia, empresa.FechaNac, empresa.Apellido, empresa.Nombre, empresa.Direccion, empresa.Telefono, empresa.EstadoCivil],
                async (err: any, results: any) => {
                    if (err) {
                        reject(err);
                    }
                    const loginModel = new Login();
                    loginModel.login(empresa.Email, empresa.Contrasenia).then((data: any) => {
                        resolve(data);
                    }).catch((err: any) => {
                        reject(err);
                    });
                }
            );
        });
    }

    actualizarempresa(empresa: IEmpresa) {
        return new Promise(async (resolve, reject) => {
            connection.query(`CALL Actualizarempresa(?,?,?,?,?,?,?,?,?,?,?,?,?)`,
                [empresa.Id,empresa.EmpresaId,empresa.NombreEmpresa,empresa.Giro, empresa.RFC, empresa.Email, empresa.Contrasenia, empresa.FechaNac, empresa.Apellido, empresa.Nombre, empresa.Direccion, empresa.Telefono, empresa.EstadoCivil],
                async (err: any, results: any) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(results);
                }
            );
        });
    }

    agregarempresaEmpresa(empresa: IEmpresa) {
        return new Promise(async (resolve, reject) => {
            connection.query(`CALL InsertarUsuarioEmpresa(?,?,?,?,?,?,?,?,?)`,
                [empresa.NombreEmpresa,empresa.Giro, empresa.RFC, empresa.Email, empresa.Contrasenia, empresa.FechaNac, empresa.Apellido, empresa.Nombre, empresa.Direccion, empresa.Telefono, empresa.EstadoCivil, empresa.EmpresaId],
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

export default Empresas;