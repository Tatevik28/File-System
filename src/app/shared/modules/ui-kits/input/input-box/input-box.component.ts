import { Component, ContentChild, Input, OnInit } from '@angular/core';
import {InputDirective} from '../input/input.directive';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss']
})
export class InputBoxComponent implements OnInit {

  @ContentChild(InputDirective) jInput: InputDirective | undefined;

  @Input() public classList = '';
  @Input() public label = '';
  @Input() public icon = '';

  constructor() { }

  ngOnInit() {
  }

}
