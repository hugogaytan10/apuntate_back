import { IUsuario } from "models/usuario";

export class Usuario {
    Id?: number;
    Nombre: string;
    Apellido: string;
    Email: string;
    Contrasenia: string;
    Telefono: string;
    Direccion: string;
    Ciudad: string;
    EstadoCivil: string;
    FechaNac: string;
    Empresa_Id?: number;

    constructor(usuario: IUsuario) {
        this.Id = usuario.Id;
        this.Nombre = usuario.Nombre;
        this.Apellido = usuario.Apellido;
        this.Email = usuario.Email;
        this.Contrasenia = usuario.Contrasenia;
        this.Telefono = usuario.Telefono;
        this.Direccion = usuario.Direccion;
        this.Ciudad = usuario.Ciudad;
        this.EstadoCivil = usuario.EstadoCivil;
        this.FechaNac = usuario.FechaNac;
        this.Empresa_Id = usuario.EmpresaId;
    }
} 