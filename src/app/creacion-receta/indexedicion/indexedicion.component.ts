import { Component, OnInit, Input } from '@angular/core';
import { Recetas } from 'src/app/modelos/recetas.model';
import { RecetasService } from 'src/app/servicios/recetas.service';
import { Productos } from 'src/app/modelos/productos.model';
import { ProductosService } from 'src/app/servicios/productos.service';
import { ActivatedRoute } from '@angular/router';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-indexedicion',
  templateUrl: './indexedicion.component.html',
  styleUrls: ['./indexedicion.component.scss'],
  providers: [ProductosService, RecetasService]

})

export class IndexedicionComponent implements OnInit {


  constructor(private router:Router,private token:TokenStorageService, private recetasservice: RecetasService,private productoService: ProductosService, private rutaActiva: ActivatedRoute) { }

  recetas!: Recetas;
  productos?: Productos[];
  id = this.rutaActiva.snapshot.paramMap.get('id') ?? 0;
  idusuario = 0;
  ngOnInit(): void {
    this.getRecetas();
    this.getProductos();
  }
  
  echarUsuario(idusuario:Number){
    if(idusuario != Number(this.token.getId())){
      this.router.navigate(['recetas']);
    }
  }
  getRecetas() {//cambiar la id por la que verdaderamente toca
    this.recetasservice.getById(this.id).subscribe({
      next: (data) => {
        this.recetas = data;
        this.idusuario = this.recetas.id_usuario;
        this.echarUsuario(this.idusuario);
      },
      error: (e) => console.error(e)
    });
  }
  getProductos() {
    this.productoService.getCalendario().subscribe({
      next: (data) => {
        this.productos = data;
      }
    });
  }

}
