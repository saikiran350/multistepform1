import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedheaderComponent } from './sharedheader/sharedheader.component';

@NgModule({
  declarations: [
    SharedheaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SharedheaderComponent]
})
export class ShareModule { }
