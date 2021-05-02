import { createReducer, on } from '@ngrx/store';
import { storePatientData,resetPatientData } from './patient.actions';
 
import {PatientModel} from './../models/patient.model';

export const initial_state_patient : PatientModel = {
    name : "",
    city : "",
    bloodgroup : "",
    mobile : ""
};
 
const _patientReducer = createReducer(
    initial_state_patient,
  on(storePatientData, (state,{patientData}) => {
        console.log("storePatientData patientData ",patientData);
        console.log("state ",state);
        return patientData;
    }),
  on(resetPatientData, (state) => initial_state_patient),
);
 
export function patientReducer(state, action) {
  return _patientReducer(state, action);
}