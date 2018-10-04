import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { NavController} from '@ionic/angular';
import { ConfirmPage } from '../confirm/confirm.page';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {


  firstName: string = "";
  myDate: string = "";
 
  constructor(public router: Router, public navCtrl: NavController, public storage: Storage ) {

  	// this.firstName = localStorage.getItem('firstName');
  	// this.myDate = localStorage.getItem('myDate');
  }

  ngOnInit() {
  }


 Previous() {
    this.router.navigateByUrl('/Welcome');

  }

 Next() {
 	let data = {
 	"firstName": this.firstName,
 	"myDatemonth": this.myDate["month"]["text"],
 	"myDateday": this.myDate["day"]["text"]
     };
    
    this.storage.set("data", data);
    this.router.navigateByUrl('/Cake');

  }


//   saveData() {
    
// let data = { "firstName": this.firstName,
//             };
//     this.storage.set("data", data);
   
//   }

// goToConfirmPage(name) {
// 	name=this.firstName
   
//      this.navCtrl.push(ConfirmPage, 
//       {firstName: name}
//     );

}
