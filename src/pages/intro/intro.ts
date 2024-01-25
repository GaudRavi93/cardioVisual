import { LoadingService } from '../../services/loading-service';
import {Injectable, Component, ViewChild, Injector } from '@angular/core';
import { IonicPage, NavController, Slides, MenuController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
import { HttpService } from '../../services/HttpService';
import * as _ from 'underscore/underscore';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {
  
  @ViewChild(Slides) slides: Slides;
  getStartedMsg: String = "Get Started";
  buttonAnime: boolean = false;
  pagerShow:boolean=true;
  snapshot: any;
  onboardingApiURL: any;
  onboardingImgs: any;
  loading: any;
  splash_screen_object: SplashScreen;
  loading_service_object: LoadingService;
  storage_object: Storage;
  http_service_object: HttpService;
  isLastSlide: boolean = false;
  constructor(public navCtrl: NavController,public  injector: Injector) {

      this.splash_screen_object = injector.get<SplashScreen>(SplashScreen);
      this.loading_service_object = injector.get<LoadingService>(LoadingService);
      this.storage_object = injector.get<Storage>(Storage);
      this.http_service_object = injector.get<HttpService>(HttpService);

      this.splash_screen_object.hide();
      this.loading_service_object.show();
     
      this.http_service_object.getIntroScreen().subscribe(data => {
        this.onboardingImgs = data;
        if (_.size(data) == 1) {
          this.isLastSlide = true;
          this.buttonAnime = true;
          this.pagerShow = false;
          this.getStarted();
        }else{
          this.isLastSlide = false;
          this.buttonAnime = false;
          this.pagerShow = true;
          this.getStarted();
        }
        this.loading_service_object.hide();

      }, err => {
          console.log('err->'+err);
          //alert(err);
      });    
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();

    if (this.slides.isEnd()) {
      this.isLastSlide = true;
      this.buttonAnime = true;
    } else {
      this.isLastSlide = false;
      this.buttonAnime = false;
    }
  }
  
  getStarted() {
    this.storage_object.set('get_started_page_counter', 1);
    this.navCtrl.push('LoginPage');
    //this.navCtrl.push('OnboardingPage');
  }

  next(){
    this.slides.slideNext(); 
    this.slideChanged();
  }
}