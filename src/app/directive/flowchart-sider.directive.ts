import { Directive, ViewContainerRef, AfterViewInit, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appFlowchartSider]'
})
export class FlowchartSiderDirective implements AfterViewInit {
  viewLoad = new EventEmitter<boolean>();
  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }
  ngAfterViewInit(): void {
    this.viewLoad.emit(true);
  }

}
