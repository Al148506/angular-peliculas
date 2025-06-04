import { Component, Input, numberAttribute } from '@angular/core';
import { MovieCreationDTO, MovieDTO } from '../movies';
import { FormMoviesComponent } from '../form-movies/form-movies.component';
import { SelectorMultipleDTO } from '../../shared/components/multiple-selector/multiple-selector-model';
import { ActorAutoCompleteDTO } from '../../actors/actors';

@Component({
  selector: 'app-edit-movie',
  imports: [FormMoviesComponent],
  templateUrl: './edit-movie.component.html',
  styleUrl: './edit-movie.component.css',
})
export class EditMovieComponent {
  @Input({ transform: numberAttribute })
  id!: number;
  movie: MovieDTO = {
    id: 1,
    title: 'Spider-man',
    launchDate: new Date('2018-07-25'),
    trailer: 'ABC',
    poster:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Tom_Holland_Bali_2019_1_%28cropped%29.jpg/500px-Tom_Holland_Bali_2019_1_%28cropped%29.jpg',
  };

  genreSelected: SelectorMultipleDTO[] = [{ key: 3, value: 'Comedia' }];
  genreNotSelected: SelectorMultipleDTO[] = [
    { key: 1, value: 'Drama' },
    { key: 2, value: 'Terror' },
  ];
  cinemasSelected: SelectorMultipleDTO[] = [{ key: 3, value: 'Kristal' }];
  cinemasNotSelected: SelectorMultipleDTO[] = [
    { key: 1, value: 'Cinepolis' },
    { key: 2, value: 'Cinemex' },
  ];
  actorsSelected: ActorAutoCompleteDTO[] = [
    {
      id: 1,
      name: 'Tom Holland',
      character: 'Spiderman',
      photo:
        'https://translate.google.com/website?sl=en&tl=es&hl=es&client=srp&u=https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/500px-Tom_Holland_by_Gage_Skidmore.jpg',
    },
  ];

  saveChanges(movie: MovieCreationDTO) {
    console.log('Editing movie', movie);
  }
}
