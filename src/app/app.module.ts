import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [    // registry component,directive or a pipe
    AppComponent
  ],
  imports: [          // preload / dependency modules/ helper or utlity modules  --Blocking Script
    BrowserModule,
    FormsModule
  ],
  providers: [],       // register and launch injectables (services)
  bootstrap: [AppComponent] // load the component
})
export class AppModule { }  // 'registry & loader' for other Angular building blocks
