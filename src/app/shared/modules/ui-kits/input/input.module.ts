import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { InputBoxComponent } from './input-box/input-box.component';
import {InputDirective} from './input/input.directive';



@NgModule({
  declarations: [
    InputBoxComponent,
    InputDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputBoxComponent,
    InputDirective
  ]
})
export class InputModule { }
