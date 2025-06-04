import { Component, Input, numberAttribute } from '@angular/core';
import { CinemaCreationDTO, CinemaDTO } from '../cinemas';
import { FormCinemasComponent } from "../form-cinemas/form-cinemas.component";

@Component({
  selector: 'app-edit-cinema',
  imports: [FormCinemasComponent],
  templateUrl: './edit-cinema.component.html',
  styleUrl: './edit-cinema.component.css'
})
export class EditCinemaComponent {
  @Input({transform: numberAttribute})
  id!: number;
  cinema: CinemaDTO = {id: 1, name: 'Recorcholis', latitude: 21.882895506128584, longitude: -102.29063229803444};
  saveChanges(cinema: CinemaCreationDTO){
    console.log('edit cinema', cinema);
  }
}
