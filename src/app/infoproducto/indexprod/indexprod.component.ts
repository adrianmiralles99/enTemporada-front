import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-indexprod',
  templateUrl: './indexprod.component.html',
  styleUrls: ['./indexprod.component.scss']
})
export class IndexprodComponent implements OnInit {
  constructor(private rutaActiva: ActivatedRoute) { }
  nombre = this.rutaActiva.snapshot.paramMap.get('idproducto');
  
  ngOnInit(): void {
  }

}
