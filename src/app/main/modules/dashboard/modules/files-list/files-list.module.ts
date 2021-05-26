import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesListComponent } from './components/files-list/files-list.component';
import { FileItemComponent } from './components/file-item/file-item.component';



@NgModule({
  declarations: [
      FilesListComponent,
      FileItemComponent
  ],
  imports: [
      CommonModule
  ],
  exports: [
    FilesListComponent,
    FileItemComponent
  ]
})
export class FilesListModule { }

