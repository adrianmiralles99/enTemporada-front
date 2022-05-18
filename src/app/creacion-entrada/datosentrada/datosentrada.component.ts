import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Categorias } from 'src/app/modelos/categorias.model';
import { Entradas } from 'src/app/modelos/entradas.model';
import { EntradasService } from 'src/app/servicios/entradas.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-datosentrada',
  templateUrl: './datosentrada.component.html',
  styleUrls: ['./datosentrada.component.scss']
})
export class DatosentradaComponent implements OnInit {

  @Input() categorias?: Categorias[];
  @Input() entrada?: Entradas;

  idusuario?:number = 0;
  idcategoria?: number = 0;
  imagen!: File;
  vistaImagen?: string = "default.png";
  imagenUser?: string;
  titulo: string = "";
  cuerpoentrada:string="";

  autor: string="";

  error = new Map();

  constructor(private snackBar: MatSnackBar, private router: Router, private usuarioService : UsuarioService, private entradasService : EntradasService) { }

  ngOnInit(): void {
    this.getUser();
  }
  ngOnChanges():void {
    if (this.entrada){
      this.cargarDatos();
    }
  }
  getUser() {
    this.usuarioService.getById().subscribe({
      next: (data) => {
        this.imagenUser = data.imagen;
        this.autor = data.nick;
        this.idusuario = data.id;
      }
    })
  }

  cargarDatos(): void {
    this.vistaImagen = this.entrada?.imagen;
    this.titulo = this.entrada!.titulo;
    this.cuerpoentrada = this.entrada!.texto as string;
    this.idcategoria = this.entrada?.id_categoria;
    //this.comensales? = this.recetas?.comensales;
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
    this.comprobacionErrores();
    if (this.error.size == 0) {
      this.entradasService.crearEntrada(this.titulo, this.cuerpoentrada, this.idcategoria!,this.imagen).subscribe({
        next: data => {
          if (data.error && data.error.length > 0) {
            let miSnackBar = this.snackBar.open("Entrada creada incorrectamente, intentelo más tarde", "Aceptar", { panelClass: 'alertsad' });
            miSnackBar.onAction().subscribe(() => {
            });
          }else{
            const miSnackBar = this.snackBar.open("Entrada creada correctamente", "Aceptar", { panelClass: 'alertcool' });
            miSnackBar.onAction().subscribe(() => {
              this.usuarioService.sumarExperiencia(this.idusuario!, 3).subscribe({
                next: (data) => {
                  console.log(data);
                }
              })
              this.router.navigate(['entradas']);
            });
          }
        }
      });
    }
  }
  actualizarEntrada(){
    this.comprobacionErrores();
    if (this.error.size == 0) {
      this.entradasService.actualizarEntrada(this.entrada!.id,this.titulo, this.cuerpoentrada, this.idcategoria!,this.imagen).subscribe({
        next: data => {
          if (data.error && data.error.length > 0) {
            let miSnackBar = this.snackBar.open("Entrada creada incorrectamente, intentelo más tarde", "Aceptar", { panelClass: 'alertsad' });
            miSnackBar.onAction().subscribe(() => {
            });
          }else{
            const miSnackBar = this.snackBar.open("Entrada actualizada correctamente", "Aceptar", { panelClass: 'alertcool' });
            miSnackBar.onAction().subscribe(() => {
              this.router.navigate(['entradas']);
            });
          }
        }
      });
    }
  }

  comprobacionErrores(){
    this.error = new Map();
    let texto, textoTroceado, numeroPalabras = 0;
    let primerBlanco = /^[ ]+/;let ultimoBlanco = / $/;let variosBlancos = /[ ]+/g
    if(this.cuerpoentrada){
      texto = this.cuerpoentrada;
      texto = texto.replace (variosBlancos," ");
      texto = texto.replace (primerBlanco,"");
      texto = texto.replace (ultimoBlanco,"");
      textoTroceado = texto.split(" ");
      numeroPalabras = textoTroceado.length;
    }
    //campos arriba
    if (!this.titulo || this.titulo == "") {
      this.error.set("titulo", "Debe rellenar el título de la entrada");
    }
    if (this.idcategoria! < 1 || this.idcategoria! > this.categorias!.length){
      this.error.set("categoria", "Debe seleccionar alguna categoría válida");
    }
    if (!this.imagen && this.vistaImagen == "default.png") {
      this.error.set("imagen", "Debe seleccionar una imagen");
    }
    if(!this.cuerpoentrada){
      this.error.set("cuerpoentrada", "Debe rellenar el cuerpo de la entrada");
    }
    else if (numeroPalabras < 100){
      this.error.set("cuerpoentrada", "El cuerpo de la entrada debe tener más de 100 palabras (tiene " + numeroPalabras + ")");
    }
  }

}
