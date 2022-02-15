import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';
import { Productos } from 'src/app/modelos/productos.model';
import { RecetasService } from 'src/app/servicios/recetas.service';

@Component({
  selector: 'app-datoscreacion',
  templateUrl: './datoscreacion.component.html',
  styleUrls: ['./datoscreacion.component.scss']
})
export class DatoscreacionComponent implements OnInit {

  constructor(private productoService: ProductosService,private recetaService: RecetasService) { }
  errores = new Map();
  u_id = 1;
  titulo: string = "";
  comensales: number = 1;
  tiempo: string = "";
  tipo: string = "";
  dificultad: string = "";
  cantidadPrinc: string = "";
  imagen: string = ""; 
  id_prodp: number = 0; //  $(".desplegable option:selected" ).val());
  productos?: Productos[];
  misingredientes: string[] = [];
  cantidad: string = "";
  ingred: string = "";

  ingredientes: Array<Array<String>> = [];

  tipoActualT: Productos[] = [];
  tipoActualN: Productos[] = [];

  pasos: Array<String> = [];
  descripcion: string = "";


  ngOnInit(): void {
    this.getProductos();
  }

  
  getProductos() {
    this.productoService.getCalendario().subscribe({
      next: (data) => {
        this.productos = data;
      }
    });
  }

  selectTipo(tipo: string) {
    if (this.productos) {
      if (tipo == "F") {
        this.tipoActualT = this.productos!.filter(element => element.tipo == "F" && element.calendario![new Date().getMonth()].estado != "N");
        this.tipoActualN = this.productos!.filter(element => element.tipo == "F" && element.calendario![new Date().getMonth()].estado == "N");
      }
      else if (tipo == "V") {
        this.tipoActualT = this.productos!.filter(element => element.tipo == "V" && element.calendario![new Date().getMonth()].estado != "N");
        this.tipoActualN = this.productos!.filter(element => element.tipo == "V" && element.calendario![new Date().getMonth()].estado == "N");
      }
    }
   
    


  }

  // COPIADO DE INTERNET :D
  visualizar() {
    var file = $('#inputIMG').prop("files")[0];
    var reader = new FileReader();
    this.imagen = file.name;
    reader.onload = function (e) {
      if (e.target) {
        $("#img").css({
          "background-image": "url(" + e.target.result + ")",
          "background-size": "cover",
        });
      }
    }
    reader.readAsDataURL(file);
  }

  // DIVIDE LA LISTA DE INGREDIENTES EN DOS FILAS PARA PODER PARTIRLA POR LA MITAD
  divideIngredientes() {
    if (this.misingredientes.length % 2 == 0) {
      this.ingredientes[0] = this.misingredientes.slice(0, (this.misingredientes.length / 2));
    }
    else {
      this.ingredientes[0] = this.misingredientes.slice(0, (this.misingredientes.length / 2) + 1);
    }
    this.ingredientes[1] = this.misingredientes.slice(this.ingredientes[0].length, this.misingredientes.length);
  }

  crearIngrediente() {
    let c = this.cantidad;
    let i = this.ingred;

    if ($(".desplegable option:selected" ).val() != null) {
    if (this.cantidad.length >= 1 && this.ingred.length >= 1) {
      this.misingredientes.push(c + " " + i);
      this.divideIngredientes();
    }
  }
    this.ingred = "";
    this.cantidad = "";
  }

  quitarIngrediente(fila: number, posicion: number) {

    if (fila == 0) {
      this.misingredientes.splice(posicion, 1);
    }
    else {
      this.misingredientes.splice(posicion + this.ingredientes[0].length, 1);
    }
    this.divideIngredientes();
  }


//CODIGO DE LOS PASOS

  agregarPaso() {
    var descripcion = this.descripcion;
    this.descripcion = "";
 

    if (descripcion.length > 0) {
      this.pasos.push(descripcion);
      console.log(this.pasos);
      
    }

    setTimeout(() => {
      document.getElementById("descripcion")?.scrollIntoView({ behavior: "smooth" });
    }, 1);
  }

  quitarPaso(pos: number) {
    this.pasos.splice(pos, 1);
  }

  getNumeroPaso() {
    return this.pasos.length + 1;
  }


  //FUNCION CREAR PRUEBA

enviarReceta(){
  this.agregarPaso();
  this.id_prodp = $(".desplegable option:selected" ).val() as number;
  // this.titulo = $("#titulo").text();
  this.errores.clear();
  if (this.tipo == "") {
    this.errores.set("Tipo","Tipo esta vacio")
  }
  if (this.imagen == "") {
    this.errores.set("Imagen","Imagen esta vacio")
  }
  if (this.titulo == "") {
    this.errores.set("Titulo","Titulo esta vacio")
  }
  if (this.tiempo == "") {
    this.errores.set("Tiempo","Tiempo esta vacio")
  }
  if (this.comensales == 0) {
    this.errores.set("Comensales","Comensales esta vacio")
  }
  if (this.dificultad == "") {
    this.errores.set("Dificultad","Dificultad esta vacio")
  }
  if (this.ingredientes.length == 0) {
    this.errores.set("Ingredientes","Ingredientes esta vacio")
  }
  if (this.pasos.length == 0) {
    this.errores.set("Pasos","Pasos esta vacio")
  }
  
  if (this.errores.size == 0) {
    this.recetaService.crearReceta(this.u_id, this.tipo, this.id_prodp, this.imagen, this.titulo, this.tiempo, this.dificultad, this.comensales, this.ingredientes,this.pasos);
  }



}
}