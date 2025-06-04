import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ActorCreateDTO, ActorDTO } from '../actors';
import moment from 'moment';
import { dateCantBeFuture } from '../../shared/functions/validations';
import { InputImgComponent } from "../../shared/components/input-img/input-img.component";

@Component({
  selector: 'app-form-actors',
  imports: [MatButtonModule, RouterLink, MatFormField, ReactiveFormsModule, MatInputModule,
    MatDatepickerModule, InputImgComponent],
  templateUrl: './form-actors.component.html',
  styleUrl: './form-actors.component.css'
})
export class FormActorsComponent implements OnInit {
  ngOnInit(): void {
    if(this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }
  private formBuilder = inject(FormBuilder);
  @Input()
  model?: ActorDTO;
  @Output()
  postForm = new EventEmitter<ActorCreateDTO>();
  form = this.formBuilder.group({
    name: ['',{
    validators: [Validators.required]
  }],
    birthdate: new FormControl<Date | null>(null, {
      validators: [Validators.required, dateCantBeFuture()]
    }),
    photo: new FormControl<File | string | null>(null)
  })
obtainErrorNameField() {
    const field = this.form.controls.name;
    if (field?.hasError('required')) {
      return 'This field is required';
    }
    return '';
  }
  obtainErrorBirthdateField() {
    const field = this.form.controls.birthdate;
    if (field?.hasError('required')) {
      return 'This field is required';
    }
    if (field?.hasError("future")) {
      return field.getError("future").message;
    }
    return '';
  }

  selectedArchive(file:File){
    this.form.controls.photo.setValue(file);
  }

  saveChanges() {
    if (!this.form.valid) {
      return;
    } 
    const actor = this.form.value as ActorCreateDTO
    actor.birthdate = moment(actor.birthdate).toDate();
    if(typeof actor.photo == "string"){
      actor.photo = undefined;
    }
    this.postForm.emit(actor);
  }
}
