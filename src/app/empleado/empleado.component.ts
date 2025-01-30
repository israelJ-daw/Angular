import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado',
  imports: [],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})

export class EmpleadoComponent {
  public title = "Bienvenido empleado modelo";
  public empleadoExt: Empleado;
  public trabajador:Empleado[];
  public trabajadorExterno: boolean;

  constructor(){
    this.empleadoExt = new Empleado("Selena", 41, "Generente", true);
    this.trabajador = [
      new Empleado('Pepito', 45 , "Programador", true),
      new Empleado("Jose", 33, "Administrador", true),
      new Empleado("Juan Alberto", 50, "Recepcion", true),
      new Empleado("Pablo", 28, "Supervisor", false)
    ]
    this.trabajadorExterno=true;
  }
  ng0nInit(){
    console.log(this.trabajador)
  }

  cambiarExterno(valor:boolean){
    this.trabajadorExterno=valor;
  }
}