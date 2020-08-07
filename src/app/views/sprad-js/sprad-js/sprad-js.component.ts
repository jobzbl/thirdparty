import { Component, OnInit } from '@angular/core';
import * as GC from '@grapecity/spread-sheets';
@Component({
  selector: 'app-sprad-js',
  templateUrl: './sprad-js.component.html',
  styleUrls: ['./sprad-js.component.css']
})
export class SpradJsComponent implements OnInit {
  spreadBackColor = 'aliceblue';
  sheetName = 'Goods List';
  hostStyle = {
    width: '100%',
    height: '90vh'
  };
  data = [
    { Name: 'Apple', Category: 'Fruit', Price: 1, 'Shopping Place': 'Wal-Mart' },
    { Name: 'Potato', Category: 'Fruit', Price: 2.01, 'Shopping Place': 'Other' },
    { Name: 'Tomato', Category: 'Vegetable', Price: 3.21, 'Shopping Place': 'Other' },
    { Name: 'Sandwich', Category: 'Food', Price: 2, 'Shopping Place': 'Wal-Mart' },
    { Name: 'Hamburger', Category: 'Food', Price: 2, 'Shopping Place': 'Wal-Mart' },
    { Name: 'Grape', Category: 'Fruit', Price: 4, 'Shopping Place': 'Sun Store' }
  ];
  columnWidth = 100;
  constructor() { }
  workbookInit(args) {
    const spread: GC.Spread.Sheets.Workbook = args.spread;
    const sheet =  spread.getActiveSheet();
    sheet.getCell(0, 0).text('My SpreadJS Angular Project').foreColor('blue');
  }
  ngOnInit() {
  }

}
