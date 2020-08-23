import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EbgStepThreeComponent } from './ebgstepthree.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [EbgStepThreeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: EbgStepThreeComponent }]),
    ReactiveFormsModule
  ]
})
export class EbgStepThreeModule { }
