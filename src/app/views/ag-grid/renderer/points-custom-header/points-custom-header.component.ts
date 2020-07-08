import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AgGridService } from 'src/app/views/service/ag-grid.service';

@Component({
  selector: 'app-points-custom-header',
  templateUrl: './points-custom-header.component.html',
  styleUrls: ['./points-custom-header.component.css']
})
export class PointsCustomHeaderComponent implements OnInit {
  params: any;
  ascSort: string;
  descSort: string;
  noSort: string;
  sortType = null;
  @ViewChild('menuButton', { read: ElementRef, static: true }) public menuButton;
  constructor(
    private agGridService: AgGridService
  ) { }

  ngOnInit(): void {
  }

  agInit(params): void {
    console.log('agInit');
    this.params = params;
    console.log(params);

    params.column.addEventListener('sortChanged', this.onSortChanged.bind(this));
    this.onSortChanged();
    // this.agGridService.changePointDataSort$.subscribe(res => {
    //   if (res === this.params.valueName) {
    //     return;
    //   } else {
    //     this.sortType = null;
    //   }
    // });
  }
  // onMenuClicked() {
  //     this.params.showColumnMenu(this.menuButton.nativeElement);
  // }
  onSortRequested(event) {
      // this.sortType = order;
      if (this.sortType === null) {
        this.sortType = 'asc';
      } else if (this.sortType === 'asc') {
        this.sortType = 'desc';
      } else {
        this.sortType = null;
      }
      event.sortFun(this.sortType, event);
      // this.agGridService.changePointDataSort$.next(event.valueName);
  }
  onSortChanged() {
    this.ascSort = this.descSort = this.noSort = 'inactive';
    if (this.params.column.isSortAscending()) {
      this.ascSort = 'active';
      // this.sortType = 'asc';
    } else if (this.params.column.isSortDescending()) {
      this.descSort = 'active';
      // this.sortType = 'desc';
    } else {
      this.noSort = 'active';
      // this.sortType = null;
    }
  }
}
