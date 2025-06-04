import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ListadoPeliculasComponent } from "../../peliculas/listado-peliculas/listado-peliculas.component";
import { FilterMovie } from './filterMovie';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-filter-movies',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule,
    MatSelectModule, MatCheckboxModule, ListadoPeliculasComponent],
  templateUrl: './filter-movies.component.html',
  styleUrl: './filter-movies.component.css'
})
export class FilterMoviesComponent implements OnInit {
  ngOnInit(): void {
    this.readUrlParameters();
    this.searchMovies(this.form.value as FilterMovie);
    this.form.valueChanges.subscribe((values) => {
      this.movies = this.moviesOriginal;
      this.searchMovies(values as FilterMovie);
      this.searchParametersUrl(values as FilterMovie);
    });
  }

  searchMovies(values: FilterMovie) {
    if (values.title) {
      this.movies = this.movies.filter((movie) => movie.titulo.toLowerCase().includes(values.title.toLowerCase()));
    }
    if (values.genreId) {
      this.movies = this.movies.filter((movie) => movie.genre.indexOf(values.genreId) !== -1);
    }
    if (values.upcomingReleases) {
      this.movies = this.movies.filter((movie) => movie.upcomingReleases);
    }
    if (values.inCinemas) {
      this.movies = this.movies.filter((movie) => movie.inCinemas);
    }
  }
  searchParametersUrl(values: FilterMovie) {
    let queryString = [];
    if (values.title) {
      queryString.push(`title=${encodeURIComponent(values.title)}`);
    }
    if (values.genreId !== 0) {
      queryString.push(`genreId=${(values.genreId)}`);
    }
    if (values.upcomingReleases) {
      queryString.push(`upcomingReleases=${(values.upcomingReleases)}`);
    }
    if (values.inCinemas) {
      queryString.push(`inCinemas=${(values.inCinemas)}`);
    }
    this.location.replaceState('movies/filter', queryString.join('&'));
  }
  
  readUrlParameters() {
    this.activatedRoute.queryParams.subscribe((params:any) => {
      this.form.patchValue({
        title: params['title'] || '',
        genreId: params['genreId'] || 0,
        upcomingReleases: params['upcomingReleases'] || false,
        inCinemas: params['inCinemas'] || false
      });
    });
  }

  clean(){
    this.form.reset();
    this.movies = this.moviesOriginal;
  }
  private formBuilder = inject(FormBuilder);
  private location = inject(Location);
  private activatedRoute = inject(ActivatedRoute);
  form = this.formBuilder.group({
    title: '',
    genreId: 0,
    upcomingReleases: false,
    inCinemas: false
  });
  genres = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Comedy' },
    { id: 3, name: 'Drama' },
    { id: 4, name: 'Horror' },
    { id: 5, name: 'Sci-Fi' }
  ]
  moviesOriginal = [
    { titulo: 'Inside Out 2',
      fechaLanzamiento: new Date(),
      precio: 1400.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832',
      genre: [5, 4],
      upcomingReleases: false,
      inCinemas: false
    },
    { titulo: 'Moana 2',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg',
      genre: [1, 2],
      upcomingReleases: false,
      inCinemas: true
     }, 
     { 
      titulo: 'Bad Boys: Ride or Die',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg',
      genre: [3],
      upcomingReleases: false,
      inCinemas: true
     },
    
    { titulo: 'Deadpool & Wolverine',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/220px-Deadpool_%26_Wolverine_poster.jpg',
      genre: [1, 3, 4, 5],
      upcomingReleases: true,
      inCinemas: false
      },
    { titulo: 'Oppenheimer',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg',
      genre: [3, 4],
      upcomingReleases: true,
      inCinemas: false
     },
    { titulo: 'The Flash',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/220px-The_Flash_%28film%29_poster.jpg',
      genre: [4],
      upcomingReleases: false,
      inCinemas: true
     }
    ]

    movies = this.moviesOriginal;
  }
