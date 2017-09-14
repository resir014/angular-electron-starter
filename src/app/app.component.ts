import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxElectronService } from './core/ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private electron: NgxElectronService, private router: Router) {
    if (this.electron.isElectron) {
      console.log('Running as an Electron app.');
    } else {
      console.log('Running as a web app.');
    }
  }
}
