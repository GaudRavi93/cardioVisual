import { Component, Input, ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'tabs-layout-2',
    templateUrl: 'tabs.html'
})
export class TabsLayout2 {
    @Input('data') data: any;
    //@Input('clrclass') clrclass: any;
    @Input('events') events: any;
   // @ViewChild('tabs') tabRef: any;
    @ViewChild('clrclass') clrclass: string;
    
    paitem: any;
    page: any;
    coloR: any;
    expert_data: any;
    learn_data: any;
    featured_data: any;
    product_data: any;
    category_data: any;
    tab_data: any=[];
    segment_name: string;    
    request_from: string;
    
    constructor( public navCtrl: NavController, navParams: NavParams) {
    
    	this.category_data = navParams.get('data');
    	this.request_from = navParams.get("request_from");
		
		localStorage.setItem('dashboard_category_id', this.category_data.id);

		this.segment_name = localStorage.getItem('segment_name');
    	
    	this.page = navParams.get("pageItem");

    	this.expert_data = {newtopics_id : this.category_data.id, category_id: '4', topicName: this.category_data.name}; 
		this.learn_data = {newtopics_id : this.category_data.id, category_id: '5', topicName: this.category_data.name };
		this.featured_data = {newtopics_id : this.category_data.id, category_id: '6', topicName: this.category_data.name};
		this.product_data = {newtopics_id : this.category_data.id, category_id: '7', topicName: this.category_data.name};

    	switch(this.page) {
			case'Cardiac':
			case'Heart': {
				this.coloR = 'cardiac';
				break;
			}
			case'Ep':
			case'Rhythm': {
				this.coloR = 'ep';
				break;
			}
			case'Structural':
			case 'Structure': {
				this.coloR = 'structural';
				break;
			}
			case 'Vascular':
			case 'Circulation': {
				this.coloR = 'vascular';
				break;
			}
			case'Heart Health': {
				this.coloR = 'health';
				break;
			}
			case 'Diabetes':{
				this.coloR = 'diabetes';
				break;
			}
			default: {
				this.coloR = 'ep';
				break;
			}
	    }

	    if(this.request_from == 'whatsnew_page'){
			this.coloR = 'cardiac';
			this.category_data = navParams.get('data');

			var list_json_value = JSON.parse(this.category_data.list_values);

			this.expert_data = {category_id: '4', topicName: this.category_data.name, request_from:'whatsnew_page', data: list_json_value.Expert}; 

			this.learn_data = {category_id: '5', topicName: this.category_data.name, request_from:'whatsnew_page', data: list_json_value.Learn };

			this.featured_data = {category_id: '6', topicName: this.category_data.name, request_from:'whatsnew_page', data: list_json_value.Featured};

			this.product_data = {category_id: '7', topicName: this.category_data.name, request_from:'whatsnew_page', data: list_json_value.Product};
		}
    }
}
