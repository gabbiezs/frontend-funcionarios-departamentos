import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { SidebarModule } from 'primeng/sidebar';


import { AppComponent } from './app.component';
import { DepartamentosPesquisaComponent } from './departamentos-pesquisa/departamentos-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartamentosPesquisaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    TooltipModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
