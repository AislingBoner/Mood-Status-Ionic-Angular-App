import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import {StatusPage} from '../../pages/status/status';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {
	myStatus: string;

  constructor(public navCtrl: NavController, private storage: Storage) {

  }

  openStatusPage(){
  this.navCtrl.push( StatusPage );
  console.log("Opening Status Page.")
  }

  ionViewWillEnter(){
  	this.storage.get("myStatus")
  	.then((data) =>{
  		this.myStatus = data;
  	})
  	.catch((err) => {
  		alert("Error Accesing Storage!");
  	});


  }

}
