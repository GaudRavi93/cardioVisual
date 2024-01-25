import { Component, Input, ViewChild, Renderer, ElementRef, ChangeDetectorRef, Injector } from '@angular/core';
import { IonicPage, Content, NavController, NavParams, Platform, ToastController , Modal, ModalController, ModalOptions, AlertController, Gesture, PopoverController } from 'ionic-angular';
import { HttpService } from '../../services/HttpService';
import { Storage } from '@ionic/storage'
import 'rxjs/add/operator/map';
import * as _ from 'underscore/underscore';
import { SocialSharing } from '@ionic-native/social-sharing';
import { File } from '@ionic-native/file';
import { FileTransfer,  FileTransferObject } from '@ionic-native/file-transfer'; 
import { DatabaseProvider } from '../../providers/database/database';
import { Network } from '@ionic-native/network';
import { ToastService } from '../../services/toast-service';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { ColorsPopoverPage } from '../colors-popover/colors-popover';
import { WidthPopoverPage } from '../width-popover/width-popover';
import { BrushTypePopoverPage } from '../brush-type-popover/brush-type-popover';

/**
 * Generated class for the DrawonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 declare var window;

 const STORAGE_KEY = 'IMAGE_LIST';
 
@IonicPage()
@Component({
  selector: 'page-drawon',
  templateUrl: 'drawon.html',
})
export class DrawonPage {
	// Canvas stuff
	@ViewChild('imageCanvas') canvas: any;

	@Input('background-image') backgroundImage: string;
	// Make Canvas sticky at the top stuff
	@ViewChild(Content) content: Content;
	@ViewChild('fixedContainer') fixedContainer: any;
	drawOnSrc: any;
	drawOnImgTitle : any;
	imageCopyright : any;
	sel_subtopic : any;
	showimagecopyright: boolean = true;
	canvasElement: any;
	isImage: any;
	imgpath: any;
	ctx: any;
	base_image: any;
	taken_image: any;
	path: any;
	url: any;
	video_Name: any;
	local_Url: any;

	saveX: number;
	saveY: number;
	storedImages = [];

	isclicked:boolean = false;
	resetMove:boolean = true;
	mode: any = '';
	zoomnumber:number = 5;

	// Color Stuff
	selectedColor = '#030001';

	colors = [ '#030001', '#c2281d', '#de722f', '#edbf4c', '#5db37e', '#459cde', '#4250ad', '#802fa3' ];

	//pinch to zoom
	private gesture: Gesture;
	@ViewChild('map') elementParent;
  public mediaLoaded:boolean = false;
  image = null;
  container = null;
  transforms = [];
  adjustScale = 1;
  adjustDeltaX = 0;
  adjustDeltaY = 0;

  currentScale = null;
  currentDeltaX = null;
  currentDeltaY = null;
  public drawingEnabled: boolean = true;
  nav_params_object: NavParams;
  platform_object: Platform;
  storage_object: Storage;
  social_sharing_object: SocialSharing;
  toast_service_object: ToastService;
  file_object: File;
  base64_to_gallery_object: Base64ToGallery;
  android_permission_object: AndroidPermissions;
  popover_controller_object: PopoverController;
  
	constructor(public renderer: Renderer,public injector: Injector) {

		this.nav_params_object = injector.get<NavParams>(NavParams);
		this.platform_object = injector.get<Platform>(Platform);
		this.storage_object = injector.get<Storage>(Storage);
		this.social_sharing_object = injector.get<SocialSharing>(SocialSharing);
		this.toast_service_object = injector.get<ToastService>(ToastService);
		this.file_object = injector.get<File>(File);
		this.base64_to_gallery_object = injector.get<Base64ToGallery>(Base64ToGallery);
		this.android_permission_object = injector.get<AndroidPermissions>(AndroidPermissions);
		this.popover_controller_object = injector.get<PopoverController>(PopoverController);

		this.local_Url = this.nav_params_object.get("local_Url");

		this.video_Name = this.nav_params_object.get("video_Name");

		if (this.local_Url == 'localUrl') {
			// code...
			this.drawOnSrc = this.file_object.dataDirectory+'drawon/'+this.video_Name;
			//this.drawOnSrc = this.file_object.dataDirectory+this.local_Url;

			
		}else{
			this.drawOnSrc = this.nav_params_object.get("drawnurl");
		}
		

		console.log('this.drawOnSrc ->'+this.drawOnSrc);

		this.drawOnImgTitle = this.nav_params_object.get("drawOnImgTitle"); 
		this.imageCopyright = this.nav_params_object.get("drawnCopyright"); 
		this.sel_subtopic = this.nav_params_object.get("drawnSubtopicType");

		// Show Copyright message for 2 seconds then disappear.
		setTimeout(function() {
			this.showimagecopyright = false;
		}, 2000);

		var sec = 0;
		var watch = setInterval(function() {
			++sec;
		}, 1000);


		localStorage.setItem('canvasimgshare','notset');

		 this.storage_object.ready().then(() => {
      this.storage_object.get(STORAGE_KEY).then(data => {
        if (data != undefined) {
          this.storedImages = data;
        }
      });
    });
	}


	ionViewDidEnter() {		
		// https://github.com/ionic-team/ionic/issues/9071#issuecomment-362920591
		//Get the height of the fixed item
		//let itemHeight = this.fixedContainer.nativeElement.offsetHeight;

		 //let scroll = this.content.getScrollElement();

		// // Add preexisting scroll margin to fixed container size
		//itemHeight = Number.parseFloat(scroll.style.marginTop.replace("px", "")) + itemHeight;
		//scroll.style.marginTop = itemHeight + 'px';
	}

	ionViewWillEnter(){
		//localStorage.setItem('canvasimgshare',null);
	}


	changeColour(xyz){

	}

	changeSize(int){

	}
	clearCanvas(){

	}

 
	ionViewDidLoad() {
	    this.platform_object.ready().then(() => {

		    this.canvasElement = this.canvas.nativeElement;
		    this.renderer.setElementAttribute(this.canvasElement, 'width', this.platform_object.width() + '');
		    this.renderer.setElementAttribute(this.canvasElement, 'height', this.platform_object.height() + '');
				this.createImgOnCanvas();

	   });
	    this.image = this.canvas.nativeElement;
	
    	this.container = this.elementParent.nativeElement;
    	// Prevent long press saving on mobiles.
    	this.container.addEventListener('touchstart', function(e) {
      	e.preventDefault();
    	});

    this.init();

	}


	createImgOnCanvas(){
		let ctx = this.canvasElement.getContext('2d');

		var image = new Image();
		image.onload = function() {
			const scaleFactor = ctx.canvas.width / image.width;
			ctx.canvas.height = image.height * scaleFactor;

			ctx.drawImage(image,0,0,ctx.canvas.width, image.height * scaleFactor);
		}
		//image.crossOrigin = "Anonymous";
		console.log('this.drawOnSrc-->'+ this.drawOnSrc);
		//image.src = 'url';
		image.src = this.drawOnSrc;

		
	}

	selectColor(color) {
		//this.selectedColor = color;
		//this.pencontainer.nativeElement['style'].color = color;
	}
   
	drawingEnd(event){
		this.resetMove = true;
		//this.fixedContainer.nativeElement['style'].overflow = 'auto';
	}

	startDrawing(ev) {
		if(this.mode == 'pen' && this.isclicked){
			ev.preventDefault();
		}
		var canvasPosition = this.canvasElement.getBoundingClientRect();
		
		if(this.zoomnumber > 5){
			this.saveX = (ev.touches[0].pageX/(this.zoomnumber*0.20)) - (canvasPosition.x/(this.zoomnumber*0.20));
			this.saveY = (ev.touches[0].pageY/(this.zoomnumber*0.20)) - (canvasPosition.y/(this.zoomnumber*0.20));
		}else{
			this.saveX = ev.touches[0].pageX - canvasPosition.x;
			this.saveY = ev.touches[0].pageY - canvasPosition.y;		
		}


		if(this.currentScale > 1){
			this.saveX = (ev.touches[0].pageX/this.currentScale) - (canvasPosition.x/this.currentScale);
			this.saveY = (ev.touches[0].pageY/this.currentScale) - (canvasPosition.y/this.currentScale);
		}else{
			this.saveX = ev.touches[0].pageX - canvasPosition.x;
			this.saveY = ev.touches[0].pageY - canvasPosition.y;		
		}
	}
   
	moved(ev) {
		var canvasPosition = this.canvasElement.getBoundingClientRect();

		let ctx = this.canvasElement.getContext('2d');
		let currentX = ev.touches[0].pageX - canvasPosition.x;
		let currentY = ev.touches[0].pageY - canvasPosition.y;

		if(this.zoomnumber > 5){
			currentX = (ev.touches[0].pageX/(this.zoomnumber*0.20)) - (canvasPosition.x/(this.zoomnumber*0.20));
			currentY = (ev.touches[0].pageY/(this.zoomnumber*0.20)) - (canvasPosition.y/(this.zoomnumber*0.20));
		}

		if(this.currentScale > 1){
			currentX = (ev.touches[0].pageX/this.currentScale) - (canvasPosition.x/this.currentScale);
			currentY = (ev.touches[0].pageY/this.currentScale) - (canvasPosition.y/this.currentScale);
		}
		
		var brush_color = localStorage.getItem('canvasbrushcolor');
		var brush_width = localStorage.getItem('canvasbrushwidth');
		var brush_type = localStorage.getItem('canvasbrushtype');
		
		switch(brush_type){
			case 'Pencil':
				ctx.lineJoin = 'miter';
				ctx.strokeStyle = brush_color;
				ctx.lineWidth = brush_width;

				ctx.beginPath();
				this.resetMove && ctx.moveTo(this.saveX, this.saveY);

				ctx.lineTo(currentX, currentY);
				ctx.closePath();
				break;

			case 'Circle':	
				ctx.lineJoin = 'round';
				ctx.strokeStyle = brush_color;
				ctx.lineWidth = brush_width;

				ctx.beginPath();
				this.resetMove && ctx.moveTo(this.saveX, this.saveY);
				ctx.arc(currentX, currentY, 1, 0, 2*Math.PI, false);
				ctx.closePath();
				break;

			case 'Spray':
				var density = 50;
				ctx.lineJoin = ctx.lineCap = 'round';
				ctx.lineWidth = brush_width;
				ctx.strokeStyle = brush_color;

				ctx.beginPath();
				this.resetMove && ctx.moveTo(this.saveX, this.saveY);

				for (var i = density; i--; ) {
      		var radius = 20;
      		var offsetX = this.getRandomInt(-radius, radius);
      		var offsetY = this.getRandomInt(-radius, radius);
      		ctx.fillStyle = brush_color;
      		ctx.fillRect(currentX + offsetX, currentY + offsetY, 1, 1);
      	}
				
				ctx.closePath();
				break;

			default:
					ctx.lineJoin = 'miter';
					ctx.strokeStyle = brush_color;
					ctx.lineWidth = brush_width;

					ctx.beginPath();
					this.resetMove && ctx.moveTo(this.saveX, this.saveY);

					ctx.lineTo(currentX, currentY);
					ctx.closePath();
				break;
		}
	
		this.isclicked && ctx.stroke() && (this.resetMove=false);
		this.saveX = currentX;
		this.saveY = currentY;
		console.log('this.resetMove------>'+this.resetMove);
		if(!this.resetMove){
			console.log('jjj--->');
			//this.fixedContainer.nativeElement['style'].overflow = 'hidden';
			//this.fixedContainer.nativeElement['style'].border = '5px solid blue';
		}
	}

	getClickedIcon(mode){
		let ctx = this.canvasElement.getContext('2d');
		switch (mode) {
			case "pen":
				// code...
				this.toast_service_object.presentToast("Pen");
				this.isclicked=!this.isclicked;
				this.mode = 'pen';
				//this.canvas.nativeElement.style.width = '100%';
				//this.zoomnumber = 5;

				break;
			case "eraser":
				// code...
				//const ctx = this.canvasElement.getContext('2d');
				// ctx.save();
				// ctx.globalCompositeOperation = 'copy';
				 ctx.strokeStyle = 'transparent';
				 this.mode = '';
				// ctx.beginPath();
				// ctx.lineTo(0, 0);
				// ctx.stroke();
				// ctx.restore();
				break;
			case "clear":
				this.toast_service_object.presentToast("Clear");
				this.mode = '';
				this.isclicked = false;
				ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
				this.isclicked=false;
				this.createImgOnCanvas();

				break;
			case "save":
				this.platform_object.ready().then(() => {
					this.android_permission_object.checkPermission(this.android_permission_object.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
						result => console.log('Has permission?',result.hasPermission),
						err => this.android_permission_object.requestPermission(this.android_permission_object.PERMISSION.WRITE_EXTERNAL_STORAGE)
					);

				});
				this.android_permission_object.requestPermissions([this.android_permission_object.PERMISSION.WRITE_EXTERNAL_STORAGE,this.android_permission_object.PERMISSION.READ_EXTERNAL_STORAGE]);
				this.toast_service_object.presentToast("Save");

				this.saveCanvasImage('save');
				break;

			case "email":
				this.platform_object.ready().then(() => {
					this.android_permission_object.checkPermission(this.android_permission_object.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
						result => console.log('Has permission?',result.hasPermission),
						err => this.android_permission_object.requestPermission(this.android_permission_object.PERMISSION.WRITE_EXTERNAL_STORAGE)
					);

				});
				this.android_permission_object.requestPermissions([this.android_permission_object.PERMISSION.WRITE_EXTERNAL_STORAGE,this.android_permission_object.PERMISSION.READ_EXTERNAL_STORAGE]);
				this.toast_service_object.presentToast("Share");

				this.saveCanvasImage('share');

				this.isclicked = false;
				this.mode = '';
				//Common sharing event will open all available application to share
				//var message = "Hello,<br />I’m sending you this information from the CardioVisual mobile app. I think it’s something you might like.<br /><br />CardioVisual is a free mobile app packed with cardiologist-curated videos and infographics.<br /> <br />If you want to get the app for yourself, download it from <a href='"+localStorage.getItem('android_play_store_link')+"'>Google Play Store</a> or <a href='"+localStorage.getItem('ios_app_store_link')+"'>Apple Store</a>";
				break;
			default:
				// code...
				break;
		}

	}

	getzoomPlus(){
		//this.isclicked=false;
		this.zoomnumber = this.zoomnumber+1;
		var zoomlevel = this.zoomnumber*20;
		this.canvas.nativeElement.style.width = zoomlevel+'%';
		var loader = document.getElementById("canvasDiv");
		loader.style.overflow = 'scroll';
	}
	getzoomMinus(){
		//this.isclicked=false;
		if(this.zoomnumber > 5){
			this.zoomnumber = this.zoomnumber - 1;
			var zoomlevel = this.zoomnumber*20;
			this.canvas.nativeElement.style.width = zoomlevel+'%';
		}
	}

	/*pinch to zoom*/
	setMediaLoaded(){
   	//setTimeout(()=>this.mediaLoaded = true, 200);
  }

  /* 
		Initialize listeners for gestures
	*/
  init = () => {
    //create gesture obj w/ ref to DOM element
    this.gesture = new Gesture(this.canvas.nativeElement);
    
    //listen for the gesture
    this.gesture.listen();

    this.gesture.on('doubletap', (ev) => {
      this.transforms = [];
      this.adjustScale += 1;
      if (this.adjustScale >= 4) this.adjustScale = 1;

      this.currentScale = this.adjustScale;

      this.transforms.push('scale(' + this.adjustScale + ')');
      this.container.style.transform = this.transforms.join(' ');
    });


    this.gesture.on("pinch", (ev) => {

      this.transforms = [];

      // Adjusting the current pinch/pan event properties using the previous ones set when they finished touching
      this.currentScale = this.adjustScale * ev.scale;
      this.currentDeltaX = this.adjustDeltaX + (ev.deltaX / this.currentScale);
      this.currentDeltaY = this.adjustDeltaY + (ev.deltaY / this.currentScale);

      // Concatinating and applying parameters.
      if (this.currentScale < 1) {
        this.currentScale = 1;
        this.currentDeltaX = 0;
        this.currentDeltaY = 0;
      }

      this.transforms.push('scale(' + this.currentScale + ')');
      this.transforms.push('translate(' + this.currentDeltaX + 'px,' + this.currentDeltaY + 'px)');
      this.container.style.transform = this.transforms.join(' ');
    });


    this.gesture.on("pinchend", (ev) => {

      // Saving the final transforms for adjustment next time the user interacts.
      this.adjustScale = this.currentScale;
      this.adjustDeltaX = this.currentDeltaX;
      this.adjustDeltaY = this.currentDeltaY;
    });

    this.gesture.on("panend", (ev) => {
      // Saving the final transforms for adjustment next time the user interacts.
      this.adjustScale = this.currentScale;
      this.adjustDeltaX = this.currentDeltaX;
      this.adjustDeltaY = this.currentDeltaY;

    });

  }

  /* pinch to zoom*/
  /**
   * Displays list of colors
   * param event
   */
  openColorsPopover(event) {
  	let popover = this.popover_controller_object.create(ColorsPopoverPage);
    popover.present({
      ev: event
    });
  }

  /**
   * Displays list of brush widths
   * param event
   */
  openWidthsPopover(event) {
    let popover = this.popover_controller_object.create(WidthPopoverPage);
    popover.present({
      ev: event
    });
  }

  /**
   * Displays list of brush types
   * param event
   */
  openTypesPopover(event) {

  	this.isclicked=!this.isclicked;
		this.mode = 'pen';

    let popover = this.popover_controller_object.create(BrushTypePopoverPage);
    popover.present({
      ev: event
    });
  }
 
  getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min + 1)) + min;
	}

  saveCanvasImageOLD(action){
		var dataUrl = this.canvasElement.toDataURL();
		let ctx = this.canvasElement.getContext('2d');  
		var data = dataUrl.split(',')[1];
		this.base64_to_gallery_object.base64ToGallery(data).then((res) => {
			if(action == 'save'){
				this.toast_service_object.presentToast("Successfully Saved To Gallery.");
			}
			console.log('Saved image to gallery ', JSON.stringify(res));
			localStorage.setItem('canvasimgshare',res);
			
			if(action == 'share'){
				var message = "Hello I’m sending you this information from the CardioVisual mobile app.";
				var subject = "A friend thought you might like this information from CardioVisual";
				var lclstorage = localStorage.getItem('canvasimgshare');
				if(lclstorage == 'notset') {
					this.url = this.drawOnSrc;					
				}else{
					const ROOT_DIRECTORY = 'file://';
					this.url = ROOT_DIRECTORY+localStorage.getItem('canvasimgshare');
				}

				this.social_sharing_object.share(message,subject, this.url, this.drawOnImgTitle).then((shareentries) => {
						if (shareentries) {
							this.toast_service_object.presentToast("successfully share the image.");
						}
						console.log('success' + JSON.stringify(shareentries));
					})
					.catch((error) => {
						console.log('sharing error' + JSON.stringify(error));
					});
			}
		}, (err) => {

			console.log('image to gallery err ', JSON.stringify(err));
		});

		this.mode = '';
		this.isclicked = false;
		
		// end
	}

  saveCanvasImage(action) {
	  var dataUrl = this.canvasElement.toDataURL();
	  let ctx = this.canvasElement.getContext('2d');

	  let name = new Date().getTime() + '.png';
	  //let path = this.file_object.dataDirectory;
	  //let path = this.file_object.externalDataDirectory;
	  let path = this.file_object.externalApplicationStorageDirectory;
	  
	  let options = { replace: false };
	 
	  var data = dataUrl.split(',')[1];
	  let blob = this.b64toBlob(data, 'image/png');
	 
	  this.file_object.writeFile(path, name, blob, options).then(res => {
	  	
	  	if(action == 'save'){
				this.toast_service_object.presentToast("Successfully Saved To Gallery.");
			}
			console.log('Saved image to gallery ', JSON.stringify(res));
	  	localStorage.setItem('canvasimgshare',res.nativeURL);
			
			if(action == 'share'){
				var message = "Hello I’m sending you this information from the CardioVisual mobile app.";
				var subject = "A friend thought you might like this information from CardioVisual";
				var lclstorage = localStorage.getItem('canvasimgshare');
				if(lclstorage == 'notset') {
					this.url = this.drawOnSrc;					
				}else{
					//const ROOT_DIRECTORY = 'file://';
					this.url = localStorage.getItem('canvasimgshare');
				}

				this.social_sharing_object.share(message,subject, this.url, this.drawOnImgTitle).then((shareentries) => {
						if (shareentries) {
							this.toast_service_object.presentToast("successfully share the image.");
						}
						console.log('success' + JSON.stringify(shareentries));
					})
					.catch((error) => {
						console.log('sharing error' + JSON.stringify(error));
					});
			}

	    this.storeImage(name);
	  }, err => {
	  	console.log('error: ', err);
	  });
	}

	b64toBlob(b64Data, contentType) {
	  contentType = contentType || '';
	  var sliceSize = 512;
	  var byteCharacters = atob(b64Data);
	  var byteArrays = [];
	 
	  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
	    var slice = byteCharacters.slice(offset, offset + sliceSize);
	 
	    var byteNumbers = new Array(slice.length);
	    for (var i = 0; i < slice.length; i++) {
	      byteNumbers[i] = slice.charCodeAt(i);
	    }
	 
	    var byteArray = new Uint8Array(byteNumbers);
	 
	    byteArrays.push(byteArray);
	  }
	 
	  var blob = new Blob(byteArrays, { type: contentType });
	  return blob;
	}

	storeImage(imageName) {
	  let saveObj = { img: imageName };
	  this.storedImages.push(saveObj);
	  this.storage_object.set(STORAGE_KEY, this.storedImages).then(() => {
	    setTimeout(() =>  {
	      //this.content.scrollToBottom();
	    }, 500);
	  });
	}
}