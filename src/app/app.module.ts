import { IonicSelectableModule } from 'ionic-selectable';
import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { MyApp } from './app.component';

//import { AppSettings } from '../services/app-settings';
import { ToastService } from '../services/toast-service';
import { LoadingService } from '../services/loading-service';
import { HttpService } from '../services/HttpService';
//import { DownloadService } from '../services/DownloadService';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { SQLite } from '@ionic-native/sqlite';
import { InAppPurchase } from '@ionic-native/in-app-purchase';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/*abhi*/
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IonicStorageModule } from '@ionic/storage';

import { map } from 'rxjs/operators';
import { Network } from '@ionic-native/network';
import { Device } from '@ionic-native/device';
import { SocialSharing } from '@ionic-native/social-sharing';

import { CountryandrolelistProvider } from '../providers/countryandrolelist/countryandrolelist';

import { GooglePlus } from '@ionic-native/google-plus';
//import { GooglePlus } from '@ionic-native/google-plus/ngx';

import { Facebook } from '@ionic-native/facebook';

import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer'; 
import { File } from '@ionic-native/file';
import { DatabaseProvider } from '../providers/database/database'; 
import { OneSignal } from '@ionic-native/onesignal';
import { CleverTap } from '@ionic-native/clevertap';
import { NetworkCheckProvider } from '../providers/network_check/network_check';
import { InappProvider } from '../providers/inapp/inapp';
import { AppVersion } from '@ionic-native/app-version';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { VideosharesocialProvider } from '../providers/videosharesocial/videosharesocial';
import { AppRate } from '@ionic-native/app-rate';


import { ColorsPopoverPage } from '../pages/colors-popover/colors-popover';
import { WidthPopoverPage } from '../pages/width-popover/width-popover';
import { BrushTypePopoverPage } from '../pages/brush-type-popover/brush-type-popover';

import { SpeechRecognition } from '@ionic-native/speech-recognition';

import { CallNumber } from '@ionic-native/call-number';

import { RadientSettingsProvider } from '../providers/radient-settings/radient-settings';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { SQLitePorter } from '@ionic-native/sqlite-porter';


@NgModule({
  declarations: [MyApp,ColorsPopoverPage,WidthPopoverPage,BrushTypePopoverPage],
  imports: [
    IonicSelectableModule,
    //NgxQRCodeModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {tabsHideOnSubPages: true, platforms: {
        ios: {
            backButtonText: '',
            pageTransition: 'md-transition',
        }
    },}),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp,ColorsPopoverPage,WidthPopoverPage,BrushTypePopoverPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    StatusBar, SplashScreen,
    ToastService, LoadingService,
    SQLite,InappProvider,
    HttpService, HTTP,
    InAppBrowser,
    Network,
    Device,
    FileTransfer, 
    FileTransferObject,
    File, 
    SocialSharing,
    OneSignal,
    CleverTap,
    ScreenOrientation,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CountryandrolelistProvider,Facebook,GooglePlus,
    DatabaseProvider,
    NetworkCheckProvider,
    InAppPurchase,
    AppVersion,
    //BarcodeScanner,
    Base64ToGallery,
    VideosharesocialProvider,
    AppRate,
    CallNumber,
    SQLitePorter,
    SpeechRecognition,
    RadientSettingsProvider, AndroidPermissions, QRScanner
    ]
})
export class AppModule {}