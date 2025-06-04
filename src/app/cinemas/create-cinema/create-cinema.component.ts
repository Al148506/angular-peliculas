import { Component } from '@angular/core';
import { CinemaCreationDTO } from '../cinemas';
import { FormCinemasComponent } from "../form-cinemas/form-cinemas.component";

@Component({
  selector: 'app-create-cinema',
  imports: [FormCinemasComponent],
  templateUrl: './create-cinema.component.html',
  styleUrl: './create-cinema.component.css'
})
export class CreateCinemaComponent {
  saveChanges(cinema: CinemaCreationDTO){
    console.log('creating cinems',cinema);
  }
}
