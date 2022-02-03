import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moddatos',
  templateUrl: './moddatos.component.html',
  styleUrls: ['./moddatos.component.scss']
})
export class ModdatosComponent implements OnInit {

  constructor() { }
  ocultarmoduser(): void {
  }
  ngOnInit(): void {
    $(document).on("click", ".modcampo", function () {
      
      console.log($(this).next("input").css("display", "block"));
    });
  }

}
