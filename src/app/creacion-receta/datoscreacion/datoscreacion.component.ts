import { Component, Input, OnInit } from '@angular/core';
import { Productos } from 'src/app/modelos/productos.model';
import { Recetas } from 'src/app/modelos/recetas.model';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';
import { RecetasService } from 'src/app/servicios/recetas.service';
import { Router } from '@angular/router';
import { UtilsModule } from 'src/app/utils/utils.module';
import { MatSnackBar } from "@angular/material/snack-bar";
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-datoscreacion',
  templateUrl: './datoscreacion.component.html',
  styleUrls: ['./datoscreacion.component.scss'],
  providers: [RecetasService]

})
export class DatoscreacionComponent implements OnInit {
  dialogRef: any;

  constructor(private snackBar: MatSnackBar, private usuarioService: UsuarioService, private router: Router, private recetasService: RecetasService, private token: TokenStorageService) { }
  iduser_crear = Number(this.token.getId());
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
  imagen!: File;
  vistaImagen?: string = "default.png";

  rutaimg: string = "../../../assets/IMG/recetas/";


  error = new Map();

  titulocomprobacion = "";
  textocomprobacion = "";

  @Input() recetas?: Recetas;
  @Input() productos?: Productos[];

  productito?: Productos;
  cantidad: string = "";
  ingred: string = "";
  imagenUser: string = "default.png";
  ingredientes: Array<Array<String>> = [];

  tipoActualT?: Productos[];
  tipoActualN?: Productos[];

  default = "Seleccione un campo"

  ngOnInit(): void {
    if (this.recetas) {
      this.cargarDatos();
    }
    this.getUser();
  }
  ngOnChanges(): void {
    //this.recetas.titulo;

  }
  getUser() {
    this.usuarioService.getById().subscribe({
      next: (data) => {
        this.imagenUser = data.imagen;
      }
    })
  }

  cargarDatos(): void {
    this.productito = this.productos!.find(element => element.id == this.recetas?.id_prodp);
    this.titulo = String(this.recetas?.titulo);//hay que hacerle cast si o si
    this.comensales = Number(this.recetas?.comensales);
    this.tiempo = String(this.recetas?.tiempo);
    this.tipo = String(this.recetas?.tipo);
    this.dificultad = String(this.recetas?.dificultad);
    if (this.recetas?.imagen) {
      this.vistaImagen = this.recetas?.imagen;
    }

    if (this.productito?.tipo == "F") {
      $("#selecF").click();
    } else {
      $("#selecT").click()
    }

    this.prodPrinc = String(this.productito?.nombre);
    this.misingredientes = this.recetas?.ingredientes ?? [];

    this.cantidadPrinc = this.misingredientes[0].split(" ")[0];//cogemos la cantidad
    this.misingredientes.shift();
    this.divideIngredientes();
    this.pasos = this.recetas?.pasos ?? [];

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
    this.comprobacionErrores();
    if (this.error.size == 0) {
      if (this.prodPrinc && this.prodPrinc != this.default) {
        this.misingredientes.unshift(this.cantidadPrinc + " " + this.prodPrinc);
        var idprod = this.productos!.find(element => element.nombre == this.prodPrinc)!.id;
        this.recetasService.crearReceta(this.iduser_crear, this.titulo, this.comensales, this.tiempo, this.tipo, this.dificultad, this.misingredientes, this.pasos, idprod, this.imagen).subscribe({
          next: data => {
            if (data.error && data.error.length > 0) {
              this.misingredientes.shift();
            }
            else {
              const miSnackBar = this.snackBar.open("Receta creada correctamente", "Aceptar", { panelClass: 'alertcool' });
              miSnackBar.onAction().subscribe(() => {
                this.usuarioService.sumarExperiencia(this.iduser_crear, 25).subscribe({
                  next: (data) => {
                    //console.log(data);
                  }
                })
                this.router.navigate(['recetas']);
              });
            }
          }
        });
      }
    }
  }
  actualizarReceta() {
    this.comprobacionErrores();
    if (this.error.size == 0) {
      if (this.recetas) {
        var idprod = this.productos!.find(element => element.nombre == this.prodPrinc)!.id;
        this.misingredientes.unshift(this.cantidadPrinc + " " + this.prodPrinc);
        this.recetasService.actualizarReceta(this.recetas.id, this.titulo, this.comensales, this.tiempo, this.tipo, this.dificultad, this.misingredientes, this.pasos, idprod, this.imagen).subscribe({
          next: data => {
            if (data.error && data.error.length > 0) {
              this.misingredientes.shift();
            } else {
              const miSnackBar = this.snackBar.open("Receta actualizada correctamente", "Aceptar", { panelClass: 'alertcool' });
              miSnackBar.onAction().subscribe(() => {
                this.router.navigate(['/recetaindividual', this.recetas?.id]);
              });
            }

          }
        });
      }
    }
  }

  //errores
  comprobacionErrores() {
    this.error = new Map();
    //campos arriba
    if (!this.comensales) {
      this.error.set("comensales", "Comensales debe estar lleno");
    } else if (this.comensales == 0) {
      this.error.set("comensales", "Comensales debe ser mayor que 0");
    }
    if (!this.tiempo) {
      this.error.set("tiempo", "Tiempo debe estar lleno");
    }
    if (!this.tipo) {
      this.error.set("tipo", "Tipo debe estar lleno");
    }
    else if (this.dificultad == "...") {
      this.error.set("tipo", "Tipo debe tener una opción válida");

    }
    if (!this.dificultad) {
      this.error.set("dificultad", "Dificultad debe estar lleno");
    } else if (this.dificultad == "...") {
      this.error.set("dificultad", "Dificultad debe tener una opción válida");
    }
    //titulo
    if (!this.titulo) {
      this.error.set("titulo", "Titulo debe estar lleno");
    }
    if (!this.imagen && this.vistaImagen == "default.png") {
      this.error.set("imagen", "Debe seleccionar una imagen");
    }
    if (this.misingredientes.length == 0) {
      this.error.set("ingredientes", "Debe seleccionar los ingredientes");

    }
    if (this.pasos.length == 0) {
      this.error.set("pasos", "Debe explicar como se hace la receta");
    }
    if (this.cantidadPrinc == "") {
      this.error.set("cantidadPrinc", "Debe seleccionar una cantidad");
    }
    if (this.prodPrinc == "") {
      this.error.set("prodPrinc", "Debe seleccionar un producto principal");
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
