import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	shouldAnimate: boolean = true;

	constructor(public navCtrl: NavController) {

	}

}
