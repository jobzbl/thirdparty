// Author: T4professor

import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
// import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid';

@Component({
  selector: 'bi-table-details-test',
  template: `
    <a *ngIf="label=='operation'" (click)="onClick($event)">详细信息</a>
    <!-- 点位号 -->
    <div *ngIf="label=='aimPoint'">
      <span>{{params.data.aimPoint}}</span>
    </div>
    <!-- 点位名称 -->
    <div *ngIf="label=='pointName'">
      <span>{{params.data.pointName}}</span>
    </div>
    <!-- 点位描述 -->
    <div *ngIf="label=='remark'">
      <span>{{params.data.remark}}</span>
    </div>
    <!-- 最新值 -->
    <div *ngIf="label=='currentValue'">
      <span *ngIf="params.data.pointValueType === '2' && params.data.enumId; else notEnumPoint;">
        {{ params.data.currentValue}}
      </span>
      <ng-template #notEnumPoint>
        <span>{{ params.data.currentValue }}</span>
      </ng-template>
    </div>
    <!-- 连接状态 -->
    <div *ngIf="label=='dataLinkStatus'">
      <span *ngIf="params.data.dataLinkStatus === '0'">
        <i nz-icon iconfont="icon-check-cuccess"></i> 正常
      </span>
      <span *ngIf="params.data.dataLinkStatus === '1'">
        <i nz-icon iconfont="icon-worn-repeat"></i> 超时
      </span>
    </div>
    <!-- 报警状态 -->
    <div *ngIf="label=='alarmStatus'">
      <span *ngIf="params.data.alarmStatus === '0'">
        <i nz-icon iconfont="icon-check-cuccess"></i> 正常
      </span>
      <span *ngIf="params.data.alarmStatus === '1'">
        <i nz-icon iconfont="icon-worn-repeat"></i> 报警
      </span>
    </div>
    <!-- 报警级别 -->
    <div *ngIf="label=='alarmLevel'">
      <span *ngIf="params.data.alarmLevel">{{ params.data.alarmLevel }}</span>
      <span *ngIf="!params.data.alarmLevel">--</span>
    </div>
    <!-- 报警时间 -->
    <div *ngIf="label=='alarmTime'">
      <span *ngIf="params.data.alarmTime">{{ params.data.alarmTime | date: 'yyyy-MM-dd HH:mm:ss'}}</span>
      <span *ngIf="!params.data.alarmTime">--</span>
    </div>
    <!-- 最后更新时间 -->
    <div *ngIf="label=='latestTime'">
      <span>{{ params.data.latestTime | date: 'yyyy-MM-dd HH:mm:ss'}}</span>
    </div>
    `
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
