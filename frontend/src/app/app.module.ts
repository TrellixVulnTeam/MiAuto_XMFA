import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { EmployeesComponent } from './employee/employees/employees.component';
import { CreateEmployeeDialogComponent } from './employee/create-employee-dialog/create-employee-dialog.component';
import { ClientsComponent } from './client/clients/clients.component';
import { CreateClientDialogComponent } from './client/create-client-dialog/create-client-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeesComponent,
    CreateEmployeeDialogComponent,
    ClientsComponent,
    CreateClientDialogComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
