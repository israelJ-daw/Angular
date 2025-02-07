import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadoComponent } from './empleado/empleado.component';
import { AlumnadoDAWComponent } from "./alumnado-daw/alumnado-daw.component";
import { MarvelComponent } from "./marvel/marvel.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmpleadoComponent, AlumnadoDAWComponent, MarvelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angApp321321_v19';
}
