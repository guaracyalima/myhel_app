import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrivingSchoolPage } from './driving-school';

@NgModule({
  declarations: [
    DrivingSchoolPage,
  ],
  imports: [
    IonicPageModule.forChild(DrivingSchoolPage),
  ],
})
export class DrivingSchoolPageModule {}
