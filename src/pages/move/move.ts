import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'hammerjs';

/**
 * Generated class for the MovePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-move',
  templateUrl: 'move.html',
})
export class MovePage {
  private x: number = 0;
  private y: number = 0;
  private startX: number = 0;
  private startY: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovePage');

  }
  /* 
  onPanStart(event: any) {
    this.startX = this.x;
    this.startY = this.y;
  }

  onPan(event: any) {
    var myBox = document.getElementById('box');
    this.x = this.startX + event.deltaX;
    this.y = this.startY + event.deltaY;
  } */

  allowDrop = (event) => {
    event.preventDefault();
  }
  
  handleDrop = () => {
    console.log('traget reached');


  }
}
