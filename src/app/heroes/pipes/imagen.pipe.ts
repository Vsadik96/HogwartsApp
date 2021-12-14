import { Pipe, PipeTransform } from '@angular/core';

import { Personaje } from '../interfaces/personaje.interfaces';

@Pipe({
  name: 'imagen',
  pure: false
})
export class ImagenPipe implements PipeTransform {

  transform( personaje: Personaje ): string {

    if( !personaje.id && !personaje.imagen ) {
      return 'assets/no-image.png';
    } else if ( personaje.imagen) {
      return personaje.imagen;
    } else {
      return `assets/heroes/${ personaje.id }.jpg`;
    }


  }

}
