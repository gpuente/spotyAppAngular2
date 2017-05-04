import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artista:any[];

  constructor(private activatedRoute:ActivatedRoute,
              private _spotifyService:SpotifyService) { }

  ngOnInit() {
    this.activatedRoute.params
      .map(params => params['id'])
      .subscribe(id => {
        console.log(id);
        this._spotifyService.getArtista(id).subscribe(artista => {
          this.artista = artista;
          console.log(this.artista);
        });
      });
  }

}
