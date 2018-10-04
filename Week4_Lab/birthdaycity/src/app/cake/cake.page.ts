import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { NavController} from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.page.html',
  styleUrls: ['./cake.page.scss'],
})
export class CakePage implements OnInit {

 types: string = "";
 frostings: string = "";
 glutenFree: boolean;

 firstName: string = "";
 myDate: string = "";

 constructor(public router: Router, public navCtrl: NavController,  public storage: Storage) { 
      this.glutenFree = false;
  // this.types = localStorage.getItem('types');
  // this.frostings = localStorage.getItem('frostings');
  
      this.storage.get("data").then((data) => {
      this.firstName = data["firstName"];
      this.myDate = data["myDatemonth"]+"/"+data["myDateday"];
    });

  }

	 ngOnInit() {
	  }


	 Previous() {
	    this.navCtrl.navigateForward('/About');

	  }

	 Next() {
	 	 let data = { 
	 	 "firstName": this.firstName,
	 	 "myDate": this.myDate,
	 	 "types": this.types,
	     "frostings": this.frostings,
	     "glutenFree": this.glutenFree};

	     this.storage.set("data", data);

	     this.navCtrl.navigateForward('/Confirm');

	  }


}
