import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5'; 

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  private publicKey = '9c5c7bc3a3b9fbe43c5c98345c8cac4d';
  private privateKey = '54e01cd8cfa53c1a37f757cf7bdab24d9a40bae5'; 
  private baseUrl = 'https://gateway.marvel.com/v1/public';

  constructor(private http: HttpClient) {}

  obtenerDatos(endpoint: string): Observable<any> {
    const timestamp = new Date().getTime().toString();
    const hash = Md5.hashStr(timestamp + this.privateKey + this.publicKey);
    const url = `${this.baseUrl}/${endpoint}?ts=${timestamp}&apikey=${this.publicKey}&hash=${hash}`;
    return this.http.get(url);
  }

  obtenerPersonajes(): Observable<any> {
    return this.obtenerDatos('characters');
  }

  obtenerComics(): Observable<any> {
    return this.obtenerDatos('comics');
  }
}
