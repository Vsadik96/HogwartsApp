import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Personaje } from '../../interfaces/personaje.interfaces';

@Component({
  selector: 'app-buscador-componente',
  templateUrl: './buscador-componente.component.html',
  styles: [`
  
  .buscador{
    border-radius: 10px;
    font-size: 14px;
    padding-left: 600px;
    width: 400px;
    text-align: center;
}

  




  `]
})
export class BuscadorComponenteComponent  {

  @Input() personaje!: Personaje;

  textobusqueda: string='';

  @Output( ) eventoBusqueda = new EventEmitter<string> ();

  

  formulario = new FormControl('');

  buscar(){
    this.eventoBusqueda.emit(this.textobusqueda);
  }


  ngOnInit(): void {
  }

  


}
