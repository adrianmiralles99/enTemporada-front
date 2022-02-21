import { Component, Input, OnInit } from '@angular/core';
import { Productos } from 'src/app/modelos/productos.model';
import { Recetas } from 'src/app/modelos/recetas.model';

import { RecetasService } from 'src/app/servicios/recetas.service';

@Component({
  selector: 'app-datoscreacion',
  templateUrl: './datoscreacion.component.html',
  styleUrls: ['./datoscreacion.component.scss'],
  providers: [RecetasService]

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
  imagen: string = "../../../assets/IMG/iconos/uploadImage.png";
  
  rutaimg: string ="../../../assets/IMG/recetas/";

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

  @Input() recetas?: Recetas;
  @Input() productos?: Productos[];

  productito?:Productos;
  cantidad: string = "";
  ingred: string = "";

  ingredientes: Array<Array<String>> = [];

  tipoActualT?: Productos[];
  tipoActualN?: Productos[];

  default = "Seleccione un campo"
  imagen64: any;

  ngOnInit(): void { 
    console.log(this.recetas);

    if (this.recetas){
        this.cargarDatos();
    }
  }
  ngOnChanges():void{
    //this.recetas.titulo;

  }

  cargarDatos(): void{
    this.productito = this.productos!.find(element => element.id ==this.recetas?.id_prodp);
    this.titulo = String(this.recetas?.titulo);//hay que hacerle cast si o si
    this.comensales = Number(this.recetas?.comensales);
    this.tiempo = String(this.recetas?.tiempo);
    this.tipo = String(this.recetas?.tipo);
    this.dificultad = String(this.recetas?.dificultad);
    //this.selectTipo(String(this.productito?.tipo));//pasamos el tipo para que en el desplegable salgan los productos
    if (this.productito?.tipo == "F"){
     $("#selecF").click();
    }else{
      $("#selecT").click()
    }
    this.prodPrinc = String(this.productito?.nombre);
    this.imagen = this.rutaimg + String(this.recetas?.imagen);
    this.misingredientes = this.recetas?.ingredientes ?? [];
    this.cantidadPrinc = this.misingredientes[0].split(" ")[0];//cogemos la cantidad
    this.misingredientes.shift();
    this.divideIngredientes();
    this.pasos= this.recetas?.pasos ?? [];
    //this.comensales? = this.recetas?.comensales;
  }
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
      if (this.ingred.length > 0) {
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
          if (data.error.length > 0) {
            this.errores = data.error;
          }

        }
      });
    }
  }
  actualizarReceta(){
    console.log("ACTUALIZAR");
    if (this.recetas) {
      var idprod = this.productos!.find(element => element.nombre == this.prodPrinc)!.id;

      this.recetasService.actualizarReceta(this.recetas.id,this.titulo, this.comensales, this.tiempo, this.tipo, this.dificultad, this.misingredientes, this.pasos, idprod, this.imagen, this.imagen64).subscribe({
        next: data => {
          if (data.error.length > 0) {
            this.errores = data.error;
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
