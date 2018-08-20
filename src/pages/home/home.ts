import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerceptronPage } from '../perceptron/perceptron';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
Perceptron(){
 this.navCtrl.push(PerceptronPage);
}
}