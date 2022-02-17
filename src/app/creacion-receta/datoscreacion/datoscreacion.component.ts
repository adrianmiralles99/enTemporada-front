import { Component, Input, OnInit } from '@angular/core';
import { Productos } from 'src/app/modelos/productos.model';
import { RecetasService } from 'src/app/servicios/recetas.service';

@Component({
  selector: 'app-datoscreacion',
  templateUrl: './datoscreacion.component.html',
  styleUrls: ['./datoscreacion.component.scss']
})
export class DatoscreacionComponent implements OnInit {

  constructor(private recetasService: RecetasService) { }

  comensales: number = 0;
  tiempo: string = "";
  tipo: string = "";
  dificultad: string = "";
  cantidadPrinc: string = "";
  prodPrinc: string = "";
  titulo: string = "";
  pasos: Array<string> = [];
  descripcion: string = "";
  misingredientes: string[] = [];
  imagen: string = "";


  errores?: {
    comensales: number;
    tiempo: string;
    tipo: string;
    dificultad: string;
    cantidadPrinc: string;
    prodPrinc: string;
    titulo: string;
    pasos: Array<string>;
    descripcion: string;
    misingredientes: string[];
    imagen: string;
  };

  @Input() productos?: Productos[];
  cantidad: string = "";
  ingred: string = "";

  ingredientes: Array<Array<String>> = [];

  tipoActualT?: Productos[];
  tipoActualN?: Productos[];

  default = "Seleccione un campo"
  imagen64: any;

  ngOnInit(): void { }


  selectTipo(tipo: string) {
    this.prodPrinc = "";
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
  visualizar(ev: any) {
    var file = ev.target.files[0];
    var reader = new FileReader(),
      result = 'empty';

    this.imagen = file.name;

    reader.onload = (e) => {
      $("#img").css({
        "background-image": "url(" + e.target!.result + ")",
        "background-size": "cover",
      })
      this.imagen64 = e.target!.result;
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

    if ($(".desplegable option:selected").val() != null) {
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

  crearReceta() {
    if (this.prodPrinc && this.prodPrinc != this.default) {
      var idprod = this.productos!.find(element => element.nombre == this.prodPrinc)!.id;

      this.recetasService.crearReceta(this.titulo, this.comensales, this.tiempo, this.tipo, this.dificultad, this.misingredientes, this.pasos, idprod, this.imagen, this.imagen64).subscribe({
        next: data => {
          if (data.error) {
            this.errores = data.error;
            console.log(this.errores);
          }

        }
      });
    }
  }

  // PASOS
  agregarPaso() {
    var descripcion = this.descripcion;
    this.descripcion = "";

    if (descripcion.length > 0) {
      this.pasos.push(descripcion);
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
}
