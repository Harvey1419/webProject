import { Injectable, OnInit } from '@angular/core';
import { Ipersona } from 'src/app/Model/persona.interface';

@Injectable({ providedIn: 'root' })
export class ControllerPersonasComponent implements OnInit {
  personas: Ipersona[] = [];

  constructor() {}

  ngOnInit(): void {}

  createNewPerson(
    nombres: string,
    apellidos: string,
    nombreDocumento: string,
    documento: number,
    nombreCiudad: string,
    fechaNacimiento: Date,
    email: string,
    telefono: number,
    usuario: string,
    password: string
  ) {
    const newPerson: Ipersona = {
      id: this.personas.length + 1,
      nombres: nombres,
      apellidos: apellidos,
      idTipoDocumento: {
        idDocumento: this.personas.length + 1,
        nombreDocumento: nombreDocumento,
        descripcionDocumento: nombreDocumento,
      },
      documento: documento,
      lugarResidencia: {
        idCiudad:this.personas.length + 1,
        nombreCiudad: nombreCiudad,
        descripcionCiudad: nombreCiudad,
      },
      fechaNacimiento: fechaNacimiento,
      email: email,
      telefono: telefono,
      usuario: usuario,
      password: password,
    };
    console.log(this.personas);
    
    this.personas.push(newPerson);
    
  }

  getPeople(){
    return this.personas
  }

  mofifyPerson(id: number,
    nombres: string,
    apellidos: string,
    nombreDocumento: string,
    documento: number,
    nombreCiudad: string,
    fechaNacimiento: Date,
    email: string,
    telefono: number,
    usuario: string,
    password: string
    ) {
    
    const newPerson: Ipersona = {
      id: id,
      nombres: nombres,
      apellidos: apellidos,
      idTipoDocumento: {
        idDocumento: id,
        nombreDocumento: nombreDocumento,
        descripcionDocumento: nombreDocumento,
      },
      documento: documento,
      lugarResidencia: {
        idCiudad:id,
        nombreCiudad: nombreCiudad,
        descripcionCiudad: nombreCiudad,
      },
      fechaNacimiento: fechaNacimiento,
      email: email,
      telefono: telefono,
      usuario: usuario,
      password: password,
    };
    console.log('Epa',newPerson);
    console.log('epaID',this.personas[id-1]);
    
    this.personas[id-1] = newPerson

    
  }

  delete(id:number){
    this.personas = this.personas.filter(per => per.id !== id )
    console.log(this.personas);
    return this.personas = [...this.personas]
  }

}
