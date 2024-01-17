import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { AppSettings } from './app-settings';

@Injectable()
export class ToastService {

	constructor(public toastCtrl: ToastController) {}

	presentToast(message: string) {
		let toastItem = AppSettings.TOAST;
		toastItem["message"] = message;
		let toast = this.toastCtrl.create(toastItem);
		toast.present();
	}


	//toast with timeout and positions => by Sanjeev kumar //mypresentToast(msg: string, time = 2000) {
	mypresentToast(msg: string, time) {
		const toast = this.toastCtrl.create({
			message: msg,
			duration: time,
			position: "top"  // top, middle , bottom
		});
		toast.present();

		setTimeout(() => {
			toast.dismiss();
			console.log("called dismiss");
		}, time + 500);
	}

	mycustomToast(msg: string, time) {
		const toast = this.toastCtrl.create({
			message: msg,
			duration: time,
			position: "bottom"  // top, middle , bottom
		});
		toast.present();

		setTimeout(() => {
			toast.dismiss();
			console.log("called dismiss");
		}, time + 500);
	}
}