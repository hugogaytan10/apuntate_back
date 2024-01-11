import Database from '../services/database';
import connection from '../services/mysql';
import Login from './login';


export interface IUsuario {
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
}

class Usuarios extends Database {

    constructor() {
        super({ table: 'usuario' });
    }

    agregarUsuario(usuario: IUsuario) {
        return new Promise(async (resolve, reject) => {
            connection.query(`CALL insertarUsuario(?,?,?,?,?,?,?,?)`,
                [usuario.Email, usuario.Contrasenia, usuario.FechaNac, usuario.Apellido, usuario.Nombre, usuario.Direccion, usuario.Telefono, usuario.EstadoCivil],
                async (err: any, results: any) => {
                    if (err) {
                        reject(err);
                    }
                    const login = new Login();
                    const newLogin = await login.login(usuario.Email, usuario.Contrasenia);
                    resolve(newLogin);
                }
            );
        });
    }

    actualizarUsuario(usuario: IUsuario) {
        return new Promise(async (resolve, reject) => {
            connection.query(`CALL ActualizarUsuario(?,?,?,?,?,?,?,?,?)`,
                [usuario.Id, usuario.Email, usuario.Contrasenia, usuario.FechaNac, usuario.Apellido, usuario.Nombre, usuario.Direccion, usuario.Telefono, usuario.EstadoCivil],
                async (err: any, results: any) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(results);
                }
            );
        });
    }

    agregarUsuarioEmpresa(usuario: IUsuario) {
        return new Promise(async (resolve, reject) => {
            connection.query(`CALL insertarUsuarioEmpresa(?,?,?,?,?,?,?,?,?)`,
                [usuario.Email, usuario.Contrasenia, usuario.FechaNac, usuario.Apellido, usuario.Nombre, usuario.Direccion, usuario.Telefono, usuario.EstadoCivil, usuario.EmpresaId],
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

export default Usuarios;