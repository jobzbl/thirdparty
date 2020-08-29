import { Component, OnInit } from '@angular/core';
declare const zrender: any;
// import {zrender} from 'zrender';

@Component({
  selector: 'app-zrender-page',
  templateUrl: './zrender-page.component.html',
  styleUrls: ['./zrender-page.component.less']
})
export class ZrenderPageComponent implements OnInit {
  zr;
  firstC;
  secondC;
  firstL;
  constructor() { }

  ngOnInit() {
    console.log(zrender);
    const that = this;
    this.zr = zrender.init(document.getElementById('main'));
    // 生成圆
    this.firstC = new zrender.Circle({
      shape: {
          cx: 30, // x轴位置
          cy: 30, // y轴位置
          r: 30 // 半径
      },
      style: {
          fill: '#000', // 填充颜色
          stroke: '#000' // 边框
      },
      draggable: true // 图形可拖拽
    });
    this.zr.add(this.firstC); // 将图形添加到页面元素中

    this.secondC = new zrender.Circle({
      shape: {
          cx: 300, // x轴位置
          cy: 327, // y轴位置
          r: 30 // 半径
      },
      style: {
          fill: '#010640', // 填充颜色
          stroke: '#000' // 边框
      },
      draggable: true, // 图形可拖拽
    });
    // this.secondC.dirty();
    this.secondC.on('mousedown', () => {
      console.log('asd');
    });
    this.secondC.on('mousewheel', () => {
      console.log('asd123');
    });
    this.zr.add(this.secondC); // 将图形添加到页面元素中

    this.firstL = new zrender.Line({
      shape: {
        x1: 30,
        y1: 30,
        x2: 300,
        y2: 327
      },
      style: {
        lineWidth: 1, // 线宽
        // fill: '#010640', // 填充颜色
        stroke: '#000' // 边框
      },
    });
    this.zr.add(this.firstL); // 将图形添加到页面元素中

  }
  dispose() { // 销毁
    zrender.dispose(this.zr);
  }
  animate() {
    const that = this;
    this.firstC.animate('style', false) // 动画
    .when(1000, {fill: 'red'})
    .done(() => {
      that.firstC.animateTo({
        position: [10, 10]
      });
    }).start();
    console.log(this.firstC);
    // this.firstC.animators[0].start(); // 开始动画
  }
  free() {
    console.log(this.secondC.getBoundingRect());
    console.log(this.secondC.contain(300, 327));
    this.secondC.setShape.cx = 0;
  }
}
