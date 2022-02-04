import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moddatos',
  templateUrl: './moddatos.component.html',
  styleUrls: ['./moddatos.component.scss']
})
export class ModdatosComponent implements OnInit {

  constructor() { }
  nombreuser="Cecilio G";//acá habrá que poner el nombre real del user con el $_session que exista  
  infouser = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntu"
 + " labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut";
 
  ngOnInit(): void {
   
    
  }

}
