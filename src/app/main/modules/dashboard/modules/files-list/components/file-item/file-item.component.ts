import {Component, Input, OnInit} from '@angular/core';
import { File } from '../../interfaces/file';

@Component({
  selector: 'app-file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.scss']
})
export class FileItemComponent implements OnInit {
  @Input() public item: File | undefined;

  public name: string | undefined;

  constructor() { }

  ngOnInit(): void {
    this.setName();
  }

  private setName(): void {
    if (this.item) {
      const index = this.item.path.lastIndexOf('/');
      this.name = this.item.path.slice(index + 1, this.item.path.length);
    }
  }
}
