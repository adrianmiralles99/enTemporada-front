import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos } from 'src/app/modelos/productos.model';
import { ProductosService } from 'src/app/servicios/productos.service';


@Component({
  selector: 'app-indexprod',
  templateUrl: './indexprod.component.html',
  styleUrls: ['./indexprod.component.scss']
})
export class IndexprodComponent implements OnInit {
  constructor(private rutaActiva: ActivatedRoute) { }
  
  ngOnInit(): void { 
   
  }


  id = this.rutaActiva.snapshot.paramMap.get('id');



}
