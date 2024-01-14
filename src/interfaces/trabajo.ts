import { ITrabajo } from "models/trabajo";
export class Trabajo {
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

    constructor(trabajo: ITrabajo) {
        this.Id = trabajo.Id;
        this.Titulo = trabajo.Titulo;
        this.Descripcion = trabajo.Descripcion;
        this.Salario = trabajo.Salario;
        this.Direccion = trabajo.Direccion;
        this.Ciudad = trabajo.Ciudad;
        this.Tiempo = trabajo.Tiempo;
        this.Estatus = trabajo.Estatus;
        this.Contrato = trabajo.Contrato;
        this.Modalidad = trabajo.Modalidad;
        this.EmpresaId = trabajo.EmpresaId;
    }
}