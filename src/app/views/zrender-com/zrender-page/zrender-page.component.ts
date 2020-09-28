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
  graphArr = []; // 拖拽元素数组
  line = []; // 连接线数组
  ngOnInit() {
    console.log(zrender);
    const that = this;
    this.zr = zrender.init(document.getElementById('main'), {renderer: 'svg'});
    console.log(this.zrenderServiceService.data);
    this.zrenderServiceService.data.forEach((data, index) => {
      this.createRelation(data, index);
    });
  }
  createRelation(data, index, child?) {
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
        if (x.style.id === data.id) { // 子元素
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
    if (direction.pointTo.length > 0) { // 如果为起点
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
    console.log(this.graphArr);
  }

  ondragstart(params) {

  }
  ondragend(params) {

  }
}
