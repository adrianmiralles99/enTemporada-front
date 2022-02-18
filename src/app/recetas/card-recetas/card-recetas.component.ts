import { Component, OnInit, Input } from '@angular/core';
import { Recetas } from 'src/app/modelos/recetas.model';
import { TokenStorageService } from 'src/app/servicios/token-storage.service';
@Component({
  selector: 'app-card-recetas',
  templateUrl: './card-recetas.component.html',
  styleUrls: ['./card-recetas.component.scss'],
  providers: [TokenStorageService]
})
export class CardRecetasComponent implements OnInit {

  constructor(private token: TokenStorageService,) { }

  @Input() recetas!: Recetas[];

  hover = false;

  sesion!: boolean;
  ngOnInit(): void {

    if(this.token.getId()){
      this.sesion = true;
    }else{
      this.sesion = false;
    }
  }


}
