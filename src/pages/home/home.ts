import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ContactoPage } from '../contacto/contacto';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
cont= ContactoPage;
info= InfoPage;

  contactos = [
    {nombre: " Alexandra Arenas ", tel: " +52 1 (33) 1835 6599",correo: " aalarenas1800@gmail.com", fb: " Alexa Arenas", twitter: " aalexa arenas", ig: " aal_18", imagen: "../assets/doctor.png"},
    {nombre: " Leonardo Briseño", tel: " +52 1 (33) 1362 0576",correo: " leo_hardy2000@hotmail.com", fb: " Leo Briseño", twitter: " leobriseno", ig: " leonardobriseno", imagen: "../assets/boss.png"},
    {nombre: " Fernanda Villa ", tel: " +52 1 (33) 1699 8605",correo: " fervillatamez@gmail.com", fb: " Fer Villa", twitter: " fer_villa", ig: " villa_villa", imagen: "../assets/fer.png"},

  ];
  constructor(public navCtrl: NavController) {

  }
clickAgregar()
{
  this.navCtrl.push(this.cont,{contactos:this.contactos});
}
clickInfo(c)
{
  this.navCtrl.push(this.info, c);
}

}
