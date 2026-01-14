import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ShellRoutingModule } from './shell-routing.module';
import { ShellComponent } from './shell.component';
import { HomeComponent } from './components/home/home.component';
import { GlobalErrorComponent } from './components/global-error/global-error.component';

@NgModule({
  declarations: [ShellComponent, HomeComponent, GlobalErrorComponent],
  imports: [BrowserModule, ShellRoutingModule],
  providers: [],
  bootstrap: [ShellComponent],
})
export class ShellModule {}
