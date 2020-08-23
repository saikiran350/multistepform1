import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EbgheaderComponent } from './ebgheader/ebgheader.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [EbgheaderComponent],
  imports: [
    CommonModule, RouterModule.forChild([])
  ],
  exports: [EbgheaderComponent]
})
export class CoreModule { }
