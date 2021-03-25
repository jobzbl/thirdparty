import { Component, Input, OnInit } from '@angular/core';
import * as GC from '@grapecity/spread-sheets';
import '@grapecity/spread-sheets-print';
import '@grapecity/spread-sheets-pdf';
import FaverSaver from 'file-saver';
@Component({
  selector: 'app-sheet-header',
  templateUrl: './sheet-header.component.html',
  styleUrls: ['./sheet-header.component.less']
})
export class SheetHeaderComponent implements OnInit {
  @Input() spread;
  allowDragMerge = false;
  theme = [
    {value: 'gc.spread.sheets.css', name: 'SpreadJS'},
    {value: 'gc.spread.sheets.excel2013white.css', name: 'White'},
    {value: 'gc.spread.sheets.excel2013lightGray.css', name: 'Light Gray'},
    {value: 'gc.spread.sheets.excel2013darkGray.css', name: 'Dark Gray'},
    {value: 'gc.spread.sheets.excel2016colorful.css', name: 'Colorful'},
    {value: 'gc.spread.sheets.excel2016darkGray.css', name: 'Dark Gray'},
    {value: 'gc.spread.sheets.excel2016black.css', name: 'Black'},
  ];
  constructor() { }

  ngOnInit() {
  }
  // 允许拖动合并
  mergeChange(e) {
    this.spread.options.allowUserDragMerge = e;
  }
  // 合并单元格
  mergeCells() {
    const sheet = this.spread.getActiveSheet();
    const sel = sheet.getSelections();
    console.log(sel);
    if (sel.length > 0) {
      const _sel = this.getActualCellRange(sel[sel.length - 1], sheet.getRowCount(), sheet.getColumnCount());
      sheet.addSpan(_sel.row, _sel.col, _sel.rowCount, _sel.colCount);
    }
  }
  // 拆分单元格
  splitCells() {
    const sheet = this.spread.getActiveSheet();

    const sel = sheet.getSelections();
    if (sel.length > 0) {
      const _sel = this.getActualCellRange(sel[sel.length - 1], sheet.getRowCount(), sheet.getColumnCount());
      sheet.suspendPaint();
      for (let i = 0; i < _sel.rowCount; i++) {
          for (let j = 0; j < _sel.colCount; j++) {
              sheet.removeSpan(i + _sel.row, j + _sel.col);
          }
      }
      sheet.resumePaint();
    }
  }
  getActualCellRange(cellRange, rowCount, columnCount) {
    const spreadNS = GC.Spread.Sheets;
    if (cellRange.row === -1 && cellRange.col === -1) {
        return new spreadNS.Range(0, 0, rowCount, columnCount);
    } else if (cellRange.row === -1) {
        return new spreadNS.Range(0, cellRange.col, rowCount, cellRange.colCount);
    } else if (cellRange.col === -1) {
        return new spreadNS.Range(cellRange.row, 0, cellRange.rowCount, columnCount);
    }

    return cellRange;
  }
  // 更换主题
  selTheme($event) {
    const header = document.getElementsByTagName('head')[0];
    const target: HTMLLinkElement = document.querySelector('link[href*="gc.spread.sheets"]');
    const href = target.href;
    const pos = href.indexOf('gc.spread.sheets');
    const item = href.substr(0, pos) + $event;
    header.removeChild(target);
    if (item) {
      const link = document.createElement('link');
      const spread = this.spread;
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = item;
      link.onload = function() {
          spread.refresh();
      };
      const _header = document.getElementsByTagName('head')[0];
      _header.appendChild(link);
    } else {
        this.spread.refresh();
    }
  }
  // 导出pdf
  exportPDF() {
    console.log(this.spread);
    this.spread.savePDF(function(blob: any) {
      FaverSaver.saveAs(blob, 'download.pdf');
    }, (err) => {console.log(err); });
  }
  // 导出excel
  exportExcel() {

  }
}
