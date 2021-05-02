import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import {storePatientData} from 'src/store/patient/patient.actions';
import {PatientModel} from 'src/store/models/patient.model';
@Component({
  selector: 'app-patientinfo',
  templateUrl: './patientinfo.component.html',
  styleUrls: ['./patientinfo.component.scss']
})
export class PatientinfoComponent implements OnInit {

  patientForm:FormGroup; 
  constructor(private store: Store<{ patient: PatientModel }>) { }

  ngOnInit(): void {
    this.patientForm = new FormGroup({
      name : new FormControl(null,[this.nameValidator.bind(this)]),
      city : new FormControl(null,[this.nameValidator.bind(this)]),
      bloodgroup : new FormControl(null),
      mobile : new FormControl(null)
    });
  }

  onSubmit(){
    console.log("in onSubmit");
    console.log("this.patientForm.value ",this.patientForm.value);

    this.store.dispatch(storePatientData({ patientData : this.patientForm.value}))
  }
  nameValidator(control : FormControl){
    //console.log("in nameValidator control ",control.status,control.value)
    //console.log("in nameValidator control ",control)
    if(control.value=="dddd"){
      return { "name is not forbidden" :true}
    }
  }
}
