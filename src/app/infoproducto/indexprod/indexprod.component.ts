import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTES } from 'src/app/mock-articulos';


@Component({
  selector: 'app-indexprod',
  templateUrl: './indexprod.component.html',
  styleUrls: ['./indexprod.component.scss']
})
export class IndexprodComponent implements OnInit {
  constructor(private rutaActiva: ActivatedRoute) { }
  id = this.rutaActiva.snapshot.paramMap.get('id');

  articulo = PRODUCTES.find(element => element.id == (this.id ?? -1))!;

  ngOnInit(): void { }

}
