import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { GerericListComponent } from "../../shared/components/gereric-list/gereric-list.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RatingComponent } from '../../shared/components/rating/rating.component';
@Component({
  selector: 'app-listado-peliculas',
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, GerericListComponent,
    MatButtonModule, MatIconModule, RatingComponent
  ],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent implements OnInit {
  title = 'angular-peliculas';
  ngOnInit(): void {
  }
  @Input({required: true})
  peliculas !: any[];
  
  processVote(vote: number){
    console.log('Procesando voto');
  }
}
