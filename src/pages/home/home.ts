import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovePage } from '../move/move';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  onMove(){
    this.navCtrl.push(MovePage)
  }
}
