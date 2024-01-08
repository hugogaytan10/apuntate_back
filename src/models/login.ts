import Database from "../services/database";
import connection from '../services/mysql';
const jwt = require('jsonwebtoken');
class Login extends Database {
    constructor() {
        super({ table: 'usuario' });
    }

    generateAccessToken(id: string, email: string): string {
        return jwt.sign({ id, email }, process.env.secret, { expiresIn: '1d' });
    }

    async login(email: string, password: string): Promise<any> {
        const query = `SELECT * FROM ${this.model.table} WHERE Email = ? AND Contrasenia = sha1(?)`;
        return new Promise((resolve, reject) => {
            connection.query(query, [email, password], (err: any, results: any) => {
                if (err) {
                    reject(err);
                } else {
                    try{
                        const acessToken = this.generateAccessToken(results[0].Id, results[0].Email);
                        const data = {
                            usuario: results[0],
                            Token: acessToken
                        };
                        resolve(data);
                    }catch(err){
                        reject(err);
                    }   
                }
            });
        })

    }
}
export default Login;