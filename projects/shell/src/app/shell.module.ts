import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ShellRoutingModule } from './shell-routing.module';
import { ShellComponent } from './shell.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';

@NgModule({
  declarations: [
    ShellComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    ShellRoutingModule
  ],
  providers: [],
  bootstrap: [ShellComponent]
})
export class ShellModule { }
