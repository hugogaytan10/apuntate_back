import { ITrabajo } from "models/trabajo";
export class Trabajo {
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

    constructor(trabajo: ITrabajo) {
        this.Id = trabajo.Id;
        this.Tiulo = trabajo.Tiulo;
        this.Descripcion = trabajo.Descripcion;
        this.Salario = trabajo.Salario;
        this.Direccion = trabajo.Direccion;
        this.Tiempo = trabajo.Tiempo;
        this.Estatus = trabajo.Estatus;
        this.Contrato = trabajo.Contrato;
        this.Modalidad = trabajo.Modalidad;
        this.EmpresaId = trabajo.EmpresaId;
    }
}