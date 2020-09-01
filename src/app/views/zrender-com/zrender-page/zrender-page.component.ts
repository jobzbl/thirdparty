import { Component, OnInit } from '@angular/core';
import { ZrenderServiceService } from '../service/zrender-service.service';
// import { ConsoleReporter } from 'jasmine';
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
  graphArr = [];
  constructor(
    private zrenderServiceService: ZrenderServiceService
  ) { }

  ngOnInit() {
    console.log(zrender);
    const that = this;
    this.zr = zrender.init(document.getElementById('main'));
    console.log(this.zrenderServiceService.data);
    this.zrenderServiceService.data.forEach((data) => {
      // this.graphArr
      const graph = new zrender.Circle({
        shape: {
            cx: 120, // x轴位置
            cy: 120, // y轴位置
            r: 30 // 半径
        },
        style: {
            text: data.name,
            fill: 'rgb(204,221,255)', // 填充颜色
            stroke: '#000' // 边框
        },
        draggable: true, // 图形可拖拽
        remock: '123',
        ondrag: (params) => {this.ondrag(params, 'start'); } // 拖拽事件
      });
    });
    // 生成圆
    this.firstC = new zrender.Circle({
      shape: {
          cx: 30, // x轴位置
          cy: 30, // y轴位置
          r: 30 // 半径
      },
      style: {
          text: '第一个圆',
          fill: 'rgb(204,221,255)', // 填充颜色
          stroke: '#000' // 边框
      },
      draggable: true, // 图形可拖拽
      remock: '123',
      ondrag: (params) => {this.ondrag(params, 'start'); } // 拖拽事件

    });
    this.zr.add(this.firstC); // 将图形添加到页面元素中

    this.secondC = new zrender.Circle({
      shape: {
          cx: 300, // x轴位置
          cy: 327, // y轴位置
          r: 30 // 半径
      },
      style: {
          text: '第二个圆',
          fill: 'rgb(204,221,255)', // 填充颜色
          stroke: '#000' // 边框
      },
      draggable: true, // 图形可拖拽
      ondrag: (params) => {this.ondrag(params, 'end'); } // 拖拽事件
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
        text: '这是一条线',
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
    this.secondC.setShape.cx = 0;
  }
  ondrag(params, direction) {
    if (direction === 'start') {
      this.firstL.setShape({
        x1: this.firstC.position[0] + 30,
        y1: this.firstC.position[1] + 30,
      });
    } else {
      this.firstL.setShape({
        x2: this.secondC.shape.cx - this.secondC.shape.r + this.secondC.position[0] + 30,
        y2: this.secondC.shape.cy - this.secondC.shape.r + this.secondC.position[1] + 30
      });
    }
  }
  ondragstart(params) {

  }
  ondragend(params) {

  }
}
