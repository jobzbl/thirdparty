import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgGridService {
  changePointDataSort$ = new Subject<string>(); // 点位表排序变动
  data = [
    {
      id: 3788161299465216,
      aimPoint: 'jzwjjgjcd',
      remark: '居住及文教机关监测点',
      pointName: '居住及文教机关监测点',
      alarmTime: null,
      dataLinkStatus: '0',
      alarmStatus: '',
      alarmLevel: '',
      currentValue: '58',
      latestTime: '2020-07-07T17:57:00+08:00',
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3787140863771648,
      aimPoint: 'lyqzsjcd',
      remark: '',
      pointName: '疗养区噪声监测点',
      alarmTime: null,
      dataLinkStatus: '0',
      alarmStatus: '',
      alarmLevel: '',
      currentValue: '50',
      latestTime: '2020-07-07T17:57:00+08:00',
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3785607113016320,
      aimPoint: 'dev5.FengFa_H',
      remark: '',
      pointName: '风阀-高',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: '',
      alarmLevel: '3',
      currentValue: '1',
      latestTime: '2020-06-22T20:59:14+08:00',
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3785607113081856,
      aimPoint: 'dev5.FengFa_M',
      remark: '',
      pointName: '风阀-中',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: '',
      alarmLevel: '3',
      currentValue: '0',
      latestTime: '2020-06-22T20:59:54+08:00',
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3785607113147392,
      aimPoint: 'dev5.FengFa_L',
      remark: '',
      pointName: '风阀-低',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: '',
      alarmLevel: '3',
      currentValue: '0',
      latestTime: '2020-06-22T20:59:44+08:00',
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3785607113212928,
      aimPoint: 'dev5.ZhuangTai',
      remark: '',
      pointName: '运行状态',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: '',
      alarmLevel: '3',
      currentValue: '1',
      latestTime: '2020-06-22T20:59:34+08:00',
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3785607112836096,
      aimPoint: 'dev5.WenDu_S_4',
      remark: '',
      pointName: '设定温度',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: '',
      alarmLevel: '3',
      currentValue: '20',
      latestTime: '2020-06-22T20:59:54+08:00',
      pointValueType: '0',
      readWriteType: 2,
      enumId: null
    },
    {
      id: 3785607112901632,
      aimPoint: 'dev5.WenDu_R_9',
      remark: '',
      pointName: '室温',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: '',
      alarmLevel: '3',
      currentValue: '28',
      latestTime: '2020-06-22T20:59:44+08:00',
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3785607112967168,
      aimPoint: 'dev5.MoShi',
      remark: '',
      pointName: '运行模式',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: '',
      alarmLevel: '3',
      currentValue: '1',
      latestTime: '2020-06-22T20:59:24+08:00',
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3785607112770560,
      aimPoint: 'dev5.ShuiFa',
      remark: '',
      pointName: '水阀开关',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: '',
      alarmLevel: '3',
      currentValue: '1',
      latestTime: '2020-06-22T20:52:24+08:00',
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3780092911027200,
      aimPoint: 'B2_C1_jianpan',
      remark: '键盘锁定',
      pointName: '键盘锁定',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: '',
      alarmLevel: '3',
      currentValue: '0',
      latestTime: '2020-07-02T14:17:41+08:00',
      pointValueType: '2',
      readWriteType: 2,
      enumId: 3740546387493888
    },
    {
      id: 3780092910846976,
      aimPoint: 'B2_C1_shinei',
      remark: '室内温度',
      pointName: '室内温度',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: '',
      alarmLevel: '3',
      currentValue: '27.00',
      latestTime: '2020-07-02T14:17:41+08:00',
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3780092910928896,
      aimPoint: 'B2_C1_fangdong',
      remark: '防冻功能',
      pointName: '防冻功能',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: '',
      alarmLevel: '3',
      currentValue: '0',
      latestTime: '2020-07-02T14:17:41+08:00',
      pointValueType: '2',
      readWriteType: 2,
      enumId: 3740546387493888
    },
    {
      id: 3780092910748672,
      aimPoint: 'B2_C1_fengji',
      remark: '风机模式',
      pointName: '风机模式',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: '',
      alarmLevel: '3',
      currentValue: '0',
      latestTime: '2020-07-02T14:17:41+08:00',
      pointValueType: '2',
      readWriteType: 2,
      enumId: 3749987744629760
    },
    {
      id: 3780092910650368,
      aimPoint: 'B2_C1_wendu',
      remark: '设置温度',
      pointName: '设置温度',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: '',
      alarmLevel: '3',
      currentValue: '14.00',
      latestTime: '2020-07-02T14:17:41+08:00',
      pointValueType: '0',
      readWriteType: 2,
      enumId: null
    },
    {
      id: 3780092910535680,
      aimPoint: 'B2_C1_moshi',
      remark: '模式',
      pointName: '模式',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: '',
      alarmLevel: '3',
      currentValue: '1',
      latestTime: '2020-07-02T14:17:41+08:00',
      pointValueType: '2',
      readWriteType: 2,
      enumId: 3740552709653504
    },
    {
      id: 3780092910404608,
      aimPoint: 'B2_C1_zhuagntai',
      remark: '温控器状态',
      pointName: '状态',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: '',
      alarmLevel: '3',
      currentValue: '1',
      latestTime: '2020-07-02T14:17:41+08:00',
      pointValueType: '2',
      readWriteType: 2,
      enumId: 3740546387493888
    },
    {
      id: 3779670633939968,
      aimPoint: 'dev4.EW1',
      remark: '',
      pointName: '触屏位1',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: '',
      alarmLevel: '3',
      currentValue: '450',
      latestTime: '2020-06-22T13:52:07+08:00',
      pointValueType: '0',
      readWriteType: 2,
      enumId: null
    },
    {
      id: 3779670633776128,
      aimPoint: 'dev1.ShiDu',
      remark: '',
      pointName: '湿度1',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: '',
      alarmLevel: '3',
      currentValue: '63.9',
      latestTime: '2020-07-06T16:12:08+08:00',
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3779670633579520,
      aimPoint: 'dev1.WenDu',
      remark: '',
      pointName: '温度1',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: '',
      alarmLevel: '3',
      currentValue: '25.8',
      latestTime: '2020-07-06T16:12:08+08:00',
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3759954218304512,
      aimPoint: 'a11498',
      remark: 'a11498',
      pointName: 'a114981111111',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: null,
      alarmLevel: null,
      currentValue: null,
      latestTime: null,
      pointValueType: '2',
      readWriteType: 2,
      enumId: 3740552709653504
    },
    {
      id: 3759954218419200,
      aimPoint: 'a11499',
      remark: 'a11499',
      pointName: 'a11499',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: '',
      alarmLevel: '3',
      currentValue: '1',
      latestTime: '2020-06-18T09:05:23+08:00',
      pointValueType: '0',
      readWriteType: 2,
      enumId: null
    },
    {
      id: 3758517446050816,
      aimPoint: 'a5098',
      remark: 'a5098',
      pointName: 'a5098',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: '',
      alarmLevel: '3',
      currentValue: '321.50',
      latestTime: '2020-06-18T09:05:53+08:00',
      pointValueType: '0',
      readWriteType: 2,
      enumId: null
    },
    {
      id: 3758517446165504,
      aimPoint: 'a5099',
      remark: 'a5099',
      pointName: 'a5099',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: '',
      alarmLevel: '3',
      currentValue: '600',
      latestTime: '2020-06-05T13:42:08+08:00',
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3758517446296576,
      aimPoint: 'a5100',
      remark: 'a5100',
      pointName: 'a5100',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: '',
      alarmLevel: '3',
      currentValue: '318',
      latestTime: '2020-06-05T11:58:29+08:00',
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3758517445477376,
      aimPoint: 'a5093',
      remark: 'a5093',
      pointName: 'a5093',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: '',
      alarmLevel: '3',
      currentValue: '-484',
      latestTime: '2020-06-05T13:40:22+08:00',
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3758517445608448,
      aimPoint: 'a5094',
      remark: 'a5094',
      pointName: 'a5094',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: '',
      alarmLevel: '3',
      currentValue: '-519',
      latestTime: '2020-06-05T14:31:50+08:00',
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3758517445739520,
      aimPoint: 'a5095',
      remark: 'a5095',
      pointName: 'a5095',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: null,
      alarmLevel: null,
      currentValue: null,
      latestTime: null,
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3758517445837824,
      aimPoint: 'a5096',
      remark: 'a5096',
      pointName: 'a5096',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: null,
      alarmLevel: null,
      currentValue: null,
      latestTime: null,
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3758517445936128,
      aimPoint: 'a5097',
      remark: 'a5097',
      pointName: 'a5097',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: null,
      alarmLevel: null,
      currentValue: null,
      latestTime: null,
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3758517445100544,
      aimPoint: 'a5089',
      remark: 'a5089',
      pointName: 'a5089',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: null,
      alarmLevel: null,
      currentValue: null,
      latestTime: null,
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3758517445166080,
      aimPoint: 'a5090',
      remark: 'a5090',
      pointName: 'a5090',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: null,
      alarmLevel: null,
      currentValue: null,
      latestTime: null,
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3758517445231616,
      aimPoint: 'a5091',
      remark: 'a5091',
      pointName: 'a5091',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: null,
      alarmLevel: null,
      currentValue: null,
      latestTime: null,
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3758517445346304,
      aimPoint: 'a5092',
      remark: 'a5092',
      pointName: 'a5092',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: null,
      alarmLevel: null,
      currentValue: null,
      latestTime: null,
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3758517444756480,
      aimPoint: 'a5084',
      remark: 'a5084',
      pointName: 'a5084',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: null,
      alarmLevel: null,
      currentValue: null,
      latestTime: null,
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3758517444838400,
      aimPoint: 'a5085',
      remark: 'a5085',
      pointName: 'a5085',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: null,
      alarmLevel: null,
      currentValue: null,
      latestTime: null,
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3758517444920320,
      aimPoint: 'a5086',
      remark: 'a5086',
      pointName: 'a5086',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: null,
      alarmLevel: null,
      currentValue: null,
      latestTime: null,
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3758517444985856,
      aimPoint: 'a5087',
      remark: 'a5087',
      pointName: 'a5087',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: null,
      alarmLevel: null,
      currentValue: null,
      latestTime: null,
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3758517445035008,
      aimPoint: 'a5088',
      remark: 'a5088',
      pointName: 'a5088',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: null,
      alarmLevel: null,
      currentValue: null,
      latestTime: null,
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3758517444412416,
      aimPoint: 'a5080',
      remark: 'a5080',
      pointName: 'a5080',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: null,
      alarmLevel: null,
      currentValue: null,
      latestTime: null,
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3758517444510720,
      aimPoint: 'a5081',
      remark: 'a5081',
      pointName: 'a5081',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: null,
      alarmLevel: null,
      currentValue: null,
      latestTime: null,
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3758517444609024,
      aimPoint: 'a5082',
      remark: 'a5082',
      pointName: 'a5082',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: null,
      alarmLevel: null,
      currentValue: null,
      latestTime: null,
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3758517444690944,
      aimPoint: 'a5083',
      remark: 'a5083',
      pointName: 'a5083',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: null,
      alarmLevel: null,
      currentValue: null,
      latestTime: null,
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3758517443904512,
      aimPoint: 'a5075',
      remark: 'a5075',
      pointName: 'a5075',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: null,
      alarmLevel: null,
      currentValue: null,
      latestTime: null,
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3758517444019200,
      aimPoint: 'a5076',
      remark: 'a5076',
      pointName: 'a5076',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: null,
      alarmLevel: null,
      currentValue: null,
      latestTime: null,
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3758517444133888,
      aimPoint: 'a5077',
      remark: 'a5077',
      pointName: 'a5077',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: null,
      alarmLevel: null,
      currentValue: null,
      latestTime: null,
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
    {
      id: 3758517444232192,
      aimPoint: 'a5078',
      remark: 'a5078',
      pointName: 'a5078',
      alarmTime: null,
      dataLinkStatus: '1',
      alarmStatus: null,
      alarmLevel: null,
      currentValue: null,
      latestTime: null,
      pointValueType: '0',
      readWriteType: 1,
      enumId: null
    },
  ];
  checkOptionsOne = [
    { label: '点位号', value: 'aimPoint' , checked: true, pinned: 'left', disabled: true,
      cellRenderer: 'jumpDetailsText',
      cellRendererParams: {
        label: 'aimPoint'
      }
    },
    { label: '点位名称', value: 'pointName' , checked: true,
      cellRenderer: 'jumpDetailsText',
      cellRendererParams: {
        label: 'pointName'
      }
    },
    { label: '最新值', value: 'currentValue' , checked: true,
      cellRenderer: 'jumpDetailsText',
      cellRendererParams: {
        label: 'currentValue'
      }
    },
    { label: '连接状态', value: 'dataLinkStatus' , checked: true,
      cellRenderer: 'jumpDetailsText',
      cellRendererParams: {
        label: 'dataLinkStatus'
      }
    },
    { label: '报警状态', value: 'alarmStatus' , checked: true,
      cellRenderer: 'jumpDetailsText',
      cellRendererParams: {
        label: 'alarmStatus'
      }
    },
    { label: '报警级别', value: 'alarmLevel' , checked: true,
      cellRenderer: 'jumpDetailsText',
      cellRendererParams: {
        label: 'alarmLevel'
      }
    },
    { label: '报警时间', value: 'alarmTime' , checked: true,
      cellRenderer: 'jumpDetailsText',
      minWidth: 150,
      cellRendererParams: {
        label: 'alarmTime'
      }
    },
    { label: '点位描述', value: 'remark' , checked: true,
      cellRenderer: 'jumpDetailsText',
      cellRendererParams: {
        label: 'remark'
      }
    },
    { label: '最后更新时间', value: 'latestTime' , checked: true,
      cellRenderer: 'jumpDetailsText',
      minWidth: 150,
      cellRendererParams: {
        label: 'latestTime'
      }
    },
    { label: '操作', value: 'operation', checked: true, disabled: true,
      cellRenderer: 'jumpDetailsText',
      headerComponentParams: {
        enableSorting: false,
      },
      pinned: 'right',
      cellRendererParams: {
        onClick: this.jumpDetails.bind(this),
        label: 'operation'
      }
    },
  ];

  columnDefs = [
    { headerName: '点位号', pinned: 'left', field: 'aimPoint',
      cellRenderer: 'jumpDetailsText',
      cellRendererParams: {
        label: 'aimPoint'
      }
    },
    { headerName: '点位名称', field: 'pointName',
      cellRenderer: 'jumpDetailsText',
      cellRendererParams: {
        label: 'pointName'
      }
    },
    { headerName: '最新值', field: 'currentValue',
      cellRenderer: 'jumpDetailsText',
      cellRendererParams: {
        label: 'currentValue'
      }
    },
    { headerName: '连接状态', field: 'dataLinkStatus',
      cellRenderer: 'jumpDetailsText',
      cellRendererParams: {
        label: 'dataLinkStatus'
      }
    },
    { headerName: '报警状态', field: 'alarmStatus',
      cellRenderer: 'jumpDetailsText',
      cellRendererParams: {
        label: 'alarmStatus'
      }
    },
    { headerName: '报警级别', field: 'alarmLevel',
      cellRenderer: 'jumpDetailsText',
      cellRendererParams: {
        label: 'alarmLevel'
      }
    },
    { headerName: '报警时间', field: 'alarmTime',
      cellRenderer: 'jumpDetailsText',
      minWidth: 150,
      cellRendererParams: {
        label: 'alarmTime'
      }
    },
    { headerName: '点位描述', field: 'remark',
      cellRenderer: 'jumpDetailsText',
      cellRendererParams: {
        label: 'remark'
      }
    },
    { headerName: '最后更新时间', field: 'latestTime',
      cellRenderer: 'jumpDetailsText',
      minWidth: 150,
      cellRendererParams: {
        label: 'latestTime'
      }
    },
    { headerName: '操作', field: 'operation',
      cellRenderer: 'jumpDetailsText',
      pinned: 'right',
      headerComponentParams: {
        enableSorting: false,
      },
      cellRendererParams: {
        onClick: this.jumpDetails.bind(this),
        label: 'operation'
      }
    },
  ];
  constructor(
    private router: Router,
  ) { }

  jumpDetails(item) {
    this.router.navigateByUrl(`worksheet-dashboard/pointdata-details/${item.id}`);
  }
}
