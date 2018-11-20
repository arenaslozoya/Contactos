import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
nombre;
imagen;
correo;
tel;
fb;
ig;
twitter;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.get('imagen'));
    this.imagen= this.navParams.get('imagen');
    this.nombre= this.navParams.get('nombre');
    this.correo= this.navParams.get('correo');
    this.tel= this.navParams.get('tel');
    this.fb= this.navParams.get('fb');
    this.ig= this.navParams.get('ig');
    this.twitter= this.navParams.get('twitter');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

}
