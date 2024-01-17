/**
 * Created by sanjeev on 2/2/2019.
 */
import { Http, Headers } from '@angular/http';
import { HTTP } from '@ionic-native/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import * as _ from 'underscore/underscore';
import { CleverTap } from '@ionic-native/clevertap';
import { AppRate } from '@ionic-native/app-rate';

export class HttpService {

  api: any;
  localapi: any;
  clevertapId: any;
  mailChimpAPIKey: any;
  doctorListsId: any;
  patientListsId: any;
  static get parameters() {
    return [[Http]];
  }

  constructor(public http:Http, public HttpClient: HttpClient, public http2: HTTP,private appRate: AppRate) {
    //this.api = 'https://apiv2.cardiovisual.com';
    
    // this.localapi = 'http://45.55.36.24:6001';
    this.localapi = 'https://apiv2.cardiovisual.com';
    //mailchimp data
    this.mailChimpAPIKey = '46a2e6e4c02b689490e871a2ba52476b';
    this.doctorListsId = "267d2650fc";
    this.patientListsId = "5ec63b9ecd";
  }

  getApi() {
    return this.localapi;
  }

  dtStr(){
    var date = new Date();
    return date;
  }

  clevertapDate(){
    var dtStr = new Date();
    var clevertapDate = ((dtStr.getDate() < 10) ? "0"+dtStr.getDate() : dtStr.getDate()) +"/"+ (((dtStr.getMonth() + 1) < 10) ? "0"+(dtStr.getMonth() + 1) : (dtStr.getMonth() + 1)) +"/"+dtStr.getFullYear();
    return clevertapDate;
  }

  getTimeInMilliSeconds(){
    var currentTimeInMilliSeconds = new Date().getTime();
    return currentTimeInMilliSeconds;
  }
  getIntroScreen(){
    //var response = this.http.get(this.onboardingApiURL).map(res => res.json());
    var response = this.http.get(this.localapi+"/api/TestCardioSplashes?filter[where][isOnboarding]=1&filter[where][and][1][active]=1&filter[order]=position DESC").map(res => res.json());
    return response;
  }

  checkEmailExists(email:string){
    var checkEmailresponse = this.http.get(this.localapi+"/api/CardiovisualUsers?filter[where][email]="+email).map(res => res.json());
    return checkEmailresponse;
  }

  appleUserIDExists(userID:string){
    var checkEmailresponse = this.http.get(this.localapi+"/api/CardiovisualUsers?filter[where][facebookId]="+userID).map(res => res.json());
    return checkEmailresponse;
  }

  sendData(email:string) {
    var url = "http://facebook.us14.list-manage.com/subscribe/post-json?u=2c0f7baa8dc004a62ff3922e3&id=456928d791&EMAIL="+encodeURI(email)+"&b_2c0f7baa8dc004a62ff3922e3_456928d791";
    var response = this.http.get(url).map(res => res.json());
    return response;
  }                                                
  
  getPoweredByData(userType:string){
    //alert('userType-->'+userType);
    var cur_date = new Date();
    var poweredByData = this.http.get(this.localapi+"/api/TestCardioSplashes?filter[where][isPoweredBy]=1&filter[where][and][1][active]=1&filter[where][and][0][active_till][gt]="+cur_date.toISOString()+"&filter[where][and][1][active_from][lt]="+cur_date.toISOString()+"&filter[order]=position DESC").map(res => res.json());
    return poweredByData;
  }

  getTopicsAPIData(){
    var topicData = this.http.get(this.localapi+"/api/newTopics?filter[where][isActive]=1&filter[order]=position").map(res => res.json());
    return topicData;
  }

  getSponsorSplashes(){
    var cur_date = new Date();
    var sponsorSplashes = this.http.get(this.localapi+"/api/TestCardioSplashes?filter[where][isSponsor]=1&filter[where][and][1][active]=1&filter[where][and][0][active_till][gt]="+cur_date.toISOString()+"&filter[where][and][1][active_from][lt]="+cur_date.toISOString()+"&filter[order]=position DESC").map(res => res.json());

    return sponsorSplashes;
  }

  getRegisteredDeviceCount(userID){
    var getDeviceCount = this.http.get(this.localapi+"/api/devices?filter[where][user_id]="+userID+"&filter[where][status]=1").map(res => res.json());
    return getDeviceCount;
  }

  getAppDetails(platform){
    var appDetails = this.http.get(this.localapi+"/api/AppDetails?filter[where][platform]="+platform).map(res => res.json());
    return appDetails;
  }

  getPlaylists(){
    var playlist = this.http.get(this.localapi+"/api/playlists").map(res => res.json());
    return playlist;
  }

  getNewCategory() {
    var newCategory = this.http.get(this.localapi+"/api/newcategories?filter[order]=position Desc").map(res => res.json());
    return newCategory;
  }

  getSubtopicDatas(type_user) {

    if(type_user == "patient"){
          var url = this.localapi+"/api/subtopics?filter[where][isActive]=1&filter[where][or][0][isPatientDownloadable]=1&filter[where][or][1][isPatientStreamed]=1";
      }else{
          var url = this.localapi+"/api/subtopics?filter[where][isActive]=1&filter[where][or][0][isDownloadable]=1&filter[where][or][1][isStreamed]=1";
     } 
    var subtopicData = this.http.get(url).map(res => res.json());
    return subtopicData;

  }

  getFavoritesDatas(liveId) {

    //var url = this.localapi+"/api/favorites?filter[where][cardiovisualUserId]="+liveId;
    var url = this.localapi+"/api/favorites?filter[where][cardiovisualUserId]="+liveId+"&filter[where][type]=subtopic"; 
    var favoritesData = this.http.get(url).map(res => res.json());
    return favoritesData;
  }

  getDeviceDatas(deviceData) {
    var url = this.localapi+"/api/devices?filter[where][userId]="+deviceData.userId+"&filter[where][deviceToken]="+deviceData.deviceToken; 
    var deviceDatas = this.http.get(url).map(res => res.json());
    return deviceDatas;
  }

  //return post url

  getPosturl(table) {
    return this.localapi+'/api/'+table;
  }

  getFavoriteswithsubtopicid(liveId, subtopicId) {

    //var url = this.localapi+"/api/favorites?filter[where][cardiovisualUserId]="+liveId+"&filter[where][subtopicId]="+subtopicId;
    var url = this.localapi+"/api/favorites?filter[where][cardiovisualUserId]="+liveId+"&filter[where][subtopicId]="+subtopicId+"&filter[where][type]=subtopic";
    var favoritesData = this.http.get(url).map(res => res.json());
    return favoritesData;
  }

  getUserInfoByLiveId(liveId){
    var url = this.localapi+"/api/CardiovisualUsers/" + liveId;
    var userData = this.http.get(url).map(res => res.json());
    return userData;
  }

  userAuthenticaton(condition:any){
    //var url = this.localapi+"/api/CardiovisualUsers?filter[where][email]="+condition.username+"&filter[where][password]="+condition.password+"&filter[where][verified]=1";
    var url = this.localapi+"/api/CardiovisualUsers?filter[where][email]="+condition.username+"&filter[where][verified]=1";
    var authentication = this.http.get(url).map(res => res.json());
    return authentication;
  }

  getSubTopicsAPIData(type_user){
    if(type_user == "patient"){
     var url = this.localapi+"/api/SubTopics?filter[where][isActive]=1&filter[where][or][0][isPatientDownloadable]=1&filter[where][or][1][isPatientStreamed]=1";
    }else{
     var url = this.localapi+"/api/SubTopics?filter[where][isActive]=1&filter[where][or][0][isDownloadable]=1&filter[where][or][1][isStreamed]=1";
    }
    var subTopicsApiResult = this.http.get(url).map(res => res.json());
    return subTopicsApiResult;
  }

  getnewtopics(){
    // alert('jjjj');
    var url = this.localapi+"/api/newTopics?filter[where][isActive]=1&filter[order]=position";
    var newtopics = this.http.get(url).map(res => res.json());
    return newtopics;
  }

  getParticularSubTopicIdAPIData(idVideo){
    var url = this.localapi+"/api/SubTopics?filter[where][id]="+idVideo;
    var subtopics = this.http.get(url).map(res => res.json());
    return subtopics;
  }

  getCleverTapID(){
    // this.clevertap.profileGetCleverTapID().then((id) => {
    //   this.clevertapId = id;
    //   console.log("CleverTapID: " + id);
    //   return this.clevertapId;
    // });
  }

  getSingleInformationVideo(vdId){
    var url = this.localapi+"/api/information?filter[where][id]="+vdId;
    var infrmationData = this.http.get(url).map(res => res.json());
    return infrmationData;
  }

  getUserPurchasedDataFromApi(liveId){
    var url = this.localapi+"/api/orderhistories?filter[where][cardiovisualUserId]="+liveId+"&&filter[order]=id desc";
    var getUserPurchasedData = this.http.get(url).map(res => res.json());
    return getUserPurchasedData;
  }



  getDiscussData(){
    var url = "https://qnatest.cardiovisual.com/api/discussions?filter[q]=tag:treatment";
    //alert(url);
    //var url = "https://discuss.flarum.org/api/discussions?filter[q]=tag:dev";
    //var response = this.http.get(url).map(res => res.json());
    let headers = new Headers();
    //headers.append('Access-Control-Allow-Origin' , 'http://localhost:8100');
    // headers.append('Access-Control-Allow-Methods', 'POST, GET');
    headers.append('content-type','application/json');
    headers.append('Accept','application/json');

    /*this.http.get(url, {headers: headers})
     .subscribe(res => {
       resolve(res.json());
     }, (err) => {
       reject(err);
       console.log('err-->'+err);
     });*/

    //alert(JSON.stringify(response));
    //return response;
  }


  
  postData(credentials, type) {
   let apiUrl = 'https://cshipapp.oneleap.in/graphql/';

   return new Promise((resolve, reject) => {
     let headers = new Headers();
          //headers.append('Access-Control-Allow-Origin' , 'http://localhost:8100');
         // headers.append('Access-Control-Allow-Methods', 'POST, GET');
         headers.append('Accept','application/json');
         headers.append('content-type','application/json');

     this.http.post(apiUrl, JSON.stringify(credentials), {headers: headers})
       .subscribe(res => {
         resolve(res.json());
       }, (err) => {
         reject(err);
       });
   });
  }
  
 getData() {
   let apiUrl = 'https://qnatest.cardiovisual.com/api/discussions?filter[q]=tag:treatment';

   return new Promise((resolve, reject) => {
     let headers = new Headers();
          //headers.append('Access-Control-Allow-Origin' , 'http://localhost:8100');
         // headers.append('Access-Control-Allow-Methods', 'POST, GET');
         headers.append('Accept','application/json');
         headers.append('content-type','application/json');

     this.http.get(apiUrl,{headers: headers})
       .subscribe(res => {
         resolve(res.json());
       }, (err) => {
         reject(err);
       });
   });
 }

 signUpToMailChimp(user_data){
   //alert('chimp '+JSON.stringify(user_data));

    var name_arr = (user_data.fullname != '') ? user_data.fullname.split(" ") : [];
    //alert('name arr = '+name_arr);
    var listId = (user_data.userRoleId == "1") ? this.doctorListsId : this.patientListsId;
    /*var data_bb = {
      "email_address" : user_data.email,
      "merge_fields" : {
        "FNAME" : (_.size(name_arr) > 0 ) ? name_arr[0] : "",
        "LNAME" : (_.size(name_arr) > 0 ) ? name_arr[1] : ""
      },
      "status" : "subscribed"
    };*/

    /*var data_bb = {
      "email_address" : 'chavanabhi87@gmail.com',
      "merge_fields" : {
        "FNAME" : "Abhi",
        "LNAME" : "Chavan"
      },
      "status" : "subscribed"
    };*/
    var data_bb = '{"email_address":"vidyanc@rediffmail.com", "merge_fields":{"FNAME":"Abhi", "LNAME":"Chavan"}, "status":"subscribed"}';

    //var url = "https://us13.api.mailchimp.com/3.0/lists/"+listId+"/members";
    var url = 'https://us13.api.mailchimp.com/3.0/lists/267d2650fc/members';

    //alert('hello url '+url);
    return new Promise((resolve, reject) => {
     let headers = new Headers();
     headers.append('Authorization','apikey 46a2e6e4c02b689490e871a2ba52476b-us13');//+this.mailChimpAPIKey+'-us13');
     headers.append('content-type','application/json');
     headers.append('Accept','application/json');
     headers.append('X-HTTP-Method-Override','POST');
     
     this.http.post(url, data_bb, {headers: headers}).subscribe(res => {
         resolve(res.json());
       }, (err) => {
         reject(err);
       });
    });

 }

 checkUsernameExists(username:string){
    var checkUsernameresponse = this.http.get(this.localapi+"/api/CardiovisualUsers?filter[where][username]="+username).map(res => res.json());
    return checkUsernameresponse;
 }

 getDownloadsDatas(liveId) {

    var url = this.localapi+"/api/downloads?filter[where][cardiovisualUserId]="+liveId;
      
    var downloadsData = this.http.get(url).map(res => res.json());
    return downloadsData;
 }



 cmpVersion(version_from_api, version_from_config) {
    var a = version_from_api;
    var b = version_from_config;
    var i, cmp, len, re = /(\.0)+[^\.]*$/;
     a = (a + '').replace(re, '').split('.');
     b = (b + '').replace(re, '').split('.');
     len = Math.min(a.length, b.length);
     for( i = 0; i < len; i++ ) {
         cmp = parseInt(a[i], 10) - parseInt(b[i], 10);
         if( cmp !== 0 ) {
             return cmp;
         }
      }
      return a.length - b.length;
  }

  getDoewnloadApiDataforUSers(userid, subtopicid){
    var url = this.localapi+'/api/downloads?filter[where][cardiovisualUserId]='+userid+'&filter[where][subtopicId]='+subtopicid;
    var download_data = this.http.get(url).map(res => res.json());
    return download_data;
  }

  checkEmailExistsInCMS(email) {
   // alert('http');
    var url = this.localapi+"/api/CardiovisualUsers?filter[where][email]=" + email;
    var user_data = this.http.get(url).map(res => res.json());
    return user_data;
  }

  getVerificationCode(email){

    //alert('http email '+email);
    var url = this.localapi + "/getCode?email="+email;
    //alert('url'+ url);
    var verfication_code = this.http.get(url).map(res => res.json());
    return verfication_code;
  }


  updatePasswordtoApi(url, data){
    this.http.put(url, data).subscribe(res => {
      //alert('database update '+JSON.stringify(res));
      //resolve(res.json());
    }, (err) => {
      //alert('update password err '+JSON.stringify(err));
      //reject(err);
      //console.log('err-->'+err);
    });
  }

  getnewSplashes(){
    var cur_date = new Date();

    var url = this.localapi +'/api/testcardiosplashes?filter[where][isSponsor]=1&filter[where][and][1][active]=1&filter[where][and][0][active_till][gt]='+cur_date.toISOString()+'&filter[where][and][1][active_from][lt]='+cur_date.toISOString()+'&filter[order]=position DESC';

    var splashData = this.http.get(url).map(res => res.json());
    return splashData;
  }

  showRateDialogueBox(){
    this.appRate.preferences = {
      simpleMode : true,
      inAppReview: true,
      storeAppURL: {
        ios: 'com.cardio-visual.Cardio-Visual-Lite',
        android: 'market://details?id=com.cardiovisual.app'
      },
      customLocale: {
        title: "Rate us!",
        message: "Thanks for using CardioVisual. Would you mind spending a momemt to rate us on the app store?",
        cancelButtonLabel: "No, Thanks",
        laterButtonLabel: "Remind Me Later",
        rateButtonLabel: "Rate It Now"
      },
      callbacks: {
        onRateDialogShow: function(callback){
          callback(1) // cause immediate click on 'Rate Now' button
        },
        onButtonClicked: function(buttonIndex){
          //console.log("onButtonClicked -> " + buttonIndex);
        }
      }
    };

    document.addEventListener('deviceready', function () {
        this.appRate.promptForRating(true);
    },false);    
  }

  getLikesData(liveId){
    var likeUrl = this.localapi+"/api/likes?filter[where][cardiovisualUserId]="+liveId;
    var likesapiData = this.http.get(likeUrl).map(likeres => likeres.json());
    return likesapiData;
  }

  getLikesWithsubtopicidAndliveId(liveId, subtopicId) {

    var url = this.localapi+"/api/likes?filter[where][cardiovisualUserId]="+liveId+"&filter[where][subtopicId]="+subtopicId;
    var getLikeData = this.http.get(url).map(res => res.json());
    return getLikeData;
  }

  /*information api*/
  getInformationData(type_user){
    if(type_user == "patient"){
      var url = this.localapi+"/api/information?filter[where][isActive]=1&filter[where][or][0][isPatientDownloadable]=1&filter[where][or][1][isPatientStreamed]=1";
    }else{
      var url = this.localapi+"/api/information?filter[where][isActive]=1&filter[where][or][0][isDownloadable]=1&filter[where][or][1][isStreamed]=1";
    } 
    var informationData = this.http.get(url).map(res => res.json());
    return informationData;
  }

  getInformationFavoritesDatas(liveId){
    //var url = this.localapi+"/api/favorites?filter[where][cardiovisualUserId]="+liveId;
    var url = this.localapi+"/api/favorites?filter[where][cardiovisualUserId]="+liveId+"&filter[where][type]=information";    
    var favoritesData = this.http.get(url).map(res => res.json());
    return favoritesData;
  }

  getInformationDownloadsDatas(liveId){
    var url = this.localapi+"/api/downloads?filter[where][cardiovisualUserId]="+liveId;      
    var info_downloadsData = this.http.get(url).map(res => res.json());
    return info_downloadsData;
  }

  getInfoDownloadApiDataforUsers(userid, infoid){
    var url = this.localapi+'/api/downloads?filter[where][cardiovisualUserId]='+userid+'&filter[where][informationId]='+infoid;
    var download_data = this.http.get(url).map(res => res.json());
    return download_data;
  }
  /*information api end*/

  /*channels api */
  getChannelsData(type_user){
    var channels_url = this.localapi+"/api/channels?filter[where][active]=1&filter[order]=position asc";
    var channels_Data = this.http.get(channels_url).map(res => res.json());
     return channels_Data;
  }
  getFavoriteswithinformationId(liveId, infoId) {
    //var url = this.localapi+"/api/favorites?filter[where][cardiovisualUserId]="+liveId+"&filter[where][informationId]="+infoId;
    var url = this.localapi+"/api/favorites?filter[where][cardiovisualUserId]="+liveId+"&filter[where][subtopicId]="+infoId+"&filter[where][type]=information";
    var favoritesData = this.http.get(url).map(res => res.json());
    return favoritesData;
  }
  /*channels api end*/

   /* playlist favorites*/
  getFavoriteswithPlaylistId(liveId, playlist_id) {
    var url = this.localapi+"/api/favorites?filter[where][cardiovisualUserId]="+liveId+"&filter[where][subtopicId]="+playlist_id+"&filter[where][type]=playlist";
    var favoritesData = this.http.get(url).map(res => res.json());
    return favoritesData;
  }

  getPlaylistFavoritesData(liveId){
    var url = this.localapi+"/api/favorites?filter[where][cardiovisualUserId]="+liveId+"&filter[where][type]=playlist";     
    var PlaylistFavoritesData = this.http.get(url).map(res => res.json());
    return PlaylistFavoritesData;
  }

    /* customlisting api data*/
  getCustomListingData(){
    var url = this.localapi+"/api/CustomListings";
    var CustomListingsData = this.http.get(url).map(res => res.json());
    return CustomListingsData;
  }

  /* custom video json api data*/
  getCutomVideoJsonData(){
    var url = this.localapi+"/api/CustomVideoJsons";
    var CutomVideoJsonData = this.http.get(url).map(res => res.json());
    return CutomVideoJsonData;
  }


  /* get sponsored by data from api */
  getSponsoredByDataApi(){
    var cur_date = new Date();
    var url = this.localapi+"/api/testcardiosplashes?filter[where][sponsoredBy]=1&filter[where][and][0][activeTill][gt]="+cur_date.toISOString()+"&filter[where][and][1][activeFrom][lt]="+cur_date.toISOString()+"&filter[where][and][2][active]=1&filter[order]=position DESC";
    var SponsoredbyData = this.http.get(url).map(res => res.json());
    return SponsoredbyData;
  }

  /*get tweets*/
  getTweets(){
    var url = this.localapi+"/api/Tweets?filter[where][isActive]=1&filter[limit]=35";
    var tweetsData = this.http.get(url).map(res => res.json());
    return tweetsData;
  }

  /*get whatsnew screen data*/
  getWhatsnewData(){
    var cur_date = new Date();
    // var url = this.localapi+"/api/whatsnews?filter[where][isActive]=1&filter[where][and][0][activeTill][gt]="+cur_date.toISOString()+"&filter[where][and][1][activeFrom][lt]="+cur_date.toISOString()+"";    
    var url = this.localapi+"/api/whatsnews?filter[where][isActive]=1&filter[where][and][1][activeFrom][lt]="+cur_date.toISOString()+"";    
    var whatsnewData = this.http.get(url).map(res => res.json());
    return whatsnewData;
  }

  /*get wordpress blog data*/
  getBlogs(){
    var url = this.localapi+"/api/blogs?filter[where][isActive]=1&filter[limit]=35";
    var blogsData = this.http.get(url).map(res => res.json());
    return blogsData;
  }

  getForum(){
    var cur_date = new Date();
    var url = this.localapi+"/api/discussions?filter[where][isActive]=1&filter[where][and][0][active_till][gt]="+cur_date.toISOString()+"&filter[where][and][1][active_from][lt]="+cur_date.toISOString()+"&filter[order]=position DESC &filter[limit]=50";
    var forumData = this.http.get(url).map(res => res.json());
    return forumData;
  }

  updateLastActiveUser(liveId){

    this.http.put(this.localapi+"/api/CardiovisualUsers/"+liveId,
    {
      "lastActive" : new Date().toISOString()       
    }).subscribe(lastActiveSuccess => {
      //alert('lastActiveSuccess-->'+JSON.stringify(lastActiveSuccess));
      //alert('lastActiveSuccess text-->'+lastActiveSuccess.text());
    }, lastActiveError => {
      //alert('lastActiveError---->'+ JSON.stringify(lastActiveError));
      //alert('lastActiveError---->'+lastActiveError.text());
    });
  }
  
  /*tag related discussion*/
  getTagRelatedDiscussion(tag){
    var url = this.localapi+ "/api/discussions?filter[where][tags][like]=%"+tag+"%";
    var channels_Data = this.http.get(url).map(res => res.json());
    return channels_Data;
  }


  getWhatsnewSectionTitleData(){
    var url = this.localapi+"/api/labels/?filter[where][screen]=whatsnew&filter[where][isActive]=1";
    var whatnewData = this.http.get(url).map(res => res.json());
    return whatnewData;
  }



  forallPageAction(name){
    //alert("tagbasicallPageAction");
    //http://45.55.36.24:6001/api/customlistings/?filter[where][name]=allPageAction&filter[where][type]=Triggers
    var url = this.localapi+"/api/CustomListings/?filter[where][name]="+name+"&filter[where][type]=Triggers";
    var idbasicJsonData = this.http.get(url).map(res => res.json());
    return idbasicJsonData;

  }

  foParticularPageAction(pagename){
    var url = this.localapi+"/api/CustomListings/?filter[where][name]="+pagename+"&filter[where][type]=Triggers";
    var particularPageJsonData = this.http.get(url).map(pageJsonData => pageJsonData.json());
    return particularPageJsonData;
  }


  idbasicSpecifictagAction(){

  }


  forAppPageAndTagAction(actionparams){

    //http://45.55.36.24:6001/api/customlistings/?filter[where][name]=allPageAction&filter[where][type]=Triggers
    //http://45.55.36.24:6001/api/customlistings/?filter[where][name]=DashboardPage&filter[where][type]=Triggers
    //http://45.55.36.24:6001/api/customlistings/?filter[where][name]=CAD&filter[where][type]=Triggers
    //alert('actionparams-->'+actionparams);

    var url = this.localapi+"/api/CustomListings/?filter[where][name]="+actionparams+"&filter[where][type]=Triggers";
    var appPageAndTagActionJsonData = this.http.get(url).map(forJsonData => forJsonData.json());
    return appPageAndTagActionJsonData;
  }



  inserrUpdateVideoView(videoID,videoTAG,userID){
   // alert('videoID-->'+videoID+' videoTAG-->'+videoTAG+ ' userID-->'+userID);
    localStorage.setItem('myViewCount', '');
    var myurl = this.localapi+"/api/VideoViews/?filter[where][cardiovisualUserID]="+userID+"&filter[where][videoTag]="+videoTAG;
    this.http.get(myurl).map(videoViewsSuccess => videoViewsSuccess.json()).subscribe(videoViewSuccessdata => {
      if (videoViewSuccessdata.length > 0) {
        var videoViewID = videoViewSuccessdata[0].id;
        var newViewCount = videoViewSuccessdata[0].videoViewCount + 1;
        this.http.put(this.localapi+"/api/VideoViews/"+videoViewID,
        {
          "id":videoViewSuccessdata[0].id,
          "cardiovisualUserID":videoViewSuccessdata[0].cardiovisualUserID,
          "videoID":0,
          "videoTag":videoViewSuccessdata[0].videoTag,
          "videoViewCount":newViewCount, 
          "updatedAt": new Date().toISOString()   
        }).subscribe(videoViewUpdateSuccess => {
          var response = JSON.parse(videoViewUpdateSuccess['_body']);
          localStorage.setItem('myViewCount', response.videoViewCount);
        }, videoViewUpdateError => {
          //console.log(videoViewUpdateError.text());
        });
      }else{
        this.http.post(this.localapi+"/api/VideoViews", {"id": 0,"cardiovisualUserID" : userID, "videoID" : 0,"videoTag": videoTAG,"videoViewCount":1}).subscribe(insertVideoViewsdata => {
          var insertresponse = JSON.parse(insertVideoViewsdata['_body']);
        }, insertVideoViewsErr => {
          var insertVideoViews = JSON.parse(insertVideoViewsErr['_body']);
        });
      }
    }, countSuccessdataerr => {
      //console.log(' countSuccessdataerr->'+JSON.stringify(countSuccessdataerr));
    });  

  }

  updateVideoViewCount(videoTAG,userID){
    var myurl = this.localapi+"/api/VideoViews/?filter[where][cardiovisualUserID]="+userID+"&filter[where][videoTag]="+videoTAG;
    this.http.get(myurl).map(videoViewsSuccess => videoViewsSuccess.json()).subscribe(videoViewSuccessdata => {
      if (videoViewSuccessdata.length > 0) {
        var videoViewID = videoViewSuccessdata[0].id;
        this.http.put(this.localapi+"/api/VideoViews/"+videoViewID,
        {
          "id":videoViewSuccessdata[0].id,
          "cardiovisualUserID":videoViewSuccessdata[0].cardiovisualUserID,
          "videoID":0,
          "videoTag":videoViewSuccessdata[0].videoTag,
          "videoViewCount":0, 
          "updatedAt": new Date().toISOString()   
        }).subscribe(videoViewUpdateSuccess => {
          var response = JSON.parse(videoViewUpdateSuccess['_body']);
          localStorage.setItem('myViewCount', response.videoViewCount);
        }, videoViewUpdateError => {

        });
      }
    }, videoViewdataerr => {

    });  
  }


  allVideoViewsbyuser(userID){
    var myurl = this.localapi+"/api/VideoViews/?filter[where][cardiovisualUserID]="+userID;
    var allVideoViewsJsonData = this.http.get(myurl).map(videoViewsbyuser => videoViewsbyuser.json());
    return allVideoViewsJsonData;
  }

  getCustomPlaylistData(user_id){
    var url = this.localapi+"/api/userplaylists/?filter[where][userId]="+user_id;
    var custom_playlist_Data = this.http.get(url).map(res => res.json());
    return custom_playlist_Data;
  }

  getUserdataByReferralcode(referral_code){
    var url = this.localapi+"/api/CardiovisualUsers?filter[where][referral_code]="+referral_code;
    var userJsonData = this.http.get(url).map(user_data => user_data.json());
    return userJsonData;
  }


  getSingleSubtopic(user_type, subtopic_id){

    if(user_type == "patient"){
      var url = this.localapi+"/api/subtopics/"+subtopic_id;
    }else{
      var url = this.localapi+"/api/subtopics/"+subtopic_id;
    }

    var subtopicdata = this.http.get(url).map(res => res.json());
    return subtopicdata;
  }

  getSingleInformation(user_type, info_id){
    
    if(user_type == "patient"){
      var url = this.localapi+"/api/information/"+info_id;
    }else{
      var url = this.localapi+"/api/information/"+info_id;
    }

    var infodata = this.http.get(url).map(res => res.json());
    return infodata;
  }

  checkReferralCode(referral_code){
    var url = this.localapi+"/api/CardiovisualUsers?filter[where][referral_code]="+referral_code;
    var referral_code_data = this.http.get(url).map(res => res.json());
    return referral_code_data;
  }

  message_Seen(id){
    this.http.put(this.localapi+"/api/inAppNotifications/"+id,
    {
      "messageSeen" : 1       
    }).subscribe(msgSeendata => {
      var insertresponse = JSON.parse(msgSeendata['_body']);
      //alert('insertresponse--->'+JSON.stringify(insertresponse));
    }, msgSeendataErr => {
      var insertVideoViews = JSON.parse(msgSeendataErr['_body']);
      //alert('insert error--->'+JSON.stringify(insertVideoViews));
    });
  }

  inAppNotification(){
    let cur_date = new Date();
    let inAppurl = this.localapi+"/api/inAppNotifications?filter[where][isActive]=1&filter[where][and][0][active_till][gt]="+cur_date.toISOString()+"&filter[where][and][1][active_from][lt]="+cur_date.toISOString()+"&filter[order]=position DESC";
    var inAppData = this.http.get(inAppurl).map(res => res.json());

    return inAppData;
  }

  newNotificationSync(id){
    let cur_date = new Date();
    let inAppurl = this.localapi+"/api/inAppNotifications?filter[where][isActive]=1&filter[where][and][0][active_till][gt]="+cur_date.toISOString()+"&filter[where][and][1][active_from][lt]="+cur_date.toISOString()+"&filter[order]=position DESC &filter[limit]=20&filter[where][and][0][id][gt]="+id;

    var inAppData = this.http.get(inAppurl).map(res => res.json());

    return inAppData;
  }

  fetchDataFromapi(url){
    var apiData = this.http.get(url).map(res => res.json());
    return apiData;
  }
}

 
