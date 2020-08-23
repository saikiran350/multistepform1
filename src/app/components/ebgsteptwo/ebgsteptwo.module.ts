import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EbgStepTwoComponent } from './ebgsteptwo.component';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../../shareddata/share.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [EbgStepTwoComponent],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild([{ path: '', component: EbgStepTwoComponent }]),
    ReactiveFormsModule
  ]
})
export class EbgStepTwoModule { }
