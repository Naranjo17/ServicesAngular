import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor() { }
  retornar(){
    return [
      {
        codigo: 1, descipcion: "papas", precio: 12.33
      },
      {
        codigo: 2, descipcion: "manzanas", precio: 54

      },
      {
        codigo: 3, descipcion: "sandia", precio: 14

      }
    ];
  }
}
