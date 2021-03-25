import { Component, OnInit } from '@angular/core';
// import { Topology, Options, registerNode } from '@topology/core';
import { register as registerFlow } from '@topology/flow-diagram';
import { register as registerActivity } from '@topology/activity-diagram';
import { register as registerClass } from '@topology/class-diagram';
import { register as registerSequence } from '@topology/sequence-diagram';
import { register as registerChart } from '@topology/chart-diagram';
import { Topology } from '@topology/core';
@Component({
  selector: 'app-topology',
  templateUrl: './topology.component.html',
  styleUrls: ['./topology.component.scss']
})
export class TopologyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.canvasRegister();
  }
  // canvasRegister() {
  //   registerFlow();
  //   registerActivity();
  //   registerClass();
  //   registerSequence();
  //   registerChart();
  //   // ... 其他图形库
  // }
}
