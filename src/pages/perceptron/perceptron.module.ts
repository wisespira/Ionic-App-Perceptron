import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerceptronPage } from './perceptron';

@NgModule({
  declarations: [
    PerceptronPage,
  ],
  imports: [
    IonicPageModule.forChild(PerceptronPage),
  ],
})
export class PerceptronPageModule {}
