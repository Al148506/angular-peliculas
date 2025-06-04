import { Component } from '@angular/core';
import { FormActorsComponent } from "../form-actors/form-actors.component";
import { ActorCreateDTO } from '../actors';

@Component({
  selector: 'app-create-actor',
  imports: [FormActorsComponent],
  templateUrl: './create-actor.component.html',
  styleUrl: './create-actor.component.css'
})
export class CreateActorComponent {
  saveChanges(actor:ActorCreateDTO){
    console.log('Creating the actor', actor)
  }
}
