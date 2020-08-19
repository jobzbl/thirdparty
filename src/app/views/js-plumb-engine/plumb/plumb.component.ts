

import { Component, OnInit, AfterViewInit, Input, ElementRef, HostListener } from '@angular/core';
import $ from 'jquery';
// import {jsPlumb} from 'jsPlumb';
import * as d3 from 'd3';
import { CdkDragDrop, CdkDragMove, CdkDragStart, CdkDragEnd } from '@angular/cdk/drag-drop';
import { MOTION } from '../../../directive/contents';
import { Subject, BehaviorSubject, asapScheduler } from 'rxjs';
import { filter, timeout, observeOn } from 'rxjs/operators';
declare const jsPlumb: any;
export interface Node {
  uid: string;
  text: string;
  currentX: string;
  currentY: string;
  color: string;
  iconType: string;
}
export interface CdkDragNode {
  // 显示名称
  name: string;
  color: string;
  iconType: string;
  iconColor: string;
}

@Component({
  selector: 'app-plumb',
  templateUrl: './plumb.component.html',
  styleUrls: ['./plumb.component.less']
})
export class PlumbComponent implements OnInit, AfterViewInit {
  title = 'ngx-flowchart-master';
  offx = 0;
  offy = 0;
  currentNodeData;
  nodeList: Node[] = [];
  cdkDragNodeList: CdkDragNode[] = [];
  motionList = MOTION;
  instance;
  enty$ = new Subject();
  code = 1;
  staticX;
  staticY;
  siderNodeX;
  siderNodeY;
  private changes: MutationObserver;
  common = {
    // 是否可作为起点
    isSource: true,
    // 是否可作为终点
    isTarget: true,
    // 连线的类型 直线、曲线
    connector: ['Bezier', { curviness: 150 }],
    // 端点类型
    endpoint: 'Dot',
    // 端点样式
    paintStyle: {
      // 填充
      fill: 'white',
      // 角度
      radius: 5,
      // 填充颜色
      fillStyle: '#D4FFD6',
      // 描边颜色
      outlineStroke: 'blue',
      // 填充宽度
      strokeWidth: 1
    },
    // hover时的点位样式
    hoverPaintStyle: {
      outlineStroke: 'lightblue'
    },
    // 连接过程中的样式
    connectorStyle: {
      radius: 5,
      // 描边颜色
      outlineStroke: '#808080',
      strokeWidth: 2
    },
    // 连接后的样式
    connectorHoverStyle: {
      strokeWidth: 2
    },
    connectorOverlays: [
      ['PlainArrow', { width: 12, length: 12, location: 1 }],
      [ 'Label', { label: '文本指示', location: 50, id: 'myLabel' } ]
    ],
    maxConnections: -1
  };
  constructor(private elementRef: ElementRef) {

  }
  ngAfterViewInit(): void {
    const that = this;
    console.log(jsPlumb);
    jsPlumb.ready(() => {
      that.enty$.pipe(
        filter(x => x != null)
      ).subscribe(res => {
        if (this.nodeList.length !== 0) {
          that.changes.disconnect();
          console.log($('#' + this.nodeList[this.nodeList.length - 1].uid));
          jsPlumb.addEndpoint($('#' + this.nodeList[this.nodeList.length - 1].uid), {
            anchors: ['Left']
          }, this.common);
          jsPlumb.addEndpoint($('#' + this.nodeList[this.nodeList.length - 1].uid), {
            anchors: ['Right']
          }, this.common);
          jsPlumb.draggable($('#' + this.nodeList[this.nodeList.length - 1].uid));
        }
      });
      jsPlumb.addEndpoint('01_node_function', {
        anchors: ['Right']
      }, this.common);
      jsPlumb.addEndpoint('02_node_function', {
        anchors: ['Left']
      }, this.common);
      jsPlumb.draggable('01_node_function');
      jsPlumb.draggable('02_node_function');
      jsPlumb.importDefaults({
        deleteEndpointsOnDetach: false
      });
    });
  }
  ngOnInit(): void {
    // window.onbeforeunload = (event) => {
    //   (event || window.event).returnValue = 'qweqqwe';
    //   // 这里写关闭时需要处理的时间，刷新也会执行这里的方法
    // };
  }
  // @HostListener('window:beforeunload')
  doSomething(event) {
    (event || window.event).returnValue = 'qweqqwe';
  }
  viewLoad($e) {
    console.log('$e', $e);
    this.enty$.next(this.code + '');
  }
  /**
   * 从左侧列表开始拖动时触发
   */
  CdkDragStarts(event: CdkDragStart, sideIndex: number) {
    // 操作区对于屏幕的实际坐标（位移坐标减去滚动后的坐标）
    this.staticX = $('#flow-panel').offset().left - $('#flow-panel').scrollLeft();
    this.staticY = $('#flow-panel').offset().top - $('#flow-panel').scrollTop();
    // 列表内的拖拽块与操作区显示的拖拽块存在margin-top的位置偏差，暨拖拽完成后，比实际位置少了一个margin-top的距离
    const num = Number.parseInt($(`#motion_${sideIndex}`).css('marginTop'));
    // 列表内当前操作块对于屏幕的坐标
    this.siderNodeX = $(`#motion_${sideIndex}`).offset().left;
    this.siderNodeY = $(`#motion_${sideIndex}`).offset().top + num;
  }
  cdkDragEnds(event: CdkDragEnd) {
    console.log('CdkDragEnd', event);
  }
  drop(event: CdkDragDrop<string[]>) {
    console.log('CdkDragDrop', event);
    const currentNode: CdkDragNode = event.item.data;
    const nodePanel: Node = {
      uid: 'node_' + this.nodeList.length,
      text: currentNode.name,
      currentX: (event.distance.x + this.siderNodeX - this.staticX) + 'px',
      currentY: (event.distance.y + this.siderNodeY - this.staticY) + 'px',
      color: currentNode.color,
      iconType: currentNode.iconType
    };
    this.nodeList.push(nodePanel);
    this.code++;
    const element = document.querySelector('#flow-panel');
    this.changes = new MutationObserver((mutations) => {
      console.log('mutation', mutations);
      if (this.nodeList.length > 0) {
        console.log('domLision', $('#' + this.nodeList[this.nodeList.length - 1].uid));
        this.enty$.next(this.code + '');
      }
    });
    this.changes.observe(element, {
      childList: true
    });
  }
}
