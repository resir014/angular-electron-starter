import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { routes } from './getting-started.routing';
import { SharedModule } from '../shared';
import { GettingStartedComponent } from './getting-started.component';

// This is a feature module. It helps organise componets, modules, directives,
// etc. within the same feature context into one module and folder.
//
// A feature module can also be routed lazily, therefore reducing the initial
// app load time. See the root routing file to see how feature modules can be
// lazy-loaded.
//
// See: https://angular.io/guide/styleguide#feature-modules

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GettingStartedComponent]
})
export class GettingStartedModule { }
