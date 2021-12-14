import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Personaje } from '../../../interfaces/personaje.interfaces';


@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: [
  ]
})
export class ConfirmarComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<ConfirmarComponent>,
               @Inject(MAT_DIALOG_DATA) public data: Personaje ) { }

  ngOnInit(): void {
  }

  borrar() {
    this.dialogRef.close(true);
  }

  cerrar(){
    this.dialogRef.close();
  }

}
