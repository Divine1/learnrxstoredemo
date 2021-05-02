import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './../store/counter/counter.reducer';
import {patientReducer} from './../store/patient/patient.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientinfoComponent } from './patientinfo/patientinfo.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    DashboardComponent,
    PatientinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //StoreModule.forRoot({}, {})
    StoreModule.forRoot({
      count : counterReducer,
      patient : patientReducer
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
