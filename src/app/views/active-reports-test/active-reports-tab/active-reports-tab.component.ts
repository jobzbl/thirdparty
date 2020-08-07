import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ViewerComponent } from '@grapecity/activereports-angular';
import { HtmlExportService, PdfExportService, XlsxExportService, AR_EXPORTS } from '@grapecity/activereports-angular';
@Component({
  selector: 'app-active-reports-tab',
  templateUrl: './active-reports-tab.component.html',
  styleUrls: ['./active-reports-tab.component.css'],
  providers: [
    {
      provide: AR_EXPORTS,
      useClass: PdfExportService,
      multi: true
    },
    {
      provide: AR_EXPORTS,
      useClass: HtmlExportService,
      multi: true
    },
      {
      provide: AR_EXPORTS,
      useClass: XlsxExportService,
      multi: true
    }
  ]
})
export class ActiveReportsTabComponent implements AfterViewInit  {
  @ViewChild('reportviewer', { static: false }) reportviewer: ViewerComponent;

  title = 'ActiveReports Angular App';
  height = '600px';
  availableExports = ['pdf', 'xlsx'];
  language = 'ja';
  onDocumentLoaded = function(a: any) {
    console.log('document loaded', a);
  };
  constructor() { }
  ngAfterViewInit() {
    this.reportviewer.init.subscribe(() => {
      // tslint:disable-next-line:max-line-length
      const htmlBtnIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24"><path class="gc-icon-color--text" d="M19 26v2c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h10v6c0 1.1.9 2 2 2h5v2H6c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h13zM13 3v6c0 .6.5 1 1 1h5l-6-7zM6 14c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h23c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2H6zm23 8v1h-5v-7h1v6h4zm-15-5v6h1v-6h2v-1h-5v1h2zm-4 2v-3h1v7h-1v-3H7v3H6v-7h1v3h3zm10.5 0L19 16h-1v7h1v-5l1 2h1l1-2v5h1v-7h-1l-1.5 3z" fill-rule="evenodd" clip-rule="evenodd" /></svg>';
      this.reportviewer.toolbar.addItem({
        key: '$html-export-btn',
        icon: {type: 'svg', content: htmlBtnIcon },
        title: 'HTML Export',
        enabled: true,
        action: () => { this.reportviewer.export('html', []).then(result => result.download('Exported_HTML')); }
      });
      this.reportviewer.open('assets/InvoiceList.rdlx-json');
    });
  }

}
