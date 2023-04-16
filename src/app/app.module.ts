import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabellaEmployeeComponent } from './tabella-employee/tabella-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { DataRestClientService } from './data-rest-client.service';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { EmployeeFormComponent } from './employee-form/employee-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TabellaEmployeeComponent,
    EmployeeFormComponent
  ],
  imports: [
    HttpClientModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule
  ],
  providers: [DataRestClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
