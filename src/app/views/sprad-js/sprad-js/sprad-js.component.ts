import { Component, OnInit, NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import '@grapecity/spread-sheets-resources-zh';
GC.Spread.Common.CultureManager.culture('zh-cn');
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SpreadSheetsModule } from '@grapecity/spread-sheets-angular';
import * as GC from '@grapecity/spread-sheets';
import { getData } from '../data/app.data';
@Component({
  selector: 'app-sprad-js',
  templateUrl: './sprad-js.component.html',
  styleUrls: ['./sprad-js.component.css']
})
export class SpradJsComponent {
  autoGenerateColumns = false;
  dataSource: any[];
  spread: GC.Spread.Sheets.Workbook;
  hostStyle = {
      width: '100%',
      height: 'calc(100% - 30px)'
  };
  hitTestResult;
  // workbookInit(args) {
  //   const spread: GC.Spread.Sheets.Workbook = args.spread;
  //   const sheet =  spread.getActiveSheet();
  //   sheet.getCell(0, 0).text('第一行第一行').foreColor('blue');
  // }
  constructor() {
      this.dataSource = getData();
  }
  initSpread($event: any) {
      this.spread = $event.spread;
      const sheet =  this.spread.getActiveSheet();
      // 第一格插入数据并设置字体颜色
      sheet.getCell(0, 0).text('第一格插入数据').foreColor('blue');
      // 变更列头高度。
      sheet.setRowHeight(0, 30.0, GC.Spread.Sheets.SheetArea.colHeader);
      // 变更行头宽度。
      sheet.setColumnWidth(0, 50.0, GC.Spread.Sheets.SheetArea.rowHeader);

      // 设置整个列头的背景色和前景色。
      const row = sheet.getRange(0, -1, 1, -1, GC.Spread.Sheets.SheetArea.colHeader);
      // row.backColor('#fff');
      // row.foreColor('#000');
  }
  onClick(){

  }
}
