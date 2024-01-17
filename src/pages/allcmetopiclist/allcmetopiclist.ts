import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AllcmetopiclistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-allcmetopiclist',
  templateUrl: 'allcmetopiclist.html',
})
export class AllcmetopiclistPage {
	data: any = {};
	groceries: any;	
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.data =[
			{
				"id":1,
				"title":"Optimizing Survival from Distributive Shock",
				"description":"To provide information about the early identification of sepsis and the appropriate interventions to help patients survive sepsis.",
				"total_Chapter":"4",
				"total_duration":"14 mins",
				"Authors":"Adrijana K. Anderson",
				"Categories":"Evidence Based Practice , Practice Guidelines"
			},
			{
				"id":2,
				"title":"Fever and Infection in the Long-term Care Resident",
				"description":"This learning activity will engage nurse practitioners and other health professionals in a clinically-focused case study to develop skills in identification and management of distributive shock in a resident of a long-term care facility.",
				"total_Chapter":"13",
				"total_duration":"54 mins",
				"Authors":"Adrijana K. Anderson",
				"Categories":"Evidence Based Practice , Infection , Practice Guidelines"
			},
			{
				"id":3,
				"title":"Optimizing Survival from Distributive Shock Optimizing Survival from Distributive Shock",
				"description":"To provide information about the early identification of sepsis and the appropriate interventions to help patients survive sepsis.",
				"total_Chapter":"8",
				"total_duration":"124 mins",
				"Authors":"Adrijana K. Anderson",
				"Categories":"Evidence Based Practice"
			},
			{
				"id":4,
				"title":"Fever and Infection in the Long-term Care Resident",
				"description":"This learning activity will engage nurse practitioners and other health professionals in a clinically-focused case study to develop skills in identification and management of distributive shock in a resident of a long-term care facility.",
				"total_Chapter":"9",
				"total_duration":"140 mins",
				"Authors":"Adrijana K. Anderson",
				"Categories":"Evidence Based Practice , Infection , Practice Guidelines"
			},
			{
				"id":5,
				"title":"Optimizing Survival from Distributive Shock Optimizing Survival from Distributive Shock",
				"description":"To provide information about the early identification of sepsis and the appropriate interventions to help patients survive sepsis.",
				"total_Chapter":"4",
				"total_duration":"14 mins",
				"Authors":"Adrijana K. Anderson",
				"Categories":"Evidence Based Practice , Practice Guidelines"
			}
		];
	}

	ionViewDidLoad() {
	}

	startNow(){
		this.navCtrl.push("CmetopicListPage", {'exmTopic':'Optimizing Survival from Distributive Shock'});
	}
}
