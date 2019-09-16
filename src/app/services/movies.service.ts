// es una clase que tiene un @injectable
// o decorador que permite inyectar el servicio
// en cualquier componente

import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  constructor() {}
}
