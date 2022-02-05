import { Component, OnInit } from '@angular/core';
import { Recetas } from 'src/app/modelos/recetas.model';
import { RecetasService } from 'src/app/servicios/recetas.service';
@Component({
  selector: 'app-indexrecetas',
  templateUrl: './indexrecetas.component.html',
  styleUrls: ['./indexrecetas.component.scss']
})
export class IndexrecetasComponent implements OnInit {

  constructor(private recetasservice: RecetasService) { }

  ngOnInit(): void {
    this.recetasservice.getAll()
    .subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e)
    });
}
  

}
