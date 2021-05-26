import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[jInput]'
})
export class InputDirective {

  constructor(
    public el: ElementRef) {
  }

}
