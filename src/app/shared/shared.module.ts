import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';

// In the SharedModule you can place UI-level components ('dumb' components),
// directives, and pipes which will be re-used in a lot of feature modules.
//
// See: https://angular.io/guide/styleguide#shared-feature-module

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CardComponent],
  exports: [CardComponent]
})
export class SharedModule { }
