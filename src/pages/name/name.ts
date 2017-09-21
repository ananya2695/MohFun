import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-name',
  templateUrl: 'name.html',
})
export class NamePage {
  addname = {
    name: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.data);
    this.addname = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NamePage');
  }

  time() {
    this.navCtrl.push('TimePage');
  }
}
