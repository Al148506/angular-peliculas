import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatTable, MatTableModule } from '@angular/material/table';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { ActorAutoCompleteDTO } from '../actors';

@Component({
  selector: 'app-autocomplete-actors',
  standalone: true,
  imports: [
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    DragDropModule,
  ],
  templateUrl: './autocomplete-actors.component.html',
  styleUrls: ['./autocomplete-actors.component.css'],
})
export class AutocompleteActorsComponent {
  control = new FormControl();
  actors: ActorAutoCompleteDTO[] = [
    {
      id: 1,
      name: 'Tom Holland',
      character: '',
      photo:
        'https://translate.google.com/website?sl=en&tl=es&hl=es&client=srp&u=https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/500px-Tom_Holland_by_Gage_Skidmore.jpg',
    },
    {
      id: 2,
      name: 'Zendaya',
      character: '',
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Zendaya_-_2019_by_Glenn_Francis.jpg/330px-Zendaya_-_2019_by_Glenn_Francis.jpg',
    },
    {
      id: 3,
      name: 'Robert Downey Jr.',
      character: '',
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg/330px-Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg',
    },
  ];
  @Input({required:true})
  actorsSelected: ActorAutoCompleteDTO[] = [];

  columnsToShow = ['photo', 'name', 'character', 'actions'];

  @ViewChild(MatTable) table!: MatTable<ActorAutoCompleteDTO>;

  actorSelected(event: MatAutocompleteSelectedEvent) {
    this.actorsSelected.push(event.option.value);
    this.control.patchValue('');

    if (this.table != undefined) {
      this.table.renderRows();
    }
  }
  endDrag(event: CdkDragDrop<any[]>) {
    const previousIndex = this.actorsSelected.findIndex(
      (actor) => actor === event.item.data
    );
    moveItemInArray(this.actorsSelected, previousIndex, event.currentIndex);
    this.table.renderRows();
  }
  delete(actor: ActorAutoCompleteDTO) {
    const indice = this.actorsSelected.findIndex(
      (a: ActorAutoCompleteDTO) => a.id === actor.id
    );
    this.actorsSelected.splice(indice, 1);
    this.table.renderRows();
  }
}
