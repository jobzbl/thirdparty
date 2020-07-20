import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-table-details-text',
  templateUrl: './table-details-text.component.html',
  styleUrls: ['./table-details-text.component.css']
})
export class TableDetailsTextComponent implements ICellRendererAngularComp {

  params;
  label: any;
  agInit(params): void {
    this.params = params;
    this.label = this.params.label || null;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick($event) {
    if (this.params.onClick instanceof Function) {
      // put anything into params u want pass into parents component
      // const params = {
      //   event: $event,
      //   rowData: this.params.node.data
      // };
      this.params.onClick(this.params.node.data);

    }
  }

}
