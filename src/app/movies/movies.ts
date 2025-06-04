import { ActorAutoCompleteDTO } from '../actors/actors';

export interface MovieDTO {
  id: number;
  title: string;
  launchDate: Date;
  trailer: string;
  poster?: string;
}
export interface MovieCreationDTO {
  title: string;
  launchDate: Date;
  trailer: string;
  poster?: File;
  genresIds?: number[];
  cinemasIds?: number[];
  actors?: ActorAutoCompleteDTO[];
}
