import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { NavController} from '@ionic/angular';
import { Storage } from '@ionic/storage';;

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {
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
      this.myDate = data["myDate"];
      this.frostings = data["frostings"];
      this.types = data["types"];
      

    });
  	// this.name = navParams.get('firstName');


  }



  ngOnInit() {
  }


 Previous() {
    this.navCtrl.navigateForward('/Cake');

  }

 Next() {
    this.navCtrl.navigateForward('/home');

  }

}
