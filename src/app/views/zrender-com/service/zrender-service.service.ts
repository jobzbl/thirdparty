import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZrenderServiceService {
  data = [{
    id: 'lw',
    name: '老王',
    eventDes: '打了',
    pointTo: 'lz',
  },
  {
    id: 'lz',
    name: '老张',
    eventDes: '',
    pointTo: '',
  }
  ];
  constructor() { }
}
