import { Component, Input, ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'tabs-layout-3',
    templateUrl: 'tabs.html'
})
export class TabsLayout3 {
    @Input('data') data: any;
    @Input('chnldata') chnldata: any;
    //@Input('clrclass') clrclass: any;
    @Input('events') events: any;
   // @ViewChild('tabs') tabRef: any;
    @ViewChild('clrclass') clrclass: string;
    paitem: any;
    page: any;
    coloR: any;
    category_data: any;
    condition_data: any;
    treatment_data: any;
    device_data: any;
    favorites_data: any;
    tab_data: any=[];
    paitem1: any;
    page1: any;
    videos_data: any;
    documents_data: any;
    image_data: any;
    others_data: any;
    channel_data: any;
    segment_name: string = 'education';
    request_from: string;

    constructor( public navCtrl: NavController, navParams: NavParams) {
    	
    	this.page = navParams.get("pageItem");
    	this.request_from = navParams.get("request_from");

    	this.segment_name = localStorage.getItem('segment_name');

    	if (this.page !== 'channels') {
    		// code...
    		this.category_data = navParams.get('data');
    		this.condition_data = {newtopics_id : this.category_data.id, category_id: '1', topicName: this.category_data.name}; 
			this.treatment_data = {newtopics_id : this.category_data.id, category_id: '2', topicName: this.category_data.name }; 
			this.device_data = {newtopics_id : this.category_data.id, category_id: '3', topicName: this.category_data.name};
			//this.favorites_data = {newtopics_id : this.category_data.id, category_id: 'favorites' };

			localStorage.setItem('dashboard_category_id', this.category_data.id);
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
    	}else if(this.page === 'channels'){

    		this.page1 = navParams.get("pageItem1");
    		this.channel_data = navParams.get('chnldata');
    		this.videos_data = {channelDATA : this.channel_data, shownContent: 'video'};
   			this.documents_data = {channelDATA : this.channel_data, shownContent: 'document'};
   			this.image_data = {channelDATA : this.channel_data, shownContent: 'image'};
   			this.others_data = {channelDATA : this.channel_data, shownContent: 'other'};
   			/*
    		switch(this.page1) {
				case 'Abbott':{
					this.coloR = 'abbott';
					break;
				}
				case 'AstraZeneca':{
					this.coloR = 'astrazeneca';
					break;
				}
				case 'Philips':{
					this.coloR = 'philips';
					break;
				}
				case 'Medtronic':{
					this.coloR = 'medtronic';
					break;
				}
				default: {
					this.coloR = 'abbott';
					break;
				}
	    	}
	    	*/
			switch (this.page1)
			{
				case 'Abbott':
				case 'AstraZeneca':
				case 'Philips':
				case 'Medtronic':
				this.coloR = 'abbott';
				break;

				default: 
				this.coloR = 'abbott';
				break;
			}
    	}
		if(this.request_from == 'whatsnew_page'){
			this.coloR = 'cardiac';
			this.category_data = navParams.get('data');

			var list_json_value = JSON.parse(this.category_data.list_values);

			this.condition_data = {category_id: '1', topicName: this.category_data.name, request_from:'whatsnew_page', data: list_json_value.Condition}; 

			this.treatment_data = {category_id: '2', topicName: this.category_data.name, request_from:'whatsnew_page', data: list_json_value.Treatment };

			this.device_data = {category_id: '3', topicName: this.category_data.name, request_from:'whatsnew_page', data: list_json_value.Device};
		}

    }
}
