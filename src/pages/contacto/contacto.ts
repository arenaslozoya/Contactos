import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {
  contactos =[];
  nombre= '';
  tel='';
  email='';
  fb= '';
  ig='';
  tw='';
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController) {
        this.contactos= this.navParams.get('contactos');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');
  }
  clickContactoNuevo(c)
  {
    if(this.nombre.length > 0 && this.tel.length > 0) 
    {
      this.contactos.push(
        {nombre: this.nombre, 
        tel: this.tel,
        correo: this.email, 
        fb: this.fb, 
        twitter: this.tw, 
        ig: this.ig, 
        imagen: " ../assets/Avatar (1).png"
      }
      );
      this.navCtrl.pop();
    }
    else{
      console.log("El contacto debe tener nombre y teléfono");
  
      const alert = this.alertCtrl.create({
        title: "Oops!",
        subTitle: "El contacto debe tener nombre y teléfono",
        buttons: ['OK']
      });
      alert.present();
    }
  }
}
