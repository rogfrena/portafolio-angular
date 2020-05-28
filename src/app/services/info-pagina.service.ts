import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagna.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient) {

    this.cargarInfo();
    this.cargaEquipo();
  }

  private cargarInfo(){
//Leer el archivo Json
  this.http.get('assets/data/data-pagina.json')
  .subscribe( (resp: InfoPagina) => {
  this.cargada = true;
  this.info = resp;
  });
}

  private cargaEquipo(){
    //Leer el archivo Json
  this.http.get('https://angular-portafolio-ef914.firebaseio.com/equipo.json')
  .subscribe( (resp: any) => {

  this.equipo = resp;
  // console.log(resp);
  });
  }
}
