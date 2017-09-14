import { Component, OnInit } from '@angular/core';

import { NgxElectronService } from '../core/ngx-electron';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.scss']
})
export class GettingStartedComponent implements OnInit {

  constructor(private electron: NgxElectronService) { }

  ngOnInit() {
  }

  viewAngular(): void {
    if (this.electron.isElectron) {
      this.electron.shell.openExternal('https://angular.io/docs/ts/latest/');
    }
  }

  viewElectron(): void {
    if (this.electron.isElectron) {
      this.electron.shell.openExternal('https://electron.atom.io/docs/');
    }
  }

  viewRepository(): void {
    if (this.electron.isElectron) {
      this.electron.shell.openExternal('https://github.com/resir014/angular-electron-starter');
    }
  }

}
