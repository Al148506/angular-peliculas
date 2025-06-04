import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceGenerosComponent } from './genres/index-genre/index-genre.component';
import { CreateGenresComponent } from './genres/create-genres/create-genres.component';
import { ActorsIndexComponent } from './actors/actors-index/actors-index.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { CreateCinemaComponent } from './cinemas/create-cinema/create-cinema.component';
import { CinemasIndexComponent } from './cinemas/cinemas-index/cinemas-index.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditCinemaComponent } from './cinemas/edit-cinema/edit-cinema.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { FilterMoviesComponent } from './movies/filter-movies/filter-movies.component';
export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'genres', component: IndiceGenerosComponent},
    {path: 'genres/create', component: CreateGenresComponent},
    {path: 'genres/edit/:id', component: EditGenreComponent},
    {path: 'actors', component: ActorsIndexComponent},
    {path: 'actors/create', component: CreateActorComponent},
    {path: 'actors/edit/:id', component: EditActorComponent},
    {path: 'cinemas', component: CinemasIndexComponent},
    {path: 'cinemas/create', component: CreateCinemaComponent},
    {path: 'cinemas/edit/:id', component: EditCinemaComponent},
    {path: 'movies/create', component: CreateMovieComponent},
    {path: 'movies/edit/:id', component: EditMovieComponent}, 
    {path: 'movies/filter', component: FilterMoviesComponent}, // Add the filter movies route
    {path: '**', redirectTo: ''} // Redirect to the landing page for any unknown routes
  

];
