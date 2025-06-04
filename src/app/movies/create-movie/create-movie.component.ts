import { Component } from '@angular/core';
import { MovieCreationDTO } from '../movies';
import { FormMoviesComponent } from '../form-movies/form-movies.component';
import { SelectorMultipleDTO } from '../../shared/components/multiple-selector/multiple-selector-model';
import { ActorAutoCompleteDTO } from '../../actors/actors';

@Component({
  selector: 'app-create-movie',
  imports: [FormMoviesComponent],
  templateUrl: './create-movie.component.html',
  styleUrl: './create-movie.component.css',
})
export class CreateMovieComponent {
  genreSelected: SelectorMultipleDTO[] = [];
  genreNotSelected: SelectorMultipleDTO[] = [
    { key: 1, value: 'Drama' },
    { key: 2, value: 'Terror' },
    { key: 3, value: 'Comedia' },
  ];

  cinemasSelected: SelectorMultipleDTO[] = [];
  cinemasNotSelected: SelectorMultipleDTO[] = [
    { key: 1, value: 'Cinepolis' },
    { key: 2, value: 'Cinemex' },
    { key: 3, value: 'Kristal' },
  ];

  actorsSelected: ActorAutoCompleteDTO[] = [];

  saveChanges(movie: MovieCreationDTO) {
    console.log('Create movie', movie);
  }
}
