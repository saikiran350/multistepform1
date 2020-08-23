import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'ebgmain',
    loadChildren: () =>
      import('./components/ebg-main/ebg-main.module').then(m => m.EbgMainModule)
  },
  {
    path: 'ebgsteptwo',
    loadChildren: () =>
      import('./components/ebgsteptwo/ebgsteptwo.module').then(m => m.EbgStepTwoModule)
  },
  // {
  //   path: 'ebgstepthree',
  //   loadChildren: () =>
  //     import('./components/ebgstepthree/ebgstepthree.module').then(m => m.EbgStepThreeModule)
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
