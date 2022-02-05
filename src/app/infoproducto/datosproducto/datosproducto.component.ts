import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Articulo } from 'src/app/articulo';
import { Productos } from 'src/app/modelos/productos.model';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-datosproducto',
  templateUrl: './datosproducto.component.html',
  styleUrls: ['./datosproducto.component.scss'],

})

export class DatosproductoComponent implements OnInit {
  constructor(private rutaActiva: ActivatedRoute,private productosService: ProductosService) { }
  @Input() articulo!: Productos;
  meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  id = this.rutaActiva.snapshot.paramMap.get('id');
  help = new Date();
  mesActual = this.help.getMonth();
  info =  [];

  getIndividual(): void {
    this.productosService.getById(this.id)
    .subscribe({
      next: (data) =>{
        this.articulo = data;
        console.log(this.articulo.info_nut?.e);
        
      },
      error: (e) => console.error(e)
    })
  }

  ngOnInit(): void { 
    this.getIndividual()
  }

}
