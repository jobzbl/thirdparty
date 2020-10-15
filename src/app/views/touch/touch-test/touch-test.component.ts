import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-touch-test',
  templateUrl: './touch-test.component.html',
  styleUrls: ['./touch-test.component.scss']
})
export class TouchTestComponent implements OnInit {
  clientX1;
  clientY1;
  clientX2;
  clientY2;

  touchSX1;
  touchSY1;
  touchSX2;
  touchSY2;
  initialBevel;
  bevel;
  constructor() { }
  ngOnInit() {
    this.calculate({
      cx: 10,
      cy: 5,
      tx: 0,
      ty: 0,
    });
  }
  touchstart(event) {
    console.log(event.path[0]);
    const element = event.path[0];

    const jieguo = 5;
    // element.style.transform = `scale(1.${jieguo})`;

    // tslint:disable-next-line:triple-equals
    if (event.touches.length == 2) {
      const element = event.path[0];
      // element.style.transform = 'scale(1.5)';
      const clientX1 = event.touches[0].clientX;
      this.clientX1 = clientX1;
      const clientY1 = event.touches[0].clientY;
      this.clientY1 = clientY1;
      const clientX2 = event.touches[1].clientX;
      this.clientX2 = clientX2;
      const clientY2 = event.touches[1].clientY;
      this.clientY2 = clientY2;
      if (!this.touchSX2) { // 初始值
        this.touchSX1 = clientX1;
        this.touchSY1 = clientY1;
        this.touchSX2 = clientX2;
        this.touchSY2 = clientY2;
        this.initialBevel = this.calculate({
          cx: this.touchSX1,
          cy: this.touchSY1,
          tx: this.touchSX2,
          ty: this.touchSY2,
        });
        console.log(this.initialBevel);
      }
      this.bevel = this.calculate({
        cx: this.clientX1,
        cy: this.clientY1,
        tx: this.clientX2,
        ty: this.clientY2,
      });
      if (this.initialBevel > this.bevel) {
        let jieguo = Math.ceil(this.initialBevel - this.bevel);
        const jieguo2 = parseFloat('0.' + jieguo);
        jieguo = 1 - jieguo2;
        // jieguo = '1.' + jieguo;
        // parseInt
        element.style.transform = `scale(${jieguo})`;
      } else {
        const jieguo = Math.ceil(this.bevel - this.initialBevel);
        // jieguo = '1.' + jieguo;
        // parseInt
        element.style.transform = `scale(1.${jieguo})`;
      }

    }

  }
  touchend(event) {
    this.touchSX1 = null;
    this.touchSY1 = null;
    this.touchSX2 = null;
    this.touchSY2 = null;
  }

  calculate(data) {
    const {cx, cy, tx, ty} = data;
    const a = Math.abs(cx - tx);
    const b = Math.abs(cy - ty);
    console.log(a);
    console.log(b);
    const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    console.log(c);
    return c;
  }
}
