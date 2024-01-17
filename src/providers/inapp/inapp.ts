import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform, MenuController, Nav, Modal, ModalController, ModalOptions} from 'ionic-angular';
import { InAppPurchase } from '@ionic-native/in-app-purchase';
import { Http } from '@angular/http';
import * as _ from 'underscore/underscore';
import { HttpService } from '../../services/HttpService';
import { DatabaseProvider } from '../../providers/database/database';
import { LoadingService } from '../../services/loading-service';

/*
  Generated class for the InappProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InappProvider {
	productDetails:any;
	os:any;
	inappData:any;
	localapi:any;
	orderHistoryData: any;

	restoreProductDetails : Array<Object>;

	constructor(public platform: Platform, public http2: HttpClient, public iap: InAppPurchase,public http:Http, private httpservice: HttpService,private databaseprovider: DatabaseProvider, private loadingService: LoadingService) {
		this.os = localStorage.getItem('getDevicePlatform');

		console.log('Hello InappProvider Provider');
		this.platform.ready().then(() => {
			this.loadProducts();

			//this.restoreProducts();
		}); //device ready end

		this.localapi = this.httpservice.getApi();
	}

	products_array() {
		return ['cardio_pro_live2','cardio_pre_live3','cardiovisual_pro_monthly1'];
	}

	cv_subscriptionId(){
		return 'cardio_pre_live3';
		//return 'cardio_pre_test_1';
	}

	cv_productId(){
		return 'cardio_pro_live2';
	}

	cv_subscriptionId_monthly(){
		return 'cardiovisual_pro_monthly1';
		//return 'cardio_pro_testing14';
	}


	loadProducts(){
		//alert('kklllll');
		var productIds = this.products_array();
		console.log('inapp productIds--->'+productIds);
		//alert('productIds--->'+productIds);
		//this.iap.getProducts(['cardio_pro_live2','cardio_pre_test_1','cardio_pro_testing14']).then((products) => {
		this.iap.getProducts(['cardio_pro_live2','cardio_pre_live3','cardiovisual_pro_monthly1']).then((products) => {			
			//alert('products -------->'+JSON.stringify(products));
			console.log('inapp provider product details-->'+JSON.stringify(products));
			this.productDetails = products;

			var prePrice = (products[0].price) == null ? "$2.99" : products[0].price; // after new price change
            var proPrice = (products[1].price) == null ? "$9.99" : products[1].price;
            var proMonthlyPrice = (products[2].price) == null ? "$0.99" : products[2].price;

            //alert('prePrice->'+prePrice +'  proPrice-->'+proPrice +'  proMonthlyPrice-->'+proMonthlyPrice);
            localStorage.setItem('prePrice',prePrice);
            localStorage.setItem('proPrice',proPrice);
            localStorage.setItem('proMonthlyPrice',proMonthlyPrice);
			
			//  [{ productId: 'com.yourapp.prod1', 'title': '...', description: '...', price: '...' }, ...]
			this.restoreProducts();
		})
		.catch((err) => {
			//alert('inapp err --->'+JSON.stringify(err));
			console.log('inapp err --->'+JSON.stringify(err));
		});
	}


	restoreProducts(){
		//alert('kklllll');
		this.iap.restorePurchases().then(function (purchasesdata) {
		    console.log(purchasesdata);
		    this.restoreProductDetails = JSON.stringify(purchasesdata);
		    //alert('restore purchasesdata data----->'+purchasesdata);
		})
		.catch(function (err) {
		    console.log(err);
		    console.log('restorePurchases err---->'+ JSON.stringify(err));
		    //alert('restorePurchases err---->'+ JSON.stringify(err));
		});	
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad inapp');
	}

	allProductDetails(){
		return this.productDetails;
	}

	/**
	 * This functions compares two date object i.e. current date with the date passed as an argument.
	 * @param  {String} expiryDate - date in millisec
	 * @return {boolean} - returns true if expired else returns false. 
	 */
	compareDate(expiryDate){		
		var currentDateMs=new Date().getTime();	//date in millisec		
		var curDate=new Date(currentDateMs);
		curDate=new Date(curDate.getFullYear(),curDate.getMonth(),curDate.getDate()); 
		
		expiryDate=Number(expiryDate);		
		var expDate=new Date(expiryDate);
		expDate=new Date(expDate.getFullYear(),expDate.getMonth(),expDate.getDate());

		//alert('curDate-->'+curDate);		
		//alert('expDate-->'+expDate);		
		if(curDate > expDate)
			return true;	//expired
		else
			return false;	//not expired	

	}

	compareDatePromotionalAccess(created_at){
		//alert('---created_at---'+created_at);
		
		var currentDateMs=new Date().getTime();	// current date in millisec    
		//var created_at = '2019-02-01T06:34:03.000Z';
		var dec31 = '2019-12-31T06:34:03.000Z';
		var starDate = new Date(created_at).getTime();
		var till_feb = '2019-02-22T06:34:03.000Z';
		var till_febInmilisec = new Date(till_feb).getTime();
		if (starDate < till_febInmilisec) {
			localStorage.setItem('shownContent', 'true'); //old content have to shown
		}else{
			localStorage.setItem('shownContent', 'false'); //new content have to shown
		}
		var endDate = new Date(dec31).getTime();

		var timeDiff = (endDate - starDate);
		var diffDays = timeDiff / (1000 * 3600 * 24); 
		var productPurchaseDate=new Date(created_at).getTime();// product created date in millisec
		productPurchaseDate+=1000 * 60 * 60 * 24 * diffDays; // Add  days to the created date

		localStorage.setItem('productActiveTill', new Date(productPurchaseDate).toDateString());

		if (productPurchaseDate >= currentDateMs) { 
			return true;   
		}else {  
			return false;	  
		} 
		
	}

	/* by sanjeev: expDate  */
	productDateExp(expiryDate){
		expiryDate=Number(expiryDate);		
		var expDate=new Date(expiryDate);
		expDate=new Date(expDate.getFullYear(),expDate.getMonth(),expDate.getDate());
		//alert('sqllite-->'+expDate);
		return expDate;

	}
	/* End */	

	/**
	 * This function saves user's pre/pro purchased information that we get from google to api
	 * @param  {[object]} data- containing user's purchased data.
	 * @param  {[integer]} liveId - cardiovisual user id	
	 * @sanjeev 14 jul 2019 	
	*/

	saveInAppPurchaseDataToApi(data,liveId){
		if(this.os != 'Android'){
    		this.inappData = data;
    	} else {
    		var parsedReceipt= JSON.parse(data.receipt);
			var dateObj = Date.now();
			dateObj += 1000 * 60 * 60 * 24 * 2;
			this.inappData = {			
				"autoRenewing": parsedReceipt.hasOwnProperty('autoRenewing') ? parsedReceipt['autoRenewing'] : "",
				"orderId": parsedReceipt['orderId'],
				"productType": data.productType,
				"productId": parsedReceipt['productId'],
				"purchaseState": parsedReceipt['purchaseState'],
				"purchaseTime": parsedReceipt['purchaseTime'],
				"purchaseToken": parsedReceipt['purchaseToken'],
				"signature": data.signature,
				"transactionId": data.transactionId,			
				"cardiovisualUserId": liveId,
				"platform": this.os,
				"expiryTime": parsedReceipt.hasOwnProperty('autoRenewing') ? dateObj : null,
			};
		}
		this.http.post(this.localapi+"/api/orderhistories", this.inappData).subscribe(dataInsertSuccess => {
			console.log("Inside success---"+JSON.stringify(dataInsertSuccess));
			//alert("Inside success---"+JSON.stringify(dataInsertSuccess));
			var userLiveId = localStorage.getItem('userliveId');
			//alert("Inside success userLiveId---"+JSON.stringify(userLiveId));
			this.databaseprovider.getOrderDetailsAPIData(userLiveId);
		}, error => {
			console.log(error);
		});

	}

	canShareAccess(user_type){
		var orderData = new Array("");
		this.databaseprovider.fetchAllData('order_details', orderData).then(orderresult => {
			var allProducts = _.pluck(orderresult,'product_id');

			var canDownload;
			var cv_subscriptionId = this.cv_subscriptionId();
			var cv_productId = this.cv_productId();
			var cv_subscriptionId_monthly = this.cv_subscriptionId_monthly();

			if(user_type == 'doctor'){
			canDownload = _.contains(allProducts, cv_subscriptionId) || _.contains(allProducts, cv_productId) ||  _.contains(allProducts, cv_subscriptionId_monthly);
			if(canDownload){	//check if no prod buy then check for active subscription
				var allProducts = _.pluck(orderresult,'product_id');
				var prodData =_.findWhere(orderresult,{"product_id":cv_productId});
				if(prodData==undefined){

					var subsData = _.find(orderresult, function(item){ return item.product_id === cv_subscriptionId || item.product_id === cv_subscriptionId_monthly ; });

					canDownload = !(this.compareDate(subsData.expiry_time));
				}
			}
			}else{

				canDownload = _.contains(allProducts,cv_subscriptionId) || _.contains(allProducts,cv_subscriptionId_monthly);
				if(canDownload){

					var subsData =_.find(orderresult, function(item){ return item.product_id === cv_subscriptionId || item.product_id === cv_subscriptionId_monthly ; });
					canDownload = !(this.compareDate(subsData.expiry_time));	
				}
			}

			localStorage.setItem('canDownloadAccess',canDownload);
			return canDownload;
		});

	}
}
