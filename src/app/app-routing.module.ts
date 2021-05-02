import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { PatientinfoComponent } from './patientinfo/patientinfo.component';

const routes: Routes = [
  {
    path : "",
    component : MyCounterComponent
  },
  {
    path : "patient",
    component : PatientinfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
