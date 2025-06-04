import { Component, Input, numberAttribute } from '@angular/core';
import { FormGenreComponent } from "../form-genre/form-genre.component";
import { GenreCreateDTO, GenreDTO, GenreEditDTO } from '../genres';

@Component({
  selector: 'app-edit-genre',
  standalone: true,
  imports: [FormGenreComponent],
  templateUrl: './edit-genre.component.html',
  styleUrl: './edit-genre.component.css'
})
export class EditGenreComponent {
  @Input({transform: numberAttribute})
  id!: number;

  genre: GenreDTO = {
    id: 1,
    name: 'Comedy'
  };
  saveChanges(genre: GenreCreateDTO) {
    console.log('editing genre',genre);
  }
}
