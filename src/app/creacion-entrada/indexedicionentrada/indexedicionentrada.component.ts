import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/modelos/categorias.model';
import { CategoriasService } from 'src/app/servicios/categorias.service';
import { Entradas } from 'src/app/modelos/entradas.model';
import { EntradasService } from 'src/app/servicios/entradas.service';
import { ActivatedRoute } from '@angular/router';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-indexedicionentrada',
  templateUrl: './indexedicionentrada.component.html',
  styleUrls: ['./indexedicionentrada.component.scss'],
  providers: [CategoriasService]

})
export class IndexedicionentradaComponent implements OnInit {
  entrada!:Entradas;
  categorias?: Categorias[];
  id = this.rutaActiva.snapshot.paramMap.get('id') ?? 0;
  idusuario = 0;

  constructor(private router:Router,private token:TokenStorageService,private categoriasService: CategoriasService, private rutaActiva: ActivatedRoute, private entradasService: EntradasService) { }

  ngOnInit(): void {
    this.getCategorias();
    this.getEntrada();
  }
  echarUsuario(idusuario:Number){
    if(idusuario != Number(this.token.getId())){
      this.router.navigate(['entradas']);
    }
  }
  getCategorias(){
    this.categoriasService.getAll().subscribe({
      next: (data) => {
        this.categorias = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
  getEntrada(){
    this.entradasService.getById(this.id).subscribe({
      next:(data)=>{
        this.entrada =data;
        this.idusuario = this.entrada.id_usuario;
        this.echarUsuario(this.idusuario);
      },
      error: (e) => console.error(e)

    })
  }


}
