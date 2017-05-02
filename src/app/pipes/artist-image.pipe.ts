import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'artistImage'
})
export class ArtistImagePipe implements PipeTransform {

  transform(value:any[]):string {
    let notImage:string = 'assets/img/noimage.png';
    if(!value) return notImage;
    return (value.length > 0) ? value[1].url : notImage;
  }

}
