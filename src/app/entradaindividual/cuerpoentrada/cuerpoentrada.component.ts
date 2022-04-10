import { Component, OnInit, Input } from '@angular/core';
import { Entradas } from 'src/app/modelos/entradas.model';

@Component({
  selector: 'app-cuerpoentrada',
  templateUrl: './cuerpoentrada.component.html',
  styleUrls: ['./cuerpoentrada.component.scss']
})
export class CuerpoentradaComponent implements OnInit {

  constructor() { }
  @Input() entrada?: Entradas;
  texto?: string [];
  textoentrada?: string;

  ngOnInit(): void {
   // console.log(this.entrada?.texto);
      this.texto = this.entrada?.texto?.split(/\r\n|\n/);
     // console.log(this.texto);
      this.textoentrada = this.entrada?.texto?.replace(/\n/g, '<br>');
     // console.log(this.textoentrada);

      /*
    for(var line = 0; line < lines.length-1; line++){
      console.log(line + " --> "+ lines[line]);
    }*/
  }

}
