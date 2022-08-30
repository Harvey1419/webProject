export interface Ipersona {
    id: number,
    nombres: string,
    apellidos: string,
    idTipoDocumento: ItipoDocumento,
    documento: number,
    lugarResidencia: Iciudad,
    fechaNacimiento: Date,
    email: string,
    telefono: number,
    usuario: string,
    password: string
}

interface ItipoDocumento{
    idDocumento?: number,
    nombreDocumento: string,
    descripcionDocumento?: string,
}

interface Iciudad {
    idCiudad: number,
    nombreCiudad: string,
    descripcionCiudad: string
}