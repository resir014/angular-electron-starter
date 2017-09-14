import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxElectronService } from './ngx-electron';

// The CoreModule is where you can place app-level (singleton) services whose
// instance will be shared throughout the application, for example, the
// NgxElectronService below.
//
// You can also use this module to declare application-wide, single-use
// components which will *only* be imported and used in the root AppModule.
//
// See: https://angular.io/guide/styleguide#core-feature-module

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [NgxElectronService],
  exports: []
})
export class CoreModule { }
