import { Component, OnInit } from '@angular/core';

import { cloneDeep, isNumber, assign } from 'lodash';
import { AgGridService } from '../../service/ag-grid.service';
import { PointsCustomHeaderComponent } from '../renderer/points-custom-header/points-custom-header.component';
import { TableDetailsTextComponent } from '../renderer/table-details-text/table-details-text.component';
// import { TableDetailsTextComponent } from '../renderer/table-details-text.component';
// import '@ag-grid-community/all-modules/dist/styles/ag-grid.css';
@Component({
  selector: 'app-ag-agrid-zorro-table',
  templateUrl: './ag-agrid-zorro-table.component.html',
  styleUrls: ['./ag-agrid-zorro-table.component.less']
})
export class AgAgridZorroTableComponent implements OnInit {
  columnDefs: any; // 表头数据
  data = [];
  rowClassRules;
  overlayNoRowsTemplate;
  frameworkComponents: any;
  checkOptionsOne; // 选择列
  allChecked = true; // 是否全选
  indeterminate = false; // 是否全不选
  gridApi;
  gridColumnApi;
  constructor(
    private agGridService: AgGridService
  ) {
    this.checkOptionsOne = cloneDeep(this.agGridService.checkOptionsOne);
    this.columnDefs = cloneDeep(this.agGridService.columnDefs); // 列表表头数据
    this.columnDefs.map(x => {
      x.headerComponentParams = {
        sortFun: this.sortFun,
        valueName: x.cellRendererParams.label,
      };
    });
    this.checkOptionsOne.map(x => {
      x.headerComponentParams = {
        sortFun: this.sortFun,
        valueName: x.cellRendererParams.label
      };
    });
    this.frameworkComponents = {
      jumpDetailsText: TableDetailsTextComponent,
      agColumnHeader: PointsCustomHeaderComponent
    };
  }
  // 排序
  sortFun = (sortType, params) => {
    const sort = [
      {
        colId: params.valueName,
        sort: sortType
      }
    ];
    this.gridApi.setSortModel(sort);
  }
  ngOnInit() {
    this.rowClassRules = {
      'row-back-2x': (params) => {
        return params.rowIndex % 2 === 1;
      }
    };
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    console.log(params);
    this.data = cloneDeep(this.agGridService.data);
    // this.pointsQuery();
    setTimeout(() => {
      this.gridApi.sizeColumnsToFit();
    });
  }

  updateSingleChecked(): void {
    this.columnDefs = [];
    this.checkOptionsOne.map(data => {
      if (data.checked) {
        this.columnDefs.push({
          headerName: data.label,
          field: data.value,
          cellRendererParams: data.cellRendererParams || null,
          cellRenderer: data.cellRenderer || '',
          pinned: data.pinned || '',
          minWidth: data.minWidth || '',
          headerComponentParams: data.headerComponentParams || {}
        });
      }
    });
    if (this.checkOptionsOne.every(item => !item.checked)) {
      this.allChecked = false;
      this.indeterminate = false;
    } else if (this.checkOptionsOne.every(item => item.checked)) {
      this.allChecked = true;
      this.indeterminate = false;
    } else {
      this.indeterminate = true;
    }
    setTimeout(() => {
      this.gridApi.sizeColumnsToFit();
    });
  }
}
