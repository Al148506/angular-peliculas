import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { firstCapitalLetter } from '../../shared/functions/validations';
import { FormGenreComponent } from "../form-genre/form-genre.component";
import { GenreCreateDTO } from '../genres';

@Component({
  selector: 'app-create-genres',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormGenreComponent],
  templateUrl: './create-genres.component.html',
  styleUrl: './create-genres.component.css'
})
export class CreateGenresComponent {
  private router = inject(Router);

  saveChanges(genre: GenreCreateDTO) {
    //savechanges
    //this.router.navigate(['/genres']);
    console.log('creating genre',genre);
  }
  
}
