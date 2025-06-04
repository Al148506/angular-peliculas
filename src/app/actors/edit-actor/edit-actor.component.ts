import { Component, Input, numberAttribute } from '@angular/core';
import { ActorCreateDTO, ActorDTO } from '../actors';
import { FormActorsComponent } from "../form-actors/form-actors.component";

@Component({
  selector: 'app-edit-actor',
  imports: [FormActorsComponent],
  templateUrl: './edit-actor.component.html',
  styleUrl: './edit-actor.component.css'
})
export class EditActorComponent {
@Input({transform: numberAttribute})
id!: number;
actor: ActorDTO = {id:1, name:'Tom Holland', birthdate: new Date(1991,0,25),
   photo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Tom_Holland_at_KCA_2022.jpg'}

saveChanges(actor:ActorCreateDTO){
  console.log('Editing actor',actor)
}
}
