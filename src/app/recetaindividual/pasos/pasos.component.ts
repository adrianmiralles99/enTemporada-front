import { Component, Input, OnInit, OnChanges } from '@angular/core';
@Component({
  selector: 'app-pasos',
  templateUrl: './pasos.component.html',
  styleUrls: ['./pasos.component.scss']
})
export class PasosComponent implements OnInit {

  @Input() pasos?: string[] = [];
  mispasos?: string[];
  
  constructor() { }


  ngOnInit(): void { }


}
