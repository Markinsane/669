import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
 
 constructor(public router: Router, public navCtrl: NavController) {  }

  ngOnInit() {
  }
  onClick() {
     this.router.navigateByUrl('/About');
 }
}
