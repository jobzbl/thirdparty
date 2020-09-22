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
  constructor(
    private zrenderServiceService: ZrenderServiceService
  ) { }
  zr;
  firstC;
  secondC;
  firstL;
  graphArr = [];
  line = [];
  createRelation(data, index, child?) {
    console.log(data);
    this.graphArr.unshift(
      new zrender.Circle({
        shape: {
            cx: (Math.random() * 8) * 100, // x轴位置
            cy: (Math.random() * 8) * 50, // y轴位置
            r: 30 // 半径
        },
        style: {
            text: data.name,
            fill: 'rgb(204,221,255)', // 填充颜色
            stroke: '#000', // 边框
            id: data.id
        },
        draggable: true, // 图形可拖拽
        ondrag: (params) => {this.ondrag(params, data); } // 拖拽事件
      })
    );
    this.zr.add(this.graphArr[0]); // 将图形添加到页面元素中
    if (child) {
      let targetX, targetY, startX, startY;
      this.graphArr.forEach(x => {
        if (x.style.id === data.parentId) { // 父元素
          startX = x.shape.cx;
          startY = x.shape.cy;
        }
        if (x.style.id === data.id) { // 父元素
          targetX = x.shape.cx;
          targetY = x.shape.cy;
        }
      });
      this.line.unshift(new zrender.Line({
        shape: {
          x1: startX, y1: startY, x2: targetX, y2: targetY },
        style: {
          id: data.id,
          text: data.eventDes,
          lineWidth: 1, // 线宽
          stroke: '#000' // 边框
        },
      }));
      this.zr.add(this.line[0]); // 将图形添加到页面元素中
    }
    if (data.pointTo.length > 0) {
      data.pointTo.forEach((item, i) => {
        this.createRelation(item, i, true);
      });
    }
  }
  ondrag(params, direction) {
    const nowPint = this.graphArr.filter(x => x.style.id === direction.id)[0];
    const nowLine = this.line.filter(x => x.style.id === direction.id)[0];
    if (direction.pointTo.length > 0) {
      this.line.forEach(x => {
        x.setShape({
          x1: nowPint.shape.cx + nowPint.position[0],
          y1: nowPint.shape.cy + nowPint.position[1]
        });
      });
    } else {
      nowLine.setShape({
        x2: nowPint.shape.cx + nowPint.position[0],
        y2: nowPint.shape.cy + nowPint.position[1]
      });
    }
  }
  ngOnInit() {
    console.log(zrender);
    const that = this;
    this.zr = zrender.init(document.getElementById('main'));
    console.log(this.zrenderServiceService.data);
    this.zrenderServiceService.data.forEach((data, index) => {
      this.createRelation(data, index);
    });
    // 生成圆
    // this.firstC = new zrender.Circle({
    //   shape: {
    //       cx: 30, // x轴位置
    //       cy: 30, // y轴位置
    //       r: 30 // 半径
    //   },
    //   style: {
    //       text: '第一个圆',
    //       fill: 'rgb(204,221,255)', // 填充颜色
    //       stroke: '#000' // 边框
    //   },
    //   draggable: true, // 图形可拖拽
    //   remock: '123',
    //   ondrag: (params) => {this.ondrag(params, 'start'); } // 拖拽事件

    // });
    // this.zr.add(this.firstC); // 将图形添加到页面元素中

    // this.secondC = new zrender.Circle({
    //   shape: {
    //       cx: 300, // x轴位置
    //       cy: 327, // y轴位置
    //       r: 30 // 半径
    //   },
    //   style: {
    //       text: '第二个圆',
    //       fill: 'rgb(204,221,255)', // 填充颜色
    //       stroke: '#000' // 边框
    //   },
    //   draggable: true, // 图形可拖拽
    //   ondrag: (params) => {this.ondrag(params, 'end'); } // 拖拽事件
    // });
    // this.zr.add(this.secondC); // 将图形添加到页面元素中

    // this.firstL = new zrender.Line({
    //   shape: {
    //     x1: 30,
    //     y1: 30,
    //     x2: 300,
    //     y2: 327
    //   },
    //   style: {
    //     text: '这是一条线',
    //     lineWidth: 1, // 线宽
    //     // fill: '#010640', // 填充颜色
    //     stroke: '#000' // 边框
    //   },
    // });
    // this.zr.add(this.firstL); // 将图形添加到页面元素中

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
    console.log(this.graphArr[0].shape);
  }

  ondragstart(params) {

  }
  ondragend(params) {

  }
}
