import { IEmpresa } from "models/empresa";

export class Empresa {
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
    NombreEmpresa: string;
    Giro: string;
    RFC: string;

    constructor(empresa: IEmpresa) {
        this.Id = empresa.Id;
        this.Nombre = empresa.Nombre;
        this.Apellido = empresa.Apellido;
        this.Email = empresa.Email;
        this.Contrasenia = empresa.Contrasenia;
        this.Telefono = empresa.Telefono;
        this.Direccion = empresa.Direccion;
        this.EstadoCivil = empresa.EstadoCivil;
        this.FechaNac = empresa.FechaNac;
        this.EmpresaId = empresa.EmpresaId;
        this.NombreEmpresa = empresa.NombreEmpresa;
        this.Giro = empresa.Giro;
        this.RFC = empresa.RFC;
    }
} 