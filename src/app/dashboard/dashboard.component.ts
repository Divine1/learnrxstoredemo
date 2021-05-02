import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {PatientModel} from "src/store/models/patient.model"
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  count$: Observable<number>
  patientData$ : Observable<PatientModel>
  // constructor() { }
  constructor(private store: Store<{ count: number ,patient :PatientModel }>) {
    // TODO: Connect `this.count$` stream to the current store `count` state
    this.count$ = store.select('count');
    this.patientData$ = store.select("patient");
  }

  ngOnInit(): void {
  }

}
