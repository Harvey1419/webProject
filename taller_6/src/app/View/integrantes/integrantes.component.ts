import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControllerPersonasComponent } from 'src/app/Controller/controller-personas/controller-personas.component';
import { Ipersona } from 'src/app/Model/persona.interface';

@Component({
  selector: 'integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.css']
})
export class IntegrantesComponent implements OnInit{
  lista: any;
  enableEditIndex = null;
  inputShow: boolean = false;
  personasList:any;
  nombres =  new FormControl('', Validators.required);
  apellidos =  new FormControl('', Validators.required);
  tiposDeDocumento = new FormControl('', Validators.required);
  documento = new FormControl('', Validators.required);
  ciudad = new FormControl('', Validators.required);
  nacimiento = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  numero = new FormControl('', Validators.required);
  usuario = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  myForm = new FormGroup({});
  displayedColumns: string[] = ['id','nombres'];

  constructor(private controller: ControllerPersonasComponent) { }
  TiposDeDocumento = ['CC','CE','TI']
  ciudades = ['Bucaramanga','Cali','Bogotá','Medellin']

  ngOnInit(): void {
  }
  async agregar(){
    if(this.myForm.valid){
      await this.controller.createNewPerson(this.nombres.value,this.apellidos.value,this.tiposDeDocumento.value,this.documento.value,this.ciudad.value,this.nacimiento.value,this.email.value,this.numero.value,this.usuario.value,this.password.value);
      
      this.lista = this.controller.getPeople();  
      this.personasList = this.lista
    }
  }
  rowSelected(row:any,i: any){
    console.log('aaa',row,'que es i',i); 
    this.setValues(row);
    this.enableEditIndex = i
    this.inputShow = true

  }


  updatePerson(row:any){
    console.log(this.nombres.value, this.apellidos.value,this.tiposDeDocumento.value);
    //aca la funcion en el controller que hace el update
    this.controller.mofifyPerson(row.id,this.nombres.value,this.apellidos.value,this.tiposDeDocumento.value,this.documento.value,this.ciudad.value,this.nacimiento.value,this.email.value,this.numero.value,this.usuario.value,this.password.value);    
    this.inputShow = false
    
  }
  cancel(row:any){
    this.inputShow = false
    this.setValues(row)
  }

  delete(id:number){
    this.controller.delete(id)
    this.lista = this.controller.getPeople();  
      this.personasList = this.lista
  }

  private setValues(row: any) {
    this.nombres.setValue(row.nombres);
    this.apellidos.setValue(row.apellidos);
    this.tiposDeDocumento.setValue(row.tiposDeDocumento);
    this.documento.setValue(row.documento);
    this.ciudad.setValue(row.ciudad);
    this.nacimiento.setValue(row.nacimiento);
    this.email.setValue(row.email);
    this.usuario.setValue(row.usuario);
  }
}
