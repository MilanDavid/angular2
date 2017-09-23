import {Component, Input, OnInit } from '@angular/core';
import {Recepie} from '../../recepie.model';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {

  @Input() recepies: Recepie;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
