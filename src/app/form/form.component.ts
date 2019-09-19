import { Component, OnInit } from "@angular/core";
import { Movie } from "../interfaces/movie";
import { MoviesService } from "../services/movies.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  movie: Movie = {
    title: null,
    description: null,
    genre: null,
    year: null,
    duration: null
  };

  constructor(private movieService: MoviesService) {}

  ngOnInit() {}

  saveMovie() {
    console.log(this.movie);

    this.movieService.save(this.movie).subscribe(
      data => {
        alert("movie saved");
        console.log(data);
      },
      error => {
        console.log(error);
        alert("oh oh, error!" + error.error.message);
      }
    );
  }
}
