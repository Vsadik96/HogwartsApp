import { Component, Input, OnInit } from '@angular/core';
import { Hechizos } from '../../interfaces/hechizos.interfaces';


@Component({
  selector: 'app-hechizos-tarjeta',
  templateUrl: './hechizos-tarjeta.component.html',
  styles: [`
  span{
    font-size: 20px;
    color: #c49c10;
    
  }
  mat-card{
 margin-top: 20px;
 height: 200px;


border-radius: 20px;
}

.mat-button{
  text-align:center;
  border-radius: 10px;
}

 `]
})
export class HechizostarjetaComponent  {
  

  
  @Input() hechizo!: Hechizos;



}
