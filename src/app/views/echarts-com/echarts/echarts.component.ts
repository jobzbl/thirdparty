import { Subject } from 'rxjs';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EchartsComponent implements OnInit {
  data = [Math.random() * 300];
  // 创建表格对象
  chartOption3: EChartOption = {};
  date = [];
  fingerData;
  loding = false;
  load = '123';
  loadingFlow$ = new Subject();
  sub = [];
  constructor(private ref: ChangeDetectorRef) {
    const that = this;
    this.sub.forEach(x => x.unsubscribe());
    this.sub.push(this.loadingFlow$.subscribe((res: any) => {
      that.ref.detectChanges();
      console.log(res);
      that.loding = res.loding;
      that.load = res.load;
      that.ref.detectChanges();
    })
    );
  }
  ngOnInit() {
    let base = +new Date(1968, 9, 3);
    const oneDay = 24 * 3600 * 1000;
    for (let i = 1; i < 20000; i++) {
      const now = new Date(base += oneDay);
      this.date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
      this.data.push(Math.round((Math.random() - 0.5) * 20 + this.data[i - 1]));
    }
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(i);
    }
    this.initChart3(arr);
  }
  expression() {
    this.loding = true;
  }
  onChartInit(e) {
    const arr = [];
    const ppp = this;
    for (let i = 0; i < 20; i++) {
      arr.push(i);
    }
    console.log(e);
    e.on('dataZoom', (params) => {
      // console.log(params);
      // if (params.batch[0].end === 100 && this.chartOption3.xAxis.data.length !== 20) {
      //   ppp.loadingFlow$.next({
      //     loding: true,
      //     load: '567'
      //   });
      //   setTimeout(() => {
      //     this.loadingFlow$.next({
      //       loding: false,
      //       load: '567'
      //     });
      //     this.chartOption3.xAxis.data = arr;
      //     e.setOption(this.chartOption3);
      //     console.log(this.chartOption3);
      //   }, 2000);
      // }
    });
  }

  // 初始化表格对象
  initChart3(data) {
    this.chartOption3 = {
      tooltip: {
        trigger: 'axis',
        position(pt) {
          return [pt[0], '10%'];
        }
      },
      xAxis: {
        type: 'category',
        data
      },
      yAxis: {
        type: 'value'
      },
      dataZoom: [
        {
          type: 'inside',
          start: 0,
          end: 90,
        }
      ],
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320, 1320, 1320, 1320],
        type: 'line',
        smooth: true
      }]
    };
  }

}
