import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../services/movies.service";
import { HttpClient } from "@angular/common/http";
import { Movie } from "../interfaces/movie";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  // API_ENDPOINT = "http://127.0.0.1:8000/api";
  moviesData: Movie[];

  constructor(
    private movieService: MoviesService,
    private httpClient: HttpClient
  ) {
    // httpClient.get(this.API_ENDPOINT + "/movies").subscribe(data => {
    //   console.log(data);
    // });
  }

  getMovies() {
    this.movieService.get().subscribe(
      (data: Movie[]) => {
        this.moviesData = data;
        console.log(this.moviesData);
      },
      error => {
        console.log(error);
        alert("oh, oh, an eror...");
      }
    );
  }

  ngOnInit() {}
}
