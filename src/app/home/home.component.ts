import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxElectronService } from '../core/ngx-electron';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public readonly title = `App works!`;
  public runmode: string;

  constructor(private electron: NgxElectronService, private router: Router) {
    if (this.electron.isElectron) {
      const os = this.electron.remote.require('os');
      this.runmode = `Running as an Electron app on ${os.platform()}.`;
    } else {
      this.runmode = 'Running as a web app.';
    }
  }

  gettingStarted(): void {
    if (this.electron.isElectron) {
      this.electron.send('app:generic:ping');
      this.electron.listener$.subscribe(message => {
        if (message === 'pong') {
          this.electron.shell.beep();
        }
      });
    }
    this.router.navigate(['/getting-started']);
  }

  ngOnInit() {
  }

}
