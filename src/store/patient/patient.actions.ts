import { createAction, props } from '@ngrx/store';
import {PatientModel} from 'src/store/models/patient.model';
export const storePatientData = createAction('[Patient] storePatientData',  props<{ patientData : PatientModel }>());
export const resetPatientData = createAction('[Patient] Reset');