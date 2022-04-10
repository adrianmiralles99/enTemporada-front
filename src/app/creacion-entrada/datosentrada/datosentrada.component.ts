import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Categorias } from 'src/app/modelos/categorias.model';
import { Entradas } from 'src/app/modelos/entradas.model';
@Component({
  selector: 'app-datosentrada',
  templateUrl: './datosentrada.component.html',
  styleUrls: ['./datosentrada.component.scss']
})
export class DatosentradaComponent implements OnInit {

  @Input() categorias?: Categorias[];
  @Input() entradas?: Entradas;

  idcategoria?: number;
  imagen!: File;
  vistaImagen?: string = "default.png";
  imagenUser?: string;
  titulo: string = "";
  autor: string="";
  cuerpoentrada:string="";
  constructor(private usuarioService : UsuarioService) { }

  ngOnInit(): void {
    this.getUser();
  }
  ngOnChanges():void {
    console.log(this.idcategoria);
  }
  getUser() {
    this.usuarioService.getById().subscribe({
      next: (data) => {
        this.imagenUser = data.imagen;
        this.autor = data.nick;
      }
    })
  }

  visualizar(ev: any) {
    this.vistaImagen = "";
    var file = ev.target.files[0];
    var reader = new FileReader();

    this.imagen = file;

    reader.onload = (e) => {
      $("#img").css({
        "background-image": "url(" + e.target!.result + ")",
        "background-size": "cover",
      })
    }

    reader.readAsDataURL(file);
  }

  crearEntrada(){

  }
  actualizarReceta(){

  }

}
