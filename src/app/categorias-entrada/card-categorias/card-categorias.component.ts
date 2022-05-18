import { Component, OnInit,Input } from '@angular/core';
import { Categorias } from 'src/app/modelos/categorias.model';
@Component({
  selector: 'app-card-categorias',
  templateUrl: './card-categorias.component.html',
  styleUrls: ['./card-categorias.component.scss']
})
export class CardCategoriasComponent implements OnInit {
  @Input() categorias?: Categorias[];
  imagen = "cooking.png";
  nombrecategoria!:any;

  constructor() { }

  ngOnInit(): void {
    this.nombrecategoria=window.localStorage.getItem('categoria');

    window.localStorage.removeItem('categoria');
  }
  ngOnChanges(){

  }
  ngAfterViewInit(){
    if (this.nombrecategoria){
      this.bajar();
    }
  }
  bajar(){
    document.getElementById(this.nombrecategoria)?.scrollIntoView({behavior: "smooth", block: "end", inline: "center"});
  }


}
