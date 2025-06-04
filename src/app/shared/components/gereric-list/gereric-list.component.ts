import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gereric-list',
  imports: [],
  templateUrl: './gereric-list.component.html',
  styleUrl: './gereric-list.component.css'
})
export class GerericListComponent {
@Input({required: true})
listado !: any[];

}
