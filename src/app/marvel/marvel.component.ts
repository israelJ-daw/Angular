import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../services/marvel.service';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent implements OnInit {
  personajes: any[] = [];  // Almacenar los personajes recibidos

  constructor(private marvelService: MarvelService) {}

  ngOnInit(): void {
    this.marvelService.obtenerPersonajes().subscribe(
      (data) => {
        this.personajes = data.data.results;  // Guardar los personajes en la variable
      },
      (error) => {
        console.error('Error al obtener personajes', error);
      }
    );
  }
}
