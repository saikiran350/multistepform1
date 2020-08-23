import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from '../../shareddata/share.module';
import { EbgMainComponent } from './ebg-main.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [EbgMainComponent],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild([{ path: '', component: EbgMainComponent }]),
    ReactiveFormsModule
  ]
})
export class EbgMainModule { }
