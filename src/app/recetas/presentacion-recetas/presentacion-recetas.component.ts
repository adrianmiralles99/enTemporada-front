import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-presentacion-recetas',
  templateUrl: './presentacion-recetas.component.html',
  styleUrls: ['./presentacion-recetas.component.scss']
})
export class PresentacionRecetasComponent implements OnInit {
  @Input() titulo: string = "";
  @Input() cantidad: number = 0;

  constructor() { }
  ngOnInit(): void {
 
  }

}
