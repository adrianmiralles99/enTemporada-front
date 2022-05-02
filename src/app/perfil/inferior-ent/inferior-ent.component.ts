import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-inferior-ent',
  templateUrl: './inferior-ent.component.html',
  styleUrls: ['./inferior-ent.component.scss']
})
export class InferiorEntComponent implements OnInit {
  constructor() { }
  @Input() totallikes?: number;
  @Input() totalfavoritos?: number;
  @Input() totalguardadas?: number;
  @Input() totalentradas?: number;

  ngOnInit(): void {
  }
}
