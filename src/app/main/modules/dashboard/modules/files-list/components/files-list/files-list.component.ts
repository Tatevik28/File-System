import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import { FilesListConstant } from '../../constants/files-list-constant';
import * as _ from 'lodash';
import { File } from '../../interfaces/file';
import { Orders } from '../../interfaces/orders';

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.scss']
})
export class FilesListComponent implements OnInit, OnChanges {
  @Output() pathClicked: EventEmitter<string> = new EventEmitter();

  @Input()
  get redirectPath(): string {
    return this._redirectPath;
  }
  set redirectPath(redirectPath: string) {
    this._redirectPath = redirectPath;
    this.redirectToParent(this._redirectPath);
  }
  @Input()
  get searchValue(): string {
    return this._searchValue;
  }
  set searchValue(searchValue: string) {
    this._searchValue = searchValue;
    this.setSearchedData(this.searchValue, this.searchInPath);
  }
  @Input() searchInPath = '';

  // tslint:disable-next-line:variable-name
  private _searchValue = '';
  // tslint:disable-next-line:variable-name
  private _redirectPath = '';
  public orders: Orders = {
      path: false,
      type: false,
      size: false,
      modificationDate: false
  };
  public items = FilesListConstant;
  public currentItems: Array<File> | undefined;

  constructor() { }

  ngOnInit(): void {
      this.setFileDetailedType();
      this.setFirstFile();
  }

  // tslint:disable-next-line:typedef
  ngOnChanges(changes: SimpleChanges) {
    if (changes.redirectPath) {
      this.redirectToParent(changes.redirectPath.currentValue);
    }
  }

  private setFirstFile(): void {
      this.currentItems = this.items.filter((item) => {
          return !item.path.includes('/');
      });
  }

  private setSearchedData(searchData: string, searchInPath: string): void {
      if (searchData) {
          this.currentItems = this.items.filter(item => {
            return item.path.includes(`${searchInPath}/`);
          });
          this.currentItems = this.currentItems.filter(item => {
            const index = item.path.lastIndexOf('/');
            return item.path.slice(index + 1, item.path.length).includes(searchData);
          });
      } else {
          this.currentItems = this.items.filter(item => {
             return item.path.includes(`${searchInPath}/`) && item.path.lastIndexOf('/') === (`${searchInPath}/`.length - 1);
          });
          if (!this.currentItems.length) {
             this.setFirstFile();
          }
      }
  }

  private redirectToParent(parentPath: string): void {
      this.currentItems = this.items.filter(item => {
        return item.path.includes(`${parentPath}/`) && item.path.lastIndexOf('/') === (`${parentPath}/`.length - 1);
      });

      if (!this.currentItems.length) {
          this.setFirstFile();
      }
  }

  private setFileDetailedType(): void {
      this.items.map(item => {
          if (item.type === 'file') {
              const type = item.path.slice(item.path.lastIndexOf('.') + 1, item.path.length);
              switch (type) {
                  case 'txt': {
                    item.type = 'Text Document';
                    break;
                  }
                  case 'pdf': {
                    item.type = 'PDF File';
                    break;
                  }
                  case 'jpg': {
                    item.type = 'JPEG File';
                    break;
                  }
                  case 'csv': {
                    item.type = 'CSV File';
                    break;
                  }
                  case 'doc': {
                    item.type = 'Document';
                    break;
                  }
                  default: {
                    item.type = 'File';
                  }
              }
          }
      });
  }

  public redirectToFile(selectedItem: File): void {
      if (selectedItem.type === 'folder') {
          this.pathClicked.emit(selectedItem.path);
          this.currentItems = this.items.filter(item => {
              return item.path.includes(`${selectedItem.path}/`) && item.path.lastIndexOf('/') === (`${selectedItem.path}/`.length - 1);
          });
      }
  }

  public setOrders(iterate: keyof Orders): void {
      if (this.currentItems && this.currentItems.length > 1) {
          this.orders[iterate] = ((this.orders[iterate] === 'desc') ? 'asc' : 'desc');
          Object.keys(this.orders).forEach(item => {
            if (item !== iterate) {
              // @ts-ignore
              this.orders[item] = false;
            }
          });
          // @ts-ignore
          this.currentItems = _.orderBy(this.currentItems, [iterate], [this.orders[iterate]]);
      }
  }

}
