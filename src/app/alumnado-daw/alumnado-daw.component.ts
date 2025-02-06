import { Component } from '@angular/core';
import { alumnado } from './alumnado-daw'; 


@Component({
  selector: 'app-alumnado-daw',
  imports: [],
  templateUrl: './alumnado-daw.component.html',
  styleUrl: './alumnado-daw.component.css'
})
export class AlumnadoDAWComponent {

public title = "Listado alumnado";
public alumnos1: Array<any>;
public alumnos2: Array<any>;
public alumnosTrue : boolean = true

constructor(){


  this.alumnos1 = [new alumnado ("pedrito","Alvarez", "30132E", 21),
                  new alumnado ("Pablo", "Catalan", "4013P", 23),
                  new alumnado ("Son Goku", "Planeta vegeta", "777G", 25),
  ]


  this.alumnos2 = [new alumnado ("David","Broncano", "2391P", 22),
                  new alumnado ("Pablo", "Motos", "4852C", 28),
                  new alumnado ("Vegeta", "Planeta vegeta", "81486R", 22),
  ] 

  }

  cambiar(valor:boolean){
  this.alumnosTrue = valor;
  } 



}
