import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZrenderServiceService {
  data = [{
    id: 'lw',
    name: '老王',
    pointTo: [
      {
        id: 'lz',
        name: '老张',
        pointTo: '',
        parentId: 'lw',
        eventDes: '打了',
      },
      {
        id: 'll',
        name: '老李',
        pointTo: '',
        parentId: 'lw',
        eventDes: '打了',
      },
      {
        id: 'qwe',
        name: 'qwe',
        pointTo: '',
        parentId: 'lw',
        eventDes: '打了',
      },
      {
        id: 'asd',
        name: 'asd',
        pointTo: '',
        parentId: 'lw',
        eventDes: '打了',
      },
      {
        id: 'qqwe',
        name: '安全问题',
        pointTo: '',
        parentId: 'lw',
        eventDes: '打了',
      }

    ],
    parentId: ''
  },
  ];
  constructor() { }
}
