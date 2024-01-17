import { Component, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import QRCode from 'qrcode';
import { SocialSharing } from '@ionic-native/social-sharing';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { VideosharesocialProvider } from '../../providers/videosharesocial/videosharesocial';

/**
 * Generated class for the QrcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html',
	})
	export class QrcodePage {

	code = 'some sample string';
	generated = '';

	seturl:string;

	htmlToAdd:string;
	headerTitle:string;

	quotes :any;
	videoDetailsQr :any;
	videoName :any;
	videodescription :any;
	videourl :any;
	userEmail :any;
	fromPage :string;
	isShareOtherOption: boolean = false;
	referral_code:string = '';
	video_share_provider_object: VideosharesocialProvider;
	displayQrCode() {
		return this.generated !== '';
	}
	constructor(public navCtrl: NavController, public injector: Injector, public navParams: NavParams,public socialSharing: SocialSharing, private qrScanner: QRScanner) {
		this.isShareOtherOption = false;
		this.userEmail = localStorage.getItem('cv5userEmail');
		this.fromPage = this.navParams.get('previousPage');
		this.referral_code = localStorage.getItem('referral_code');
		this.video_share_provider_object = injector.get<VideosharesocialProvider>(VideosharesocialProvider);
		this.makeCode();
	}

	ionViewDidLoad() {


	}


	// process() {

	// 	const qrcode = QRCode;
	// 	const self = this;
	// 	qrcode.toDataURL(self.code, { errorCorrectionLevel: 'H' }, function (err, url) {
	// 	  self.generated = url;
	// 	})

	// }

	makeCode () {


		//shareVideo(video_data.id,video_data.shareUrl,video_data.name,video_data.description)
		var channelQrCode = this.navParams.get('qrUrl');
		//var videoDetailsQr = this.navParams.get('videoqrData');
		this.videoDetailsQr = this.navParams.get('videoqrData');
		
		if (this.fromPage  == 'channellist') {
			//alert('hi');
			this.headerTitle = "SHARE";
			this.isShareOtherOption = false;
			this.htmlToAdd = '<p class="text-center"><b>Scan QR to View Content.</b></p>';
			this.seturl = channelQrCode;
			
		}else if (this.fromPage  == 'fromSideMenu') {
			// code...
			//alert('bye');
			this.headerTitle = "Share the App";
			this.isShareOtherOption = true;
			this.htmlToAdd = '<p class="text-center"><b>Scan QRcode and download the CardioVisual app.</b></p>';
			this.seturl = localStorage.getItem('isLinkSet');

		}else if (this.fromPage  == 'videoDetails' || this.fromPage == 'informationDetails') {
			// code..
			this.headerTitle = "Share Content";
			this.isShareOtherOption = true;
			this.videoName = this.videoDetailsQr.name;

			this.videodescription = this.videoDetailsQr.description;

			this.videourl = this.videoDetailsQr.shareUrl;

			this.htmlToAdd = '<p class="text-center"><b>Scan QR to View Content.</b></p>';
			this.seturl = this.videourl;

		}
		this.htmlToAdd = this.htmlToAdd+'<p class="text-center"><b>Referral Code: '+this.referral_code+'</b></p>';
		// alert('make code-->'+localStorage.getItem('isLinkSet'));
		// var qrcode = new QRCode(document.getElementById("qrcode"), {
		// 	width : 200,
		// 	height : 200
		// });
		//alert('hi----seturl-->'+this.seturl);
		
		// qrcode.makeCode(localStorage.getItem('isLinkSet'));
		const qrcode = QRCode;
		const self = this;
		//let url = localStorage.getItem('isLinkSet');
		let url = this.seturl;
		qrcode.toDataURL(url, { errorCorrectionLevel: 'H' }, function (err, url) {
		  self.generated = url;
		})
	}

	compilemsg():string{
		//var msg = this.quotes[index].content + "-" + this.quotes[index].title ;

		if (this.fromPage  == 'videoDetails' || this.fromPage == 'informationDetails') {
			// code...
			var msg = this.videoName+' - '+this.videodescription+'.  Watch, learn, share & discuss on CardioVisual: app developed by cardiologists.';
		}else{

			var msg = 'Watch, learn, share & discuss on CardioVisual: app developed by cardiologists.';
		}

		//return msg.concat(" \n Sent from CardioVisual !");
		return msg;
	}

	async regularShare(){
		// var msg = this.compilemsg();
		//share(message, subject, file, url)
		if (this.fromPage  == 'videoDetails' || this.fromPage == 'informationDetails') {
			this.video_share_provider_object.shareSingleVideo(this.videoDetailsQr);
			// this.socialSharing.share(msg, null, 'Share '+this.videoName, this.videourl );
		}else{
			const options = {
				message: 'Download CardioVisual',
				files: [],
				url: localStorage.getItem('isLinkSet')
			}

			// this.video_share_provider_object.shareSingleVideo(localStorage.getItem('isLinkSet'));
			// this.socialSharing.share('Download CardioVisual ', null, 'Download CardioVisual', localStorage.getItem('isLinkSet') );
			await this.socialSharing.shareWithOptions(options)
		}
        // this.video_share_provider_object.shareSingleVideo(this.videoDetailsQr);

	}

	shareSMS(){
		var msg = this.compilemsg();

		if (this.fromPage  == 'videoDetails' || this.fromPage == 'informationDetails') {
			var videomsg = msg+'\n'+this.videourl;
			this.socialSharing.shareViaSMS(videomsg, "");
		}else{
			var appmsg = msg+'\n'+localStorage.getItem('isLinkSet');
			this.socialSharing.shareViaSMS(appmsg, "");
		}

	}

	whatsappShare(){
		//shareViaWhatsApp(message, image, url)
		var msg  = this.compilemsg();		
		if (this.fromPage  == 'videoDetails' || this.fromPage == 'informationDetails') {
			this.socialSharing.shareViaWhatsApp(msg, null, this.videourl);
		}else{
			this.socialSharing.shareViaWhatsApp(msg, null, localStorage.getItem('isLinkSet') );
		}
	}

	facebookShare(){
		var msg  = this.compilemsg();		
		if (this.fromPage  == 'videoDetails' || this.fromPage == 'informationDetails') {
			this.socialSharing.shareViaFacebook(msg, null, this.videourl);
		}else{
			this.socialSharing.shareViaFacebook(msg, null, localStorage.getItem('isLinkSet') );
		}
	}

	twitterShare(){
		var msg  = this.compilemsg();		
		if (this.fromPage  == 'videoDetails' || this.fromPage == 'informationDetails') {
			this.socialSharing.shareViaTwitter(msg, null, this.videourl);
		}else{
			this.socialSharing.shareViaTwitter(msg, null, localStorage.getItem('isLinkSet') );
		}
	}

	emailShare(){

		// Share via email
		var msg  = this.compilemsg();

		//shareViaEmail(message, subject, to, cc, bcc, files)

		// this.socialSharing.shareViaEmail(msg, 'CardioVisual user has a question for you.', ['123@gmail.com']).then((sharEmailSuccess) => {


		if (this.fromPage  == 'videoDetails' || this.fromPage == 'informationDetails') {
			this.socialSharing.shareViaEmail(msg+'\n'+this.videourl, null, []).then((sharEmailSuccess) => {
			// Success!
			//alert('success -->'+JSON.stringify(sharEmailSuccess));
			}).catch((sharEmailError) => {
			// Error!
			//alert('error -->'+JSON.stringify(sharEmailError));
			});
		}else{
			this.socialSharing.shareViaEmail(msg+'\n'+localStorage.getItem('isLinkSet'), 'Download CardioVisual', []).then((sharEmailSuccess) => {
			// Success!
			//alert('success -->'+JSON.stringify(sharEmailSuccess));
			}).catch((sharEmailError) => {
			// Error!
			//alert('error -->'+JSON.stringify(sharEmailError));
			});

		}

	}


	doGoBack(){
      this.navCtrl.pop();
	}

}
