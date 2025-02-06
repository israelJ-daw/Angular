import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5'; // Librería para generar el hash MD5

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  private publicKey = '9c5c7bc3a3b9fbe43c5c98345c8cac4d'; // Tu public key
  private privateKey = '54e01cd8cfa53c1a37f757cf7bdab24d9a40bae5'; // Tu private key
  private baseUrl = 'https://gateway.marvel.com/v1/public'; // URL base de la API

  constructor(private http: HttpClient) {}

  // Método para obtener personajes
  obtenerpersonajes(): Observable<any> {
    const timestamp = new Date().getTime().toString();
    const hash = Md5.hashStr(timestamp + this.privateKey + this.publicKey); // Generar el hash

    const url = `${this.baseUrl}/characters?ts=${timestamp}&apikey=${this.publicKey}&hash=${hash}`;
    return this.http.get(url);
  }

  // Método para obtener cómics
  obtenercomic(): Observable<any> {
    const timestamp = new Date().getTime().toString();
    const hash = Md5.hashStr(timestamp + this.privateKey + this.publicKey); // Generar el hash

    const url = `${this.baseUrl}/comics?ts=${timestamp}&apikey=${this.publicKey}&hash=${hash}`;
    return this.http.get(url);
  }

  // Método para buscar personajes por nombre
  buscarpersonajesnombre(name: string): Observable<any> {
    const timestamp = new Date().getTime().toString();
    const hash = Md5.hashStr(timestamp + this.privateKey + this.publicKey); // Generar el hash

    const url = `${this.baseUrl}/characters?nameStartsWith=${name}&ts=${timestamp}&apikey=${this.publicKey}&hash=${hash}`;
    return this.http.get(url);
  }
}