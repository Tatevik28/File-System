import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilesListModule} from "./modules/files-list/files-list.module";
import {UiKitsModule} from "../../../shared/modules/ui-kits/ui-kits.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import {InputModule} from '../../../shared/modules/ui-kits/input/input.module';



@NgModule({
  declarations: [
      DashboardComponent
  ],
  exports: [
      DashboardComponent
  ],
  imports: [
      CommonModule,
      FilesListModule,
      InputModule
  ]
})
export class DashboardModule { }
