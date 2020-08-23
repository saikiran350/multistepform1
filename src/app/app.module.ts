import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ShareModule } from './shareddata/share.module';
import { reducers, metaReducers } from './core/state';

import { EbgsidebarComponent } from '../app/components/ebgsidebar/ebgsidebar.component';
import { EbgfooterComponent } from '../app/components/ebgfooter/ebgfooter.component';

@NgModule({
  declarations: [
    AppComponent,
    EbgsidebarComponent,
    EbgfooterComponent

  ],
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
