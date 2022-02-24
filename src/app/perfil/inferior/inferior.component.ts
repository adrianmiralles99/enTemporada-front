import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inferior',
  templateUrl: './inferior.component.html',
  styleUrls: ['./inferior.component.scss']
})
export class InferiorComponent implements OnInit {

  constructor() { }

  @Input() totallikes?: number;
  @Input() totalfavoritos?: number;
  @Input() totalguardadas?: number;
  @Input() totalrecetas?: number;

  ngOnInit(): void {
  }

}
