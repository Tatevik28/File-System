import {Component, OnInit, ViewChild} from '@angular/core';
import {FilesListComponent} from "../modules/files-list/components/files-list/files-list.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public path = 'app';
  public inputValue = '';
  public searchInPath = '';
  public parentPath = '';

  @ViewChild(FilesListComponent) child: FilesListComponent | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  public changeCurrentPath(event: string): void {
      this.path = 'app/' + event;
      this.searchInPath = event;
  }

  public searchPath(event: Event): void {
      // @ts-ignore
      this.inputValue = event.target.value;
  }

  public redirectToParentFolder(): void {
      if (this.path === 'app') {
        return;
      }
      const hasOneParent = this.searchInPath.lastIndexOf('/') > -1;

      if (hasOneParent) {
          this.parentPath = this.searchInPath.slice(0, this.searchInPath.lastIndexOf('/'));
          this.changeCurrentPath(this.parentPath);
      } else {
          this.path = this.parentPath = 'app';
      }
      // @ts-ignore
      this.child.redirectPath = this.parentPath;
  }
}
