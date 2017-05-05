import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any [] = [];
  urlBusqueda:string = 'https://api.spotify.com/v1/search';
  urlArtista:string = 'https://api.spotify.com/v1/artists/'

  constructor(private http:Http) { }

  getArtistas(termino:string){
    let query:string = `?q=${termino}&type=artist`;
    let url:string = this.urlBusqueda + query;

    return this.http.get(url).map(res => {
      console.log(res.json().artists.items);
      this.artistas = res.json().artists.items;
      return this.artistas;
    });
  }

  getArtista(id:string){
    let url:string = this.urlArtista + id;
    return this.http.get(url).map(res => {
      //console.log(res.json());
      return res.json();
    });
  }

  getArtistTopTracks(id:string){
    let url:string = this.urlArtista + `${id}/top-tracks?country=US`;
    return this.http.get(url).map(res => {
      console.log(res.json().tracks);
      return res.json().tracks;
    });
  }

}
