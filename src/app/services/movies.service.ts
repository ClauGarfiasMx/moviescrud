// es una clase que tiene un @injectable
// o decorador que permite inyectar el servicio
// en cualquier componente

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Movie } from "../interfaces/movie";

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  API_ENDPOINT = "http://127.0.0.1:8000/api";

  constructor(private httpClient: HttpClient) {}
  get() {
    return this.httpClient.get(this.API_ENDPOINT + "/movies");
  }

  save(movie: Movie) {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.httpClient.post(this.API_ENDPOINT + "/movies", movie, {
      headers: headers
    });
  }
}
