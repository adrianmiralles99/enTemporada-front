import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subir',
  templateUrl: './subir.component.html',
  styleUrls: ['./subir.component.scss']
})
export class SubirComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  subir() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
}
