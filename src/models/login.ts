import { Usuario } from "interfaces/usuario";
import Database from "../services/database";
import connection from "../services/mysql";
const jwt = require("jsonwebtoken");
class Login extends Database {
  constructor() {
    super({ table: "usuario" });
  }

  generateAccessToken(id: string, email: string): string {
    return jwt.sign({ id, email }, process.env.secret, { expiresIn: "1d" });
  }

  async login(email: string, password: string): Promise<any> {
    const query = `SELECT * FROM ${this.model.table} WHERE Email = ? AND Contrasenia = sha1(?)`;
    return new Promise((resolve, reject) => {
      connection.query(query, [email, password], (err: any, results: any) => {
        if (err) {
          reject(err);
        } else {
          try {
            const fechaISO = results[0].FechaNac.toString();
            const fechaObj = new Date(fechaISO);
            const fechaSolo = fechaObj.toISOString().split("T")[0];
            const usuario: Usuario = {
                Id: results[0].Id,
                Nombre: results[0].Nombre,
                Apellido: results[0].Apellido,
                Email: results[0].Email,
                FechaNac: fechaSolo,
                Telefono: results[0].Telefono,
                Ciudad: results[0].Ciudad,
                Contrasenia: "",
                EmpresaId: results[0].EmpresaId,
                Direccion: results[0].Direccion,
                EstadoCivil: results[0].EstadoCivil,
            }
            const acessToken = this.generateAccessToken(
              results[0].Id,
              results[0].Email
            );
            const data = {
              usuario:usuario,
              Token: acessToken,
            };
            resolve(data);
          } catch (err) {
            reject(err);
          }
        }
      });
    });
  }
}
export default Login;
