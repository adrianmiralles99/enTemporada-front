import { Component, OnInit,Input } from '@angular/core';
import { Usuarios } from 'src/app/modelos/usuarios.model';
import { Entradas } from 'src/app/modelos/entradas.model';
@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.scss']
})
export class EntradasComponent implements OnInit {

  @Input() usuario!: Usuarios;
  @Input() ultimaentrada?: Entradas;
  @Input() entradapopular?: Entradas;

  constructor() { }

  ngOnInit(): void {
  }
}
