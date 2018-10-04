import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 
 constructor(public router: Router, public navCtrl: NavController) {  }

  ngOnInit() {
  }
  onClick() {
     this.router.navigateByUrl('/About');
 }
}
