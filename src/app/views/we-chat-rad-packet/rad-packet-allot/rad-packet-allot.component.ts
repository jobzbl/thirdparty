import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rad-packet-allot',
  templateUrl: './rad-packet-allot.component.html',
  styleUrls: ['./rad-packet-allot.component.less']
})
export class RadPacketAllotComponent implements OnInit {
  number; // 红包个数
  money; // 红包金额
  redArr = [];
  constructor() { }

  ngOnInit() {
  }
  shengcheng() {
    const average =  this.money / this.number;
    const optimum = parseFloat(( average + (Math.random() * (this.money / 10))).toFixed(2));
    const average2 = ((this.money - optimum) / this.number).toFixed(2);
    console.log(optimum);
    // this.redArr
    this.redArr.push({
      sum: optimum,
      zuijia: true
    });
    for (let i = 1; i < this.number; i++) {
      this.redArr.push({
        sum: average2,
        zuijia: false
      });
    }
  }
}
