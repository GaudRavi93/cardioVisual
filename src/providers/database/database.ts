import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import * as _ from 'underscore/underscore';
import { Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite'; 
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';
import { HttpService } from '../../services/HttpService';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { Device } from '@ionic-native/device';
import { FileTransfer,  FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { NetworkCheckProvider } from '../network_check/network_check';
import { SQLitePorter } from '@ionic-native/sqlite-porter';


/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

	public db: SQLiteObject;
	private databaseReady: BehaviorSubject<boolean>;	
	type: any = {};
	b64_table:string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	encrypt_key:string = "CaRdiOvIsUalOne2Three4";
	localapi:string;
	online: boolean = true; 
	http_object: HttpClient;
	storage_object: Storage;
	sqlite_object: SQLite;
	platform_object: Platform;
	http_service_object: HttpService;
	device_object: Device;
	private fileTransfer: FileTransferObject;
	file_object: File;
	file_transfer_object: FileTransfer;
	network_check_object: NetworkCheckProvider;

  constructor(public injector: Injector, public sqlitePorter: SQLitePorter ){
 		
 		this.http_object = injector.get<HttpClient>(HttpClient);
 		this.storage_object = injector.get<Storage>(Storage);
 		this.sqlite_object = injector.get<SQLite>(SQLite);
 		this.platform_object = injector.get<Platform>(Platform);
 		this.http_service_object = injector.get<HttpService>(HttpService);
 		this.device_object = injector.get<Device>(Device);
 		this.file_object = injector.get<File>(File);
 		this.file_transfer_object = injector.get<FileTransfer>(FileTransfer);
 		this.network_check_object = injector.get<NetworkCheckProvider>(NetworkCheckProvider);

		this.localapi = this.http_service_object.getApi();
		this.databaseReady = new BehaviorSubject(false);
		this.platform_object.ready().then(() => {
			var isAndroid = this.platform_object.is('android');
			if (isAndroid) {
				this.sqlite_object.create({
					name: 'cardioDB.db',
					location: 'default'
				})
				.then((db: SQLiteObject) => {
					this.db = db;
				});								
			} else {
				//alert('ios');
				this.sqlite_object.create({
					name: 'cardioDB.db',
					iosDatabaseLocation : 'Library'
				})
				.then((db: SQLiteObject) => {
					this.db = db;
				});				
			}
		});
 	} 

	openDatabase(){
		return new Promise((resolve,reject) => {
			let name = "cardioDB.db";
			let sqlite_db = new SQLite();
			var isAndroid = this.platform_object.is('android');
			
			if (isAndroid) {
				sqlite_db.create({
					name: name,
					location: 'default'
				}).then((db: SQLiteObject) => {
					this.db = db;
					resolve(db);
				}, (err) => {
					reject(err);
				});								
			}else {
				//alert('openDatabase ios');
				sqlite_db.create({
					name: name,
					iosDatabaseLocation : 'Library'
				}).then((db: SQLiteObject) => {
					this.db = db;
					resolve(db);
				}, (err) => {
					reject(err);
				});				
			}
		});
	}

	fetchAllData(table, array_values:string[]){
		var query = "Select * FROM "+ table +"  "+ array_values +" "; 
		return this.db.executeSql(query, []).then((data) => { 
			const out = [];
			for(let i = 0; i < data.rows.length; i++) {
			out.push(data.rows.item(i)); 
			}
			return out;
		}, err => {
			return [];
		});
	}

	updateRecord(tblName, columns, values){ 

		let query = "UPDATE " + tblName + " SET ";
		for(let col of columns){
			query += col + "=?,";
		}
		query = query.substr(0, query.length - 1);
		query += " WHERE id = ?;";

		return this.db.executeSql(query, values).then((data) => {  
			return data;
		}, err => {
			return [];
		});
	}

	putLoginMedium(user_id){
	  
		var user_data =  {"medium" : 'app'};

		this.http_object.put(this.localapi+"/api/CardiovisualUsers/"+user_id, user_data).subscribe(data => {

		var columns = ['medium'];
		var values = ['app', user_id];
		this.updateRecord('new_user_info', columns, values);
		}, error => {
			//console.log('171 '+error);
		}); 
	}

	getOSSpecificUUID(user_id){
		return this.device_object.uuid;
	}

	deleteRecords(query){
		return this.db.executeSql(query, []).then((data) => {
			return data;
		}, err => {
			return [];
		});
	}

	insertPlaylistsAPIData( liveId) {
		this.http_service_object.getPlaylists().subscribe(data => {
			this.syncPlaylists(data, liveId);
		}, err => {
			//console.log(' playlist err->'+err);
		});  
	}

	syncPlaylists(pData, liveId){

		this.db.executeSql("DROP TABLE IF EXISTS playlists");
		
		var query = "INSERT INTO playlists (id, name, description, sub_topic_ids, topic_id, url, active, createdAt, updatedAt, shareUrl, position, is_paid, is_for, long_description, isFavourite) VALUES ";
		_.each(pData,function(data,index){
		query += '('+data.id+', "'+data.name+'", "'+data.description+'", "'+data.subTopicIds+'", "'+data.topic_id+'", "'+data.url+'", "'+data.active+'", "'+data.createdAt+'", "'+data.updatedAt+'", "'+data.shareUrl+'", '+data.position+', '+data.is_paid+', "'+data.isFor+'", "'+data.long_description+'",0),';
		});
		query = query.replace(/,\s*$/, ";");

		var playlists = 'CREATE TABLE IF NOT EXISTS playlists (id INTEGER PRIMARY KEY, name TEXT, description TEXT, sub_topic_ids TEXT, topic_id INTEGER, URL TEXT, active TEXT, createdAt TEXT, updatedAt TEXT, shareUrl TEXT, position INTEGER, is_paid INTEGER, is_for TEXT, long_description TEXT, isFavourite INTEGER)';

		this.db.executeSql(playlists); 
		this.db.executeSql(query, []).then((data) => {

		this.getPlaylistFavorites(liveId);

			return data;
		}, err => {
			return [];
		});
	}

	getPlaylistFavorites(liveId){
		this.http_service_object.getPlaylistFavoritesData(liveId).subscribe(data => {
			this.syncPlaylistFavorites(data);
		}, err => {
		  //console.log('err->'+err);
		});  
	}

	syncPlaylistFavorites(pData){
		var updated_id = '';
		for(let i=0;i<pData.length; i++){
		    if(updated_id == ''){
		      updated_id = pData[i]['subtopicId'];
		    }else{
		      updated_id = updated_id+','+pData[i]['subtopicId'];
		    }
		}
		if(updated_id != ''){
		  var query = "UPDATE playlists SET isFavourite=1 WHERE id IN ("+updated_id+")";

		  	return this.db.executeSql(query, []).then((data) => {  
		   	 return data;
		    }, err => {
		      return [];
		    });
		}
	}

	//mark favorites to playlist 
	setPlaylistFavorites(liveId, playlist_id){

		var post_url = this.http_service_object.getPosturl('favorites');

		this.http_service_object.getFavoriteswithPlaylistId(liveId, playlist_id).subscribe(data => {

			var favorite_data = data;
			if(favorite_data.length > 0){
				this.http_object.delete(post_url+'/'+favorite_data[0].id).subscribe(
					resp => {this.updateRecord('playlists', ['isFavourite'], ['0', playlist_id]); },
					error => console.log('Error---->123.'+JSON.stringify(error))
				);
			}else{
				this.http_object.post(post_url, {"cardiovisualUserId" : liveId, "subtopicId" : playlist_id, "type":"playlist"}).subscribe(data => {
					this.updateRecord('playlists', ['isFavourite'], ['1', playlist_id]);
				}, error => {
					//console.log('Error---->321.'+JSON.stringify(error))
				});
			}
		}, err => {
			//console.log('Err---->1234.'+JSON.stringify(err))
		});
	}


	getCategoriesAPIData(type_user) {
		this.http_service_object.getNewCategory().subscribe(data => {
			return this.bulkInsertCategories(data, type_user);
		}, err => {
			//alert(err);
		});   
	}

    bulkInsertCategories(apiData, type_user) {
//      var _json_stringify = JSON.stringify;
//         JSON.stringify = function(value) {
//             var _array_tojson = Array.prototype.toJSON;
//             delete Array.prototype.toJSON;
//             var r=_json_stringify(value);
//             Array.prototype.toJSON = _array_tojson;
//             return r;
//         };
        //var prejson = '{"data":{"inserts":{"new_category":';

        var apiDataStr = JSON.stringify(apiData);
        if(type_user == "doctor"){
            var apiDataStr = apiDataStr.replace(/"(p[^"]+)"\s*:\s*"([^"]+)",?/g, "");
        }else{
            var apiDataStr = apiDataStr.replace(/"([name^"]+)"\s*:\s*"([^"]+)",?/g, "");
            var apiDataStr = apiDataStr.replace(/"(p[^"]+)"\s*:",?/g, '"name":"');
        }
        var apiDataStr = apiDataStr.replace(/"(i[^"]+)"\s*:\s*"([^"]+)",?/g, "");
        var prejson = '{"structure":{"tables":{"new_category":"([id] INTEGER PRIMARY KEY, [name] TEXT NOT NULL, [hexcodeBase] TEXT, [hexcodeContrast] TEXT, [position] INTEGER, [createdAt] TEXT, [updatedAt] TEXT)"},"otherSQL":["CREATE UNIQUE INDEX category_id ON new_category(id)"]},"data":{"inserts":{"new_category":';
        var postjson = '}}}';
        var finaljson = prejson+apiDataStr+postjson;
        var ffinaljson = finaljson.replace(/\\/g, '');
        //alert(ffinaljson);
        //console.log(ffinaljson);

//         var successFn = function(count){
//             console.log("Successfully imported JSON to DB; equivalent to "+count+" SQL statements");
//         };
//         var errorFn = function(error){
//             console.log(JSON.stringify(error));
//         };
//         var progressFn = function(current, total){
//             console.log("Imported "+current+"/"+total+" statements");
//         };

        this.sqlitePorter.importJsonToDb(this.db, ffinaljson);
//         , {
//             successFn: successFn,
//             errorFn: errorFn,
//             progressFn: progressFn
//         });
    }

	getSubTopicsAPIData(type_user) {

		this.http_service_object.getSubtopicDatas(type_user).subscribe(data => {
			this.bulkInsertSubTopics(data, type_user);
		}, err => {
		  //console.log('err->'+err);
		}); 
	}

	getFavoritesAPIData( liveId ) {

		this.http_service_object.getFavoritesDatas(liveId).subscribe(data => {
			this.syncFavorites(data);

		}, err => {
		  //console.log('err->'+err);
		});  
	}

	syncFavorites(pData){
		var updated_id = '';
		for(let i=0;i<pData.length; i++){
		    if(updated_id == ''){
		      updated_id = pData[i]['subtopicId'];
		    }else{
		      updated_id = updated_id+','+pData[i]['subtopicId'];
		    }
		}
		if(updated_id != ''){
		  var query = "UPDATE subtopic_data SET isFavourite=1 WHERE id IN ("+updated_id+")";
		  var query2 = "UPDATE subtopic_data SET isFavourite=0 WHERE id NOT IN ("+updated_id+")";
		  this.db.executeSql(query2, []);

		  	return this.db.executeSql(query, []).then((data) => {  
		   	 return data;
		    }, err => {
		      //alert('Error: ' + err);
		      return [];
		    });  
		}
	}

	updateNewUserInfo(params) {
		var query = "UPDATE new_user_info SET email = '"+params.email+"', username = '"+params.username+"', user_type = '"+params.user_type+"', isPaid = "+params.isPaid+", userRoleId = "+params.userRoleId+", discoveryMethodId = "+params.discoveryMethodId+", liveId = "+params.liveId+", full_name = '"+params.fullname+"', password = '"+params.password+"', gender = '"+params.gender+"', profile_pic = '"+params.profilePic+"', medium = '"+params.medium+"', facebook_id = '"+params.facebookId+"', specialities= '"+params.specialities+"',user_role_sub_type = '"+params.userRoleSubType+"', verified = "+params.verified+", birthyear = '"+params.birthyear+"', location= '"+params.location+"',state='"+params.state+"', referral_code='"+params.referral_code+"', referred_by='"+params.referred_by+"', npi_number="+params.npi_number+", npi_id="+params.npi_id+"";
		return this.db.executeSql(query, []).then((data) => {  
			return data;
		}, err => {
		 return [];
		}); 
	}

	insertNewUserInfo(params) {
		
		var query = "INSERT INTO new_user_info (email, username, user_type, isPaid, userRoleId, discoveryMethodId, liveId, full_name, password, gender, profile_pic, medium, facebook_id, specialities, user_role_sub_type, verified, birthyear,location, state, referral_code, referred_by, npi_number, npi_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		var sql_params = [params.email, params.username, params.user_type, params.isPaid, params.userRoleId, params.discoveryMethodId, params.liveId, params.fullname, params.password, params.gender, params.profilePic, params.medium, params.facebookId, params.specialities ,params.userRoleSubType, params.verified, params.birthyear, params.location, params.state, params.referral_code, params.referred_by, params.npi_number, params.npi_id];

		return this.db.executeSql(query, sql_params).then((data) => {  
			return data;
		}, err => {
		 return [];
		});  
	}

	saveDeviceDataToApi(deviceData){
		this.http_service_object.getDeviceDatas(deviceData).subscribe(user_data => {

			var post_url = this.http_service_object.getPosturl('devices'); 

			if(user_data.length == 0){

				this.http_object.post(post_url, deviceData).subscribe(data => {
					//alert('after insert '+ JSON.stringify(data['_body']));
				}, error => {
					//console.log(error);
				});
			}else{

				var filteredData = _.where(user_data, {deviceToken: deviceData.deviceToken,userId:deviceData.userId});

				this.http_object.put(post_url+'/'+filteredData[0].id, deviceData).subscribe(data => {
					//alert('after insert '+ JSON.stringify(data['_body']));
				}, error => {
					//console.log(error);
				});
			}
		}, err => {
			//alert(err);
		}); 		             
	}

	setFavorites(liveId, subtopicId){

		var post_url = this.http_service_object.getPosturl('favorites');

		this.http_service_object.getFavoriteswithsubtopicid(liveId, subtopicId).subscribe(data => {

			var favorite_data = data;
			if(favorite_data.length > 0){
				this.http_object.delete(post_url+'/'+favorite_data[0].id).subscribe(
					resp => {this.updateRecord('subtopic_data', ['isFavourite'], ['0', subtopicId]);},
					error => console.log('Error---->123.'+JSON.stringify(error))
				);
			}else{    
				this.http_object.post(post_url, {"cardiovisualUserId" : liveId, "subtopicId" : subtopicId, "type":"subtopic"}).subscribe(data => {
					this.updateRecord('subtopic_data', ['isFavourite'], ['1', subtopicId]);
				}, error => {
					//console.log('Error---->321.'+JSON.stringify(error))
				});
			}
		}, err => {
			//alert(err);
		}); 
	}



	listSubTopicsDataId() {
		var query = "SELECT id FROM subtopic_data";
		this.openDatabase().then((db: SQLiteObject) => {
			return db.executeSql(query);
		}).catch(function () {
     		//console.log("459 Promise Rejected");
		});
	}


	//not added
	downloadAll(){
		/*-------------------------------------- logic to download all icons --------------------------------------*/
		// gets all undownloaded 
		var subtopic_query = new Array(" JOIN subtopic_data ON subtopic_data.id = new_sub_topics.id WHERE subtopic_data.localIconUrl = ''");

		this.fetchAllData('new_sub_topics' , subtopic_query).then(subtopic_result => {
			if (subtopic_result.length > 0) {
				var fileTransfer : FileTransferObject = this.file_transfer_object.create();
				var path = this.file_object.dataDirectory+'icons/';
				var db = this.db;

				_.times(subtopic_result.length, function(i){
					// Download specific image
					//var imagename = subtopic_result[i].iconUrl.split("/").pop();
					var imagename = subtopic_result[i].imageName;
					fileTransfer.download(subtopic_result[i].iconUrl, path + imagename).then((entry) => {
				          var icon_url = 'icons/'+imagename;
				          var querystring = " UPDATE subtopic_data SET localIconUrl = '"+icon_url+"' WHERE id = "+subtopic_result[i].id;
				          db.executeSql(querystring, []);
					});
				});
			}
		});

		/*----------------------------------------------------------------------------------------------------------*
		/*------------------------------------- logic to download all drawon --------------------------------------*/
		var subtopic_query = new Array(" JOIN subtopic_data ON subtopic_data.id = new_sub_topics.id WHERE (new_sub_topics.subTopicType='image' AND subtopic_data.downloaded = 0)");

		this.fetchAllData('new_sub_topics' , subtopic_query).then(drawon_result => {
			if (drawon_result.length > 0) {
				var fileTransfer : FileTransferObject = this.file_transfer_object.create();

				var path = this.file_object.dataDirectory+'drawon/';
				var db = this.db;

				_.times(drawon_result.length, function(i){
					// Download specific image
					//var filename = drawon_result[i].url.split("/").pop();
					var filename = drawon_result[i].videoName;

					fileTransfer.download(drawon_result[i].url, path + filename).then((entry) => {
			          var drawon_image_url = 'drawon/'+filename;
			          var drawon_query = " UPDATE subtopic_data SET localUrl = '"+drawon_image_url+"' WHERE id = "+drawon_result[i].id;
			          db.executeSql(drawon_query, []);
					});
				});
			}
		});
	}


        bulkInsertSubTopics(apiData, type_user) {
        var apiDataStr = JSON.stringify(apiData);

        if(type_user == "doctor"){
            var apiDataStr = apiDataStr.replace(/"patientFriendlyDescription":"[a-zA-Z0-9’\%\!\“\”\¿\+\-\#\™\®,. \/()&:?\\r\n\p{L}ñáéíóúü']+",/ig, "");
            var apiDataStr = apiDataStr.replace(/"patientFriendlyDescription":null,/ig, "");
            var apiDataStr = apiDataStr.replace(/"isPatientDownloadable":[0-9],/ig, "");
            var apiDataStr = apiDataStr.replace(/"isPatientStreamed":[0-9],/ig, "");
            var apiDataStr = apiDataStr.replace(/"patientFriendlyName":"[a-zA-Z0-9’\%\!\“\”\¿\+\-\#\™\®,. \/()&:?\\r\n\p{L}ñáéíóúü']+",/ig, "");
        }else{
            var apiDataStr = apiDataStr.replace(/"description":"[a-zA-Z0-9’\%\!\“\”\¿\+\-\#\™\®,. \/()&:?\\r\n\p{L}ñáéíóúü']+",/ig, "");
            var apiDataStr = apiDataStr.replace(/"name":"[a-zA-Z0-9’\%\!\“\”\¿\+\-\#\™\®,. \/()&:?\\r\n\p{L}ñáéíóúü']+",/ig, "");
            var apiDataStr = apiDataStr.replace(/patientFriendlyDescription/ig, "description");
            var apiDataStr = apiDataStr.replace(/patientFriendlyName/ig, "name");
            var apiDataStr = apiDataStr.replace(/"isDownloadable":[0-9],/ig, "");
            var apiDataStr = apiDataStr.replace(/"isStreamed":[0-9],/ig, "");
            var apiDataStr = apiDataStr.replace(/isPatientStreamed/ig, "isStreamed");
            var apiDataStr = apiDataStr.replace(/isPatientDownloadable/ig, "isDownloadable");
        }
        var apiDataStr = apiDataStr.replace(/"patientDescription":"[a-zA-Z0-9’\%\!\“\”\¿\+\-\#\™\®,. \/()&:?\\r\n\p{L}ñáéíóúü']+",/ig, "");
        var apiDataStr = apiDataStr.replace(/"patientDescription":null,/ig, "");
        var apiDataStr = apiDataStr.replace(/"filesize":"[0-9.]+",/ig, "");
        var apiDataStr = apiDataStr.replace(/"filesize":"",/ig, "");
        var apiDataStr = apiDataStr.replace(/"resolution":"[0-9x]+",/ig, "");
        var apiDataStr = apiDataStr.replace(/"resolution":"",/ig, "");
        var apiDataStr = apiDataStr.replace(/"isWeb":[0-9],/ig, "");
        var apiDataStr = apiDataStr.replace(/"slug":"[0-9a-zA-z-]+",/ig, "");
        var apiDataStr = apiDataStr.replace(/contentType/ig, "otherType");
        var apiDataStr = apiDataStr.replace(/"topicId":[0-9],/ig, "");
        var apiDataStr = apiDataStr.replace(/"categoryId":[0-9],/ig, "");
        var apiDataStr = apiDataStr.replace(/newTopicid/ig, "topicId");
        var apiDataStr = apiDataStr.replace(/newCategoryId/ig, "categoryId");
        var apiDataStr = apiDataStr.replace(/([a-zA-Z0-9-._() ]+?\.jpg)/ig, '$1","imageName":"$1');
        var apiDataStr = apiDataStr.replace(/([a-zA-Z0-9-._() ]+?\.jpeg)/ig, '$1","imageName":"$1');
        var apiDataStr = apiDataStr.replace(/("iconUrl":"")+/ig, '$1,"imageName":""');
        var apiDataStr = apiDataStr.replace(/([a-zA-Z0-9-._() ]+?\.pdf)/ig, '$1","imageName":"$1');
        var apiDataStr = apiDataStr.replace(/([a-zA-Z0-9-._() ]+?\.m4v)/ig, '$1","videoName":"$1');
        var apiDataStr = apiDataStr.replace(/([a-zA-Z0-9-._() ]+?\.mp4)/ig, '$1","videoName":"$1');
        var apiDataStr = apiDataStr.replace(/"url":"([a-zA-Z0-9-.() _\/\:]+?[_.\w-]+\.jpg)+",/ig, '"url":"$1","videoName":"$1",');
        var apiDataStr = apiDataStr.replace(/"videoName":"[a-zA-Z0-9-.() _\/\:]+?([_.\w-]+\.jpg)+",/ig, '"videoName":"$1",');
        var apiDataStr = apiDataStr.replace(/"url":"([a-zA-Z0-9-.() _\/\:]+?[_.\w-]+\.jpeg)+",/ig, '"url":"$1","videoName":"$1",');
        var apiDataStr = apiDataStr.replace(/"videoName":"[a-zA-Z0-9-.() _\/\:]+?([_.\w-]+\.jpeg)+",/ig, '"videoName":"$1",');

        var prejson = '{"structure":{"tables":{"new_sub_topics":"([id] INTEGER PRIMARY KEY, [name] TEXT NOT NULL, [topicId] INTEGER, [categoryId] INTEGER, [subTopicType] TEXT, [title] TEXT, [description] TEXT, [url] TEXT, [isPaid] INTEGER, [copyrightInfo] TEXT, [sponsoredName] TEXT, [sponsoredLink] TEXT, [position] INTEGER, [iconUrl] TEXT, [isStreamed] INTEGER, [isAd] INTEGER, [isActive] INTEGER, [isDownloadable] INTEGER, [timings] TEXT, [createdAt] TEXT, [updatedAt] TEXT, [imageName] TEXT, [videoName] TEXT, [shareUrl] TEXT, [tag] TEXT, [forum_tags] TEXT, [viewCount] INTEGER, [expiryDate] TEXT, [duration] TEXT, [otherType] TEXT)"},"otherSQL":["CREATE UNIQUE INDEX new_sub_topics_id ON new_sub_topics(id)"]},"data":{"inserts":{"new_sub_topics":';
        var postjson = '}}}';
        var finaljson = prejson+apiDataStr+postjson;

        var subtopic_ids = _.pluck(JSON.parse(JSON.stringify(apiData)),'id');
        var subtopic_ids_json = JSON.stringify(subtopic_ids);
        var final_subtopic_datatable = subtopic_ids_json.replace(/([0-9]+)/ig, '{"id":"$1","localUrl":"","localIconUrl":"","downloaded":"0","isVisible":"1","isFavourite":"0"}');
        var pre_subtd_json = '{"structure":{"tables":{"subtopic_data":"([id] INTEGER PRIMARY KEY, [localUrl] TEXT, [localIconUrl] TEXT, [downloaded] INTEGER, [isVisible] INTEGER, [isFavourite] INTEGER)"},"otherSQL":["CREATE UNIQUE INDEX subtopic_data_id ON subtopic_data(id)"]},"data":{"inserts":{"subtopic_data":';
        var post_subtd_json = '}}}';
        var final_subtd_json = pre_subtd_json+final_subtopic_datatable+post_subtd_json;

        this.openDatabase().then((db: SQLiteObject) => {
//                     var successFn = function(count){
//                         alert("Successfully imported JSON to DB; equivalent to "+count+" SQL statements");
//                     };
//                     var errorFn = function(error){
//                         alert(JSON.stringify(error.message));
//                         //console.log(JSON.stringify(error));
//                         console.log("message:"+JSON.stringify(error.message));
//                     };
//                     var progressFn = function(current, total){
//                         console.log("Imported "+current+"/"+total+" statements");
//                     };

                    this.sqlitePorter.importJsonToDb(db, finaljson);
//                     , {
//                         successFn: successFn,
//                         errorFn: errorFn,
//                         progressFn: progressFn
//                     });

                    this.sqlitePorter.importJsonToDb(db, final_subtd_json);
//                     , {
//                         successFn: successFn,
//                         errorFn: errorFn,
//                         progressFn: progressFn
//                     });

            this.storage_object.get('user_logged_in').then((val) => {
                if(val != 0){
                    this.getFavoritesAPIData(val);
                    this.getDownloadsAPIData(val);
                }
            });
            //alert('bulk insert sub topic');
            this.downloadAll();

        }).catch(function () {
            //console.log("575 Promise Rejected");
        });
    }

	//not added
	getCardioSplashes(type_user) {
		this.http_service_object.getnewSplashes().subscribe(splashdata => {
			this.bulkInsertSplashes(splashdata);
		}, err => {
			//alert(err);
		});
	}


	//not added
	bulkInsertSplashes(apiData) {
		var query = "INSERT INTO new_cardio_splashes (id, sponsoredName, imageUrl, contentType, contentUrl, isSplash, isPoweredBy, isSponsor, isOnboarding, fileName, updatedAt, isFor, downloaded, position) VALUES ";

		_.each(apiData,function(data,index){

		var fileName = _.last(data.imageUrl.split("/"));

		query += '('+data.id+',"'+data.sponsorName+'", "'+data.imageUrl+'", "'+data.contentType+'", "'+data.contentUrl+'", '+data.isSplash+', '+data.isPoweredBy+', '+data.isSponsor+', '+data.isOnboarding+', "'+fileName+'", "'+data.updatedAt+'", "'+data.isFor+'", 0,'+data.position+'),';
		});

		query = query.replace(/,\s*$/, ";");

		this.openDatabase().then((db: SQLiteObject) => {

			var drop_cardio_splashes = 'DROP TABLE IF EXISTS new_cardio_splashes';

			var new_cardio_splashes = 'CREATE TABLE IF NOT EXISTS new_cardio_splashes (id INTEGER PRIMARY KEY, sponsoredName TEXT NOT NULL UNIQUE, imageUrl TEXT, contentType TEXT, contentUrl TEXT, isSplash INTEGER, isPoweredBy INTEGER, isSponsor INTEGER, isOnboarding INTEGER, localUrl TEXT, downloaded INTEGER, shown INTEGER, fileName TEXT, updatedAt TEXT, isFor TEXT, position INTEGER)';


			db.executeSql(drop_cardio_splashes, []);
			db.executeSql(new_cardio_splashes, []);

			db.executeSql(query, []).then(function(success2){
				this.downloadAllSplashes();

			}, (err2)=>{
				//alert('err2 '+JSON.stringify(err2));
			});

			/*db.executeSql(query).then((data) => {
				alert('successs '+JSON.stringify(data));
			this.downloadAllSplashes();

			}).catch(e => {
				// Remove all old entries;
				//this.deleteRecords("DELETE FROM new_cardio_splashes");
				// Redo Bulk insert as data is already present.
				//this.syncSplashesAPIData(apiData);
			});*/
		}).catch(function () {
     		//console.log("633 Promise Rejected");
		});
		
	}

	//not added
	downloadAllSplashes(){
		var query = "SELECT * FROM new_cardio_splashes where downloaded = 0";

		this.openDatabase().then((db: SQLiteObject) => {
			db.executeSql(query, []).then((results) =>{

				var allFilesToBeDownloaded = [];
				_.times(results.rows.length,function(i){
					var data = results.rows.item(i);
					var fileName = _.last(data.imageUrl.split("/"));
					allFilesToBeDownloaded.push({"url": data.imageUrl,"file": fileName, "id":data.id});
				});

				this.downloadAndSaveSplashes(allFilesToBeDownloaded);
			});
		}).catch(function () {
     	//console.log("654 Promise Rejected");
		});
	}

	//not added
	downloadAndSaveSplashes(data){

		// Iterate through all the array elements.
		var fileTransfer : FileTransferObject = this.file_transfer_object.create();
		var path = this.file_object.dataDirectory;
		var db = this.db;
		_.times(data.length, function(i){

		fileTransfer.download(data[i].url, path+'splashes/' + data[i].file).then((entry) => {
			var splash_image_url = 'splashes/'+data[i].file;
			var splash_query = "UPDATE new_cardio_splashes SET localUrl = '"+splash_image_url+"', downloaded=1 WHERE id = "+data[i].id;			 
			 
			 	db.executeSql(splash_query, []);
			 
			});
		});
	}



	//not added
	syncSplashesAPIData(apiData){

		var query = "INSERT INTO new_cardio_splashes (id, sponsoredName, imageUrl, contentType, contentUrl, isSplash, isPoweredBy, isSponsor, isOnboarding, fileName, updatedAt, position) VALUES ";

		_.each(apiData,function(data,index){
		var fileName = _.last(data.imageUrl.split("/"));
		query += '('+data.id+', "'+data.sponsorName+'", "'+data.imageUrl+'", "'+data.contentType+'", "'+data.contentUrl+'", '+data.isSplash+', '+data.isPoweredBy+', '+data.isSponsor+', '+data.isOnboarding+', "'+fileName+'", "'+data.updatedAt+'", '+data.position+'),';      // splash_data_query += '('+data.id+', "", 0, 0),';
		});

		query = query.replace(/,\s*$/, ";");
		// Resync all data back.

		this.openDatabase().then((db: SQLiteObject) => {
			db.executeSql(query, []).then((data) => {

				var allSplashesIds = [];

				var query1 = "SELECT id FROM cardio_splash_data";
				var result = db.executeSql(query, []);

			}).catch(e => { });

		}).catch(function () {
     		//console.log("706 Promise Rejected");
		});
	}


	//not added
	getTopicsAPIData(type_user) {
		
		this.http_service_object.getnewtopics().subscribe(newtopicsdata => {
			this.bulkInsertTopics(newtopicsdata, type_user);
		}, err => {
			//alert(err);
		}); 
	}

        bulkInsertTopics(apiData, type_user) {
        var apiDataStr = JSON.stringify(apiData);
        if(type_user == "doctor"){
            var apiDataStr = apiDataStr.replace(/"(p[^"]+)"\s*:\s*"([^"]+)",?/g, "");
        }else{
            var apiDataStr = apiDataStr.replace(/"([name^"]+)"\s*:\s*"([^"]+)",?/g, "");
            var apiDataStr = apiDataStr.replace(/"(p[^"]+)"\s*:",?/g, '"name":"');
        }
        var apiDataStr = apiDataStr.replace(/"(s[^"]+)"\s*:",?/g, '"showInformation":"');
        var apiDataStr = apiDataStr.replace(/"isActive":1,/ig, "");

        var prejson = '{"structure":{"tables":{"new_topics":"([id] INTEGER PRIMARY KEY, [name] TEXT NOT NULL, [iconName] TEXT, [hexcodeBase] TEXT, [hexcodeContrast] TEXT, [hexcodeShadow] TEXT, [position] INTEGER, [old_ids] TEXT, [createdAt] TEXT, [updatedAt] TEXT, [showInformation] TEXT)"},"otherSQL":["CREATE UNIQUE INDEX topic_id ON new_topics(id)"]},"data":{"inserts":{"new_topics":';
        var postjson = '}}}';
        var finaljson = prejson+apiDataStr+postjson;
        var ffinaljson = finaljson.replace(/\\/g, '');
        var ffinaljson = ffinaljson.replace(/^\s+/,"").replace(/\s+$/,"");

//         var successFn = function(count){
//             console.log("Successfully imported JSON to DB; equivalent to "+count+" SQL statements");
//         };
//         var errorFn = function(error){
//             console.log(JSON.stringify(error));
//         };
//         var progressFn = function(current, total){
//             console.log("Imported "+current+"/"+total+" statements");
//         };

        this.sqlitePorter.importJsonToDb(this.db, ffinaljson);
//         , {
//             successFn: successFn,
//             errorFn: errorFn,
//             progressFn: progressFn
//         });

    }



	storeUserdata(user_data){

		var user_type = (user_data.userRoleId == 1) ?'doctor': 'patient';
		var password = this.encode(user_data.password);

		var drop_user_data = 'DROP TABLE IF EXISTS new_user_info';


		var new_user_data = 'CREATE TABLE IF NOT EXISTS new_user_info (id INTEGER PRIMARY KEY, email TEXT, username TEXT, user_type TEXT, isPaid INTEGER, userRoleId INTEGER, discoveryMethodId INTEGER, liveId INTEGER, full_name TEXT, password TEXT, gender TEXT, profile_pic TEXT, medium TEXT, facebook_id TEXT, specialities TEXT, user_role_sub_type TEXT, verified TEXT, birthyear TEXT, location TEXT, state TEXT, referral_code TEXT,referred_by INTEGER, npi_number INTEGER,npi_id INTEGER)';


		var query = "INSERT INTO new_user_info ('email', 'username', 'user_type', 'isPaid', 'userRoleId', 'discoveryMethodId', 'liveId', 'full_name', 'password', 'gender', 'profile_pic', 'facebook_id', 'specialities', 'user_role_sub_type', 'verified', 'location','medium', 'state', 'referral_code', 'referred_by', 'npi_number','npi_id') VALUES ";

		query +="('"+user_data.email+"', '"+user_data.username+"', '"+user_type+"', "+user_data.isPaid+","+ user_data.userRoleId+", "+user_data.discoveryMethodId+", "+user_data.liveId+", '"+user_data.fullname+"', '"+user_data.password+"', '"+user_data.gender+"', '"+user_data.profilePic+"', '"+user_data.facebookId+"', '"+user_data.specialities+"','"+user_data.userRoleSubType+"', '"+user_data.verified+"', '"+user_data.location+"', '"+user_data.medium+"','"+user_data.state+"','"+user_data.referral_code+"',"+user_data.referred_by+","+user_data.npi_number+","+user_data.npi_id+")"


		this.openDatabase().then((db: SQLiteObject) => {

			db.executeSql(drop_user_data ,[]);
			db.executeSql(new_user_data ,[]);
			db.executeSql(query, []).then(function(success){
			},(err123) => {
			 //console.log("err123: " + JSON.stringify(err123));
			});
		},(err) => {
		 //console.log("Error opening database: " + err);
		}).catch(function () {
     		//console.log("789 Promise Rejected");
		});

	}



	encode(data) {
		data = this.xor_encrypt(this.encrypt_key, data);
		return this.b64_encode(data);
	}


	b64_encode(data) {
		var o1, o2, o3, h1, h2, h3, h4, bits, r, i = 0, enc = "";
		if (!data) { return data; }
		do {
			o1 = data[i++];
			o2 = data[i++];
			o3 = data[i++];
			bits = o1 << 16 | o2 << 8 | o3;
			h1 = bits >> 18 & 0x3f;
			h2 = bits >> 12 & 0x3f;
			h3 = bits >> 6 & 0x3f;
			h4 = bits & 0x3f;
			enc += this.b64_table.charAt(h1) + this.b64_table.charAt(h2) + this.b64_table.charAt(h3) + this.b64_table.charAt(h4);
		} while (i < data.length);
		r = data.length % 3;
		return (r ? enc.slice(0, r - 3) : enc) + "===".slice(r || 3);
	}




	xor_encrypt(key, data) {
		return _.map(data, function(c, i) {
		return c.charCodeAt(0) ^ key.charCodeAt(Math.floor(i % key.length));
		});
	}



	updateUserinfoForForum(live_id, params){
		var username = params.username;
		var email = params.email;
		//var url = this.http_service_object.getdata('user', '');
		var user_data = {};
		if(username != ''){
			user_data =  {"username" : username};
			this.http_object.put(this.localapi+"/api/CardiovisualUsers/"+live_id, user_data).subscribe(data => {
				var query = "UPDATE new_user_info SET username = '"+username+"' WHERE id = 1";
				this.db.executeSql(query, []).then((data) => {  
					 return data;
				}, err => {
				  //alert('Error: ' + JSON.stringify(err));
				  return [];
				});

			}, error => {
				//console.log(error);
			});	
		}
		if(email != ''){
			user_data =  {"email" : email};
			this.http_object.put(this.localapi+"/api/CardiovisualUsers/"+live_id, user_data).subscribe(data => {
				var query = "UPDATE new_user_info SET email = '"+email+"' WHERE id = 1";
				this.db.executeSql(query, []).then((data) => {
					 return data;
				}, err => {
				  //alert('Error: ' + JSON.stringify(err));
				  return [];
				});

			}, error => {
				//console.log(error);
			});		
		}
	}

	updateData(query){

		return this.db.executeSql(query, []).then((data) => { 
			//alert('success '+JSON.stringify(data));
			return data;
		}, err => {
			//alert('Error: ' + JSON.stringify(err));
			return [];
		});
	}

	getDownloadsAPIData( liveId ) {

		this.http_service_object.getDownloadsDatas(liveId).subscribe(data => {
			this.syncDownloads(data);

		}, err => {
		  //alert(err);
		});  
	}

	syncDownloads(pData){

		var updated_id = '';
		for(let i=0;i<pData.length; i++){
		    if(updated_id == ''){
		      updated_id = pData[i]['subtopicId'];
		    }else{
		      updated_id = updated_id+','+pData[i]['subtopicId'];
		    }
		}
		if(updated_id != ''){
		  var query = "UPDATE subtopic_data SET downloaded=1 WHERE id IN ("+updated_id+")";

		  	return this.db.executeSql(query, []).then((data) => {  
		   	 return data;
		    }, err => {
		      //alert('Error: ' + err);
		      return [];
		    });  
		}
	}

	getOrderDetailsAPIData(user_id) {
		//alert('hiii');

		this.http_service_object.getUserPurchasedDataFromApi(user_id).subscribe(orderdetailsdata => {
			this.SyncInsertOrderDetails(orderdetailsdata);
		}, err => {
			//alert(err);
		}); 

	}

	SyncInsertOrderDetails(orderdetailsdata){
		//alert('hey');
		var query = 'INSERT INTO "order_details" ("product_id","expiry_time","product_type","created_at","user_id") VALUES';

		_.each(orderdetailsdata,function(data,index){

			query += "('"+data.productId+"','"+data.expiryTime+"','"+data.productType+"','"+data.createdAt+"',"+data.cardiovisualUserId+"),"

		});

		query = query.replace(/,\s*$/, ";");

		this.openDatabase().then((db: SQLiteObject) => {
			//alert('database SyncInsertOrderDetails');

			var drop_order_details = 'DROP TABLE IF EXISTS order_details';

			var order_details = 'CREATE TABLE IF NOT EXISTS order_details (id INTEGER PRIMARY KEY, product_id TEXT, expiry_time TEXT, product_type TEXT, created_at TEXT, user_id INTEGER)';

			db.executeSql(drop_order_details ,[]);
			db.executeSql(order_details ,[]);

			db.executeSql(query);
		}).catch(function () {
     		//console.log("948 Promise Rejected");
		});
	}



	dashboardSubTopicsAPIData(type_user){

		//first sync old images from sqlite to api data, so we get the difference and only that images we have to download 
		this.dashboardSyncIconAndDrawOn(type_user);


		var delete_subtopics = 'DROP TABLE IF EXISTS new_sub_topics';

		var new_subtopics = 'CREATE TABLE IF NOT EXISTS new_sub_topics (id INTEGER PRIMARY KEY, name TEXT NOT NULL, topicId INTEGER, categoryId INTEGER, subTopicType TEXT, title TEXT, description TEXT, url TEXT, isPaid INTEGER, copyrightInfo TEXT, sponsoredName TEXT, sponsoredLink TEXT, position INTEGER, iconUrl TEXT, isStreamed INTEGER, isAd INTEGER, isActive INTEGER, isDownloadable INTEGER, timings TEXT, createdAt TEXT, updatedAt TEXT, imageName TEXT, videoName TEXT, shareUrl TEXT, tag TEXT, forum_tags TEXT, viewCount INTEGER, expiryDate TEXT, duration TEXT, otherType TEXT)';


		// Remove all old entries;
		//this.deleteRecords("DELETE FROM new_sub_topics");

		this.http_service_object.getSubtopicDatas(type_user).subscribe(apiData => {

			// Generate BulkInsert query from API.

			//alert('sync api data '+JSON.stringify(apiData));

			var query = "INSERT INTO new_sub_topics (id,name,topicId,categoryId,subTopicType,title,description,url,isPaid,copyrightInfo,sponsoredName,sponsoredLink,position,iconUrl,isStreamed,isAd,isActive,isDownloadable,timings,createdAt,updatedAt,imageName,videoName,shareUrl,tag, forum_tags, viewCount,expiryDate,duration,otherType) VALUES ";

			_.each(apiData,function(data, index){
				var imageName = _.last(data.iconUrl.split("/"));
				var videoName = _.last(data.url.split("/"));
				if(type_user == "doctor"){

					var temp_expiry_date = (data.expiryDate != null) ? new Date(data.expiryDate).getTime() : data.expiryDate;
					query += '('+data.id+', "'+data.name+'", '+data.newTopicId+', '+data.newCategoryId+', "'+data.subTopicType+'", "'+data.title+'", "'+data.description+'", "'+data.url+'", '+data.isPaid+', "'+data.copyrightInfo+'", "'+data.sponsoredName+'", "'+data.sponsoredLink+'", '+data.position+', "'+data.iconUrl+'", '+data.isStreamed+', '+data.isAd+', '+data.isActive+', '+data.isDownloadable+', "'+data.timings+'", "'+data.createdAt+'", "'+data.updatedAt+'", "'+imageName+'", "'+videoName+'","'+data.shareUrl+'", "'+data.tag+'", "'+data.forum_tags+'", '+data.viewCount+', "'+temp_expiry_date+'", "'+data.duration+'", "'+data.contentType+'"),';
				}else{
					var temp_expiry_date = (data.expiryDate != null) ? new Date(data.expiryDate).getTime() : data.expiryDate;
					query += '('+data.id+', "'+data.patientFriendlyName+'", '+data.newTopicId+', '+data.newCategoryId+', "'+data.subTopicType+'", "'+data.title+'", "'+data.patientFriendlyDescription+'", "'+data.url+'", '+data.isPaid+', "'+data.copyrightInfo+'", "'+data.sponsoredName+'", "'+data.sponsoredLink+'", '+data.position+', "'+data.iconUrl+'", '+data.isPatientStreamed+', '+data.isAd+', '+data.isActive+', '+data.isPatientDownloadable+', "'+data.timings+'", "'+data.createdAt+'", "'+data.updatedAt+'", "'+imageName+'", "'+videoName+'","'+data.shareUrl+'", "'+data.tag+'", "'+data.forum_tags+'", '+data.viewCount+', "'+temp_expiry_date+'", "'+data.duration+'", "'+data.contentType+'"),';
				}
			});
			query = query.replace(/,\s*$/, ";");

			//alert('sync query '+JSON.stringify(query));

			var allsubtopicids = [];

			// Resync all data back.
			this.openDatabase().then((db: SQLiteObject) => {

				db.executeSql(delete_subtopics, []);

				db.executeSql(new_subtopics,[]);


				db.executeSql(query,[]);

				var subtopic_data_query = new Array(""); 
				this.fetchAllData('subtopic_data' , subtopic_data_query).then(result => {

					_.times(result.length, function(i){
						allsubtopicids.push(result[i].id);
					});

					var all_ids = _.pluck(apiData,"id");
					var difference_ids = _.difference(all_ids, allsubtopicids);
					if(difference_ids.length > 0){
						var subtopic_data_query = "INSERT INTO subtopic_data (id, localUrl, localIconUrl, downloaded, isVisible, isFavourite) VALUES ";

						_.each(difference_ids, function(id,index){

							subtopic_data_query += '('+id+', "", "", 0, 1, 0),';
						});

						subtopic_data_query = subtopic_data_query.replace(/,\s*$/, ";");
						this.openDatabase().then((db: SQLiteObject) => {
							db.executeSql(subtopic_data_query,[]);
							this.downloadAll();
						});
					}	
				});
			}).catch(function () {
     		//console.log("1029 Promise Rejected");
			});

		}, err => {
			//alert(err);
		});
	}


	dashboardSyncIconAndDrawOn(type_user){

		//check for mp4 and m4v link on icon url
		var query_1 = new Array(" JOIN subtopic_data on new_sub_topics.id = subtopic_data.id where isActive=1");

		this.fetchAllData('new_sub_topics' , query_1).then(topic_result => {
			if(topic_result.length > 0){
				var again_download_icon = [];
				_.times(topic_result.length, function(i){
					var local_url_extension = topic_result[i].localIconUrl.split(".").pop();
					if(local_url_extension == 'mp4' || local_url_extension == 'm4v'){
						again_download_icon.push({'id':topic_result[i].id, 'iconUrl':topic_result[i].iconUrl});
					}
				});	
			}

			if(again_download_icon.length > 0){
				var fileTransfer : FileTransferObject = this.file_transfer_object.create();
				var path = this.file_object.dataDirectory;
				var db = this.db;
				_.times(again_download_icon.length, function(i){
					var new_imagename = again_download_icon[i].iconUrl.split("/").pop();
					fileTransfer.download(again_download_icon[i].iconUrl, path+'icons/'+new_imagename).then((new_entry1) => {
						var new_icon_url = 'icons/'+new_imagename;
						var new_querystring1 = "UPDATE subtopic_data SET localIconUrl = '"+new_icon_url+"' WHERE id = "+again_download_icon[i].id;
						db.executeSql(new_querystring1, []);
					});
				});

			}
		});

		var subtopic_query = new Array("");

		this.fetchAllData('new_sub_topics' , subtopic_query).then(subtopic_result => {
			this.http_service_object.getSubtopicDatas(type_user).subscribe(apiData => {
				var update_data = [];
				_.times(apiData.length, function(i){

					if(apiData[i].iconUrl != subtopic_result[i].iconUrl){
						update_data.push({'id':apiData[i].id, 'iconUrl':apiData[i].iconUrl, 'url':apiData[i].url, 'subTopicType': apiData[i].subTopicType});
					}
					if(apiData[i].subTopicType == 'image' &&((apiData[i].iconUrl != subtopic_result[i].iconUrl) || (apiData[i].url != subtopic_result[i].url))){
						update_data.push({'id':apiData[i].id, 'iconUrl':apiData[i].iconUrl, 'url':apiData[i].url, 'subTopicType': apiData[i].subTopicType });
					}

				});


				var fileTransfer : FileTransferObject = this.file_transfer_object.create();
				var path = this.file_object.dataDirectory;
				var db = this.db;
				_.times(update_data.length, function(i){
					// Download specific image
					var imagename = update_data[i].iconUrl.split("/").pop();
					fileTransfer.download(update_data[i].iconUrl, path+'icons/'+imagename).then((entry1) => {
						//var icon_url = entry1.toURL();
						var icon_url = 'icons/'+imagename;
						var querystring1 = "UPDATE subtopic_data SET localIconUrl = '"+icon_url+"' WHERE id = "+update_data[i].id;
						db.executeSql(querystring1, []);
					});

					//for drawon image
					if(update_data[i].subTopicType == 'image'){

					var drawon_imagename = update_data[i].url.split("/").pop();
					fileTransfer.download(update_data[i].url, path +'drawon/'+drawon_imagename).then((entry2) => {
						//var local_url = entry2.toURL();
						var local_url = 'drawon/'+drawon_imagename;
						var querystring2 = " UPDATE subtopic_data SET localUrl = '"+local_url+"' WHERE id = "+update_data[i].id;
						db.executeSql(querystring2, []);
					});

					}
				});
			});
		});
	}

  	updatePassword(password, user_id){
		var localapi = this.http_service_object.getApi();	
	    var url = localapi +"/api/CardiovisualUsers/"+user_id;
	    var data = {"password" : this.encode(password) }
	    this.http_service_object.updatePasswordtoApi(url, data);	
	}


	forbranchSubTopicsAPIData(type_user){

		this.http_service_object.getSubtopicDatas(type_user).subscribe(data => {
			this.forbranchbulkInsertSubTopics(data, type_user);
		}, err => {
		  //alert(err);
		}); 
	}
	forbranchbulkInsertSubTopics(apiData, type_user){
		var delete_subtopics = 'DROP TABLE IF EXISTS new_sub_topics';
		var delete_subtopcs_data = 'DROP TABLE IF EXISTS subtopic_data';

		var new_subtopics = 'CREATE TABLE IF NOT EXISTS new_sub_topics (id INTEGER PRIMARY KEY, name TEXT NOT NULL, topicId INTEGER, categoryId INTEGER, subTopicType TEXT, title TEXT, description TEXT, url TEXT, isPaid INTEGER, copyrightInfo TEXT, sponsoredName TEXT, sponsoredLink TEXT, position INTEGER, iconUrl TEXT, isStreamed INTEGER, isAd INTEGER, isActive INTEGER, isDownloadable INTEGER, timings TEXT, createdAt TEXT, updatedAt TEXT, imageName TEXT, videoName TEXT, shareUrl TEXT, tag TEXT, forum_tags TEXT, viewCount INTEGER, expiryDate TEXT, duration TEXT,otherType TEXT)';

		var subtopic_data = 'CREATE TABLE IF NOT EXISTS subtopic_data (id INTEGER PRIMARY KEY, localUrl TEXT, localIconUrl TEXT, downloaded INTEGER, isVisible INTEGER, isFavourite INTEGER)';


		var query = "INSERT INTO new_sub_topics (id,name,topicId,categoryId,subTopicType,title,description,url,isPaid,copyrightInfo,sponsoredName,sponsoredLink,position,iconUrl,isStreamed,isAd,isActive,isDownloadable,timings,createdAt,updatedAt,imageName,videoName,shareUrl,tag,forum_tags,viewCount,expiryDate,duration,otherType) VALUES ";

		var subtopic_data_query = "INSERT INTO subtopic_data (id, localUrl, localIconUrl, downloaded, isVisible, isFavourite) VALUES ";

		//alert('api data '+JSON.stringify(apiData));
		//alert('type_user '+type_user);

		_.each(apiData,function(data,index){
		var imageName = _.last(data.iconUrl.split("/"));
		var videoName = _.last(data.url.split("/"));

		subtopic_data_query += '('+data.id+', "", "", 0, 1, 0),';

		var temp_expiry_date = (data.expiryDate != null) ? new Date(data.expiryDate).getTime() : data.expiryDate;
		if(type_user == "doctor"){
		query += '('+data.id+', "'+data.name+'", '+data.newTopicId+', '+data.newCategoryId+', "'+data.subTopicType+'", "'+data.title+'", "'+data.description+'", "'+data.url+'", '+data.isPaid+', "'+data.copyrightInfo+'", "'+data.sponsoredName+'", "'+data.sponsoredLink+'", '+data.position+', "'+data.iconUrl+'", '+data.isStreamed+', '+data.isAd+', '+data.isActive+', '+data.isDownloadable+', "'+data.timings+'", "'+data.createdAt+'", "'+data.updatedAt+'", "'+imageName+'", "'+videoName+'","'+data.shareUrl+'", "'+data.tag+'", "'+data.forum_tags+'", '+data.viewCount+', "'+temp_expiry_date+'", "'+data.duration+'", "'+data.contentType+'"),';
		}else{
		var temp_expiry_date = (data.expiryDate != null) ? new Date(data.expiryDate).getTime() : data.expiryDate;

		query += '('+data.id+', "'+data.patientFriendlyName+'", '+data.newTopicId+', '+data.newCategoryId+', "'+data.subTopicType+'", "'+data.title+'", "'+data.patientFriendlyDescription+'", "'+data.url+'", '+data.isPaid+', "'+data.copyrightInfo+'", "'+data.sponsoredName+'", "'+data.sponsoredLink+'", '+data.position+', "'+data.iconUrl+'", '+data.isPatientStreamed+', '+data.isAd+', '+data.isActive+', '+data.isPatientDownloadable+', "'+data.timings+'", "'+data.createdAt+'", "'+data.updatedAt+'", "'+imageName+'", "'+videoName+'","'+data.shareUrl+'", "'+data.tag+'", "'+data.forum_tags+'", '+data.viewCount+', "'+temp_expiry_date+'", "'+data.duration+'", "'+data.contentType+'"),';
		}
		});
		query = query.replace(/,\s*$/, ";");
		subtopic_data_query = subtopic_data_query.replace(/,\s*$/, ";");

		//alert('query '+query);
		//alert('subtopic_data_query '+subtopic_data_query);

		this.openDatabase().then((db: SQLiteObject) => {
			db.executeSql(delete_subtopics, []);
			db.executeSql(delete_subtopcs_data, []);
			db.executeSql(new_subtopics,[]);
			db.executeSql(subtopic_data, []);
			db.executeSql(query, []);
			db.executeSql(subtopic_data_query, []);

			this.storage_object.get('user_logged_in').then((val) => {
				if(val != 0){
					this.getFavoritesAPIData(val);
					this.getDownloadsAPIData(val);
				}
			});

		}).catch(function () {
     	//console.log("1189 Promise Rejected");
		});

	}

	/* start for like dislike by:Sanjeev */

	
	getLikeAPIData(liveId) {
		//alert('liveId-->'+liveId);
		this.http_service_object.getLikesData(liveId).subscribe(data => {
			//alert('data-->'+JSON.stringify(data));
			this.bulkInsertLikeslists(data, liveId);
		}, err => {
			//alert('err->'+err);
		}); 
	}

	bulkInsertLikeslists(apiData,liveId){
		var delete_likes = 'DROP TABLE IF EXISTS likes';
		var create_likes = 'CREATE TABLE IF NOT EXISTS likes (id INTEGER PRIMARY KEY, cardiovisualUserId TEXT, subtopicId TEXT, createdAt TEXT, updatedAt TEXT)';	
		var likes_insert_query = "INSERT INTO likes (id, cardiovisualUserId, subtopicId, createdAt, updatedAt) VALUES"
		_.each(apiData,function(data,index){
			likes_insert_query += '('+data.id+', '+data.cardiovisualUserId+', '+data.subtopicId+', "'+data.createdAt+'", "'+data.updatedAt+'"),';
		});
		likes_insert_query = likes_insert_query.replace(/,\s*$/, ";");
		this.openDatabase().then((db: SQLiteObject) => {
			db.executeSql(delete_likes, []);
			db.executeSql(create_likes,[]);
			db.executeSql(likes_insert_query, []);
		}).catch(function () {
    	//console.log("1221 Promise Rejected");
		});
	}

	setLikeDislikes(liveId, subtopicId, classElement){
		//alert('database liveId-->'+liveId +'subtopicId--->'+subtopicId+ 'classElement-->'+classElement);

		var api_url = this.http_service_object.getApi();

		this.http_service_object.getLikesWithsubtopicidAndliveId(liveId, subtopicId).subscribe(successLikedata => {
			if (_.size(successLikedata) > 0) {
				// code...
				this.http_object.delete(api_url+'/api/likes/'+successLikedata[0].id).subscribe(resp => {
					//this.updateRecord('likes', ['isFavourite'], ['0', subtopicId]);
					this.updateLikesCount( liveId, subtopicId, classElement );
				},
					deleteApierror => console.log('deleteApierror-->'+JSON.stringify(deleteApierror))
				);
			}else{
				this.http_object.post(api_url+"/api/likes", {"cardiovisualUserId" : liveId, "subtopicId" : subtopicId}).subscribe(apiLkedata => {
					this.updateLikesCount( liveId, subtopicId, classElement );
				}, insertApierror => {
					//console.log('insertApierror--->'+JSON.stringify(insertApierror))
				});
			}
		}, likeerr => {
			//console.log('likeerr---->'+JSON.stringify(likeerr));
		}); 
	}

	updateLikesCount(liveId, subtopicId, classElement){
		var network_type = this.network_check_object.getNetworkType();

		var apiUrl = this.http_service_object.getApi();

		this.http_object.get(apiUrl + "/api/likes/count?where[subtopicId]="+subtopicId).subscribe(countSuccess => {
			var likesCount = document.getElementById("likes-count");
			var iconLikesColor = document.getElementById("icon-likes-color");
      //loader.style.background = '#fff';
      //likesCount.innerHTML = countSuccess['count']+'&nbsp;Likes';

			this.http_service_object.getLikesWithsubtopicidAndliveId(liveId, subtopicId).subscribe(updateCountLikedata => {
 				if(_.size(updateCountLikedata) > 0) {
					//angular.element('.fa.fa-thumbs-up').css('color','#e85f4f');
					//iconLikesColor.style.color = '#e85f4f';
					iconLikesColor.style.color = '#000000';
				} else {
					//angular.element('.fa.fa-thumbs-up').css('color','#000000');
					//iconLikesColor.style.color = '#000000';
					iconLikesColor.style.color = '#CCCCCC';
				}
			}, updateCountlikeerr => {
				//console.log('updateCountlikeerr---->'+JSON.stringify(updateCountlikeerr));
			});
		}, countError => {
			//console.log('countError---->'+JSON.stringify(countError));
		});
	} 
	

	/* End for like dislike by:Sanjeev */



	/*information tab :abishek  24sept2019  start*/

	/*for information table*/
	getInformationAPIData(type_user) {
		this.http_service_object.getInformationData(type_user).subscribe(data => {
			this.bulkInsertInformation(data, type_user);
		}, err => {
			//console.log('err->'+err);
		}); 
	}

	bulkInsertInformation(apiData, type_user) {

		var apiDataStr = JSON.stringify(apiData);

		if(type_user == "doctor"){
			var apiDataStr = apiDataStr.replace(/"nonhcp_descr":"[a-zA-Z0-9’\%\!\“\”\¿\+\-\#\™\®,. \/()&:?\\r\n\p{L}ñáéíóúü']+",/ig, "");
            var apiDataStr = apiDataStr.replace(/"nonhcp_descr":null,/ig, "");
            var apiDataStr = apiDataStr.replace(/"isPatientDownloadable":[0-9],/ig, "");
            var apiDataStr = apiDataStr.replace(/"isPatientStreamed":[0-9],/ig, "");
            var apiDataStr = apiDataStr.replace(/"nonhcp_name":"[a-zA-Z0-9’\%\!\“\”\¿\+\-\#\™\®,. \/()&:?\\r\n\p{L}ñáéíóúü']+",/ig, "");
            var apiDataStr = apiDataStr.replace(/hcp_name/ig, "name");
            var apiDataStr = apiDataStr.replace(/hcp_descr/ig, "description");
		}else{
		    var apiDataStr = apiDataStr.replace(/"hcp_descr":"[a-zA-Z0-9’\%\!\“\”\¿\+\-\#\™\®,. \/()&:?\\r\n\p{L}ñáéíóúü']+",/ig, "");
            var apiDataStr = apiDataStr.replace(/"hcp_descr":null,/ig, "");
            var apiDataStr = apiDataStr.replace(/"isDownloadable":[0-9],/ig, "");
            var apiDataStr = apiDataStr.replace(/"isStreamed":[0-9],/ig, "");
            var apiDataStr = apiDataStr.replace(/isPatientDownloadable/ig, "isDownloadable");
            var apiDataStr = apiDataStr.replace(/isPatientStreamed/ig, "isStreamed");
            var apiDataStr = apiDataStr.replace(/"hcp_name":"[a-zA-Z0-9’\%\!\“\”\¿\+\-\#\™\®,. \/()&:?\\r\n\p{L}ñáéíóúü']+",/ig, "");
            var apiDataStr = apiDataStr.replace(/nonhcp_name/ig, "name");
            var apiDataStr = apiDataStr.replace(/nonhcp_descr/ig, "description");
		}
		var apiDataStr = apiDataStr.replace(/video_url/ig, "url");
		var apiDataStr = apiDataStr.replace(/video_image/ig, "iconUrl");
		var apiDataStr = apiDataStr.replace(/channel_id/ig, "channelId");
		var apiDataStr = apiDataStr.replace(/"copyright"/ig, '"copyrightInfo"');
		var apiDataStr = apiDataStr.replace(/"type"/ig, '"subTopicType"');
		var apiDataStr = apiDataStr.replace(/"filesize":"[0-9.]+",/ig, "");
		var apiDataStr = apiDataStr.replace(/"filesize":"",/ig, "");
		var apiDataStr = apiDataStr.replace(/"resolution":"[0-9x]+",/ig, "");
		var apiDataStr = apiDataStr.replace(/"resolution":"",/ig, "");
		var apiDataStr = apiDataStr.replace(/"slug":"[0-9a-zA-z-]+",/ig, "");
		var apiDataStr = apiDataStr.replace(/"slug":"",/ig, "");
		var apiDataStr = apiDataStr.replace(/contentType/ig, "otherType");
		var apiDataStr = apiDataStr.replace(/new_topicId/ig, "topicId");
		var apiDataStr = apiDataStr.replace(/new_categoryId/ig, "categoryId");
		var apiDataStr = apiDataStr.replace(/([a-zA-Z0-9-._() ]+?\.jpg)/ig, '$1","imageName":"$1');
		var apiDataStr = apiDataStr.replace(/([a-zA-Z0-9-._() ]+?\.jpeg)/ig, '$1","imageName":"$1');
		var apiDataStr = apiDataStr.replace(/([a-zA-Z0-9-._() ]+?\.png)/ig, '$1","imageName":"$1');
		var apiDataStr = apiDataStr.replace(/("iconUrl":"")+/ig, '$1,"imageName":""');
		var apiDataStr = apiDataStr.replace(/([a-zA-Z0-9-._() ]+?\.pdf)/ig, '$1","imageName":"$1');
		var apiDataStr = apiDataStr.replace(/([a-zA-Z0-9-._() ]+?\.m4v)/ig, '$1","videoName":"$1');
		var apiDataStr = apiDataStr.replace(/([a-zA-Z0-9-._() ]+?\.mp4)/ig, '$1","videoName":"$1');
        var apiDataStr = apiDataStr.replace(/"url":"[a-zA-Z0-9-.() _\/\:]+?([_.\w-]+\.jpg)+",/ig, '"url":"$1","videoName":"$1",');
        var apiDataStr = apiDataStr.replace(/"url":"[a-zA-Z0-9-.() _\/\:]+?([_.\w-]+\.jpeg)+",/ig, '"url":"$1","videoName":"$1",');
        var apiDataStr = apiDataStr.replace(/"otherType":"link",/gm, '"videoName":"NA","otherType":"link",');

        var prejson = '{"structure":{"tables":{"information":"([id] INTEGER PRIMARY KEY, [name] TEXT NOT NULL, [description] TEXT, [topicId] INTEGER, [categoryId] INTEGER, [channelId] INTEGER, [url] TEXT, [videoName] TEXT, [iconUrl] TEXT, [imageName] TEXT, [duration] TEXT, [copyrightInfo] TEXT, [isActive] INTEGER, [isStreamed] INTEGER, [isDownloadable] INTEGER, [isPaid] INTEGER, [isAd] INTEGER, [position] INTEGER, [tag] TEXT, [forum_tags] TEXT, [shareUrl] TEXT, [sponsoredName] TEXT, [sponsoredLink] TEXT, [viewCount] INTEGER, [expiryDate] TEXT, [subTopicType] TEXT, [otherType] TEXT, [createdAt] TEXT, [updatedAt] TEXT)"},"otherSQL":["CREATE UNIQUE INDEX information_id ON information(id)"]},"data":{"inserts":{"information":';
        var postjson = '}}}';
        var finaljson = prejson+apiDataStr+postjson;

        var information_ids = _.pluck(JSON.parse(JSON.stringify(apiData)),'id');
        var info_ids_json = JSON.stringify(information_ids);
        var final_info_datatable = info_ids_json.replace(/([0-9]+)/ig, '{"id":"$1","localUrl":"","localIconUrl":"","downloaded":"0","isVisible":"1","isFavourite":"0"}');

        var pre_infod = '{"structure":{"tables":{"information_data":"([id] INTEGER PRIMARY KEY, [localUrl] TEXT, [localIconUrl] TEXT, [downloaded] INTEGER, [isVisible] INTEGER, [isFavourite] INTEGER)"},"otherSQL":["CREATE UNIQUE INDEX information_data_id ON information_data(id)"]},"data":{"inserts":{"information_data":';
        var post_infod_json = '}}}';
        var final_infod_json = pre_infod+final_info_datatable+post_infod_json;

		this.openDatabase().then((db: SQLiteObject) => {

            var successFn = function(count){
                alert("Successfully imported JSON to DB; equivalent to "+count+" SQL statements");
            };
            var errorFn = function(error){
                alert(JSON.stringify(error.message));
                console.log("message:"+JSON.stringify(error.message));
            };
            var progressFn = function(current, total){
                console.log("Imported "+current+"/"+total+" statements");
            };

            this.sqlitePorter.importJsonToDb(db, finaljson);
//             ,{
//                 successFn: successFn,
//                 errorFn: errorFn,
//                 progressFn: progressFn
//             });
            this.sqlitePorter.importJsonToDb(db, final_infod_json);
//              ,{
//                     successFn: successFn,
//                     errorFn: errorFn,
//                     progressFn: progressFn
//             });
			this.storage_object.get('user_logged_in').then((val) => {
				if(val != 0){
					this.getInformationFavoritesAPIData(val);
					this.getInformationDownloadsAPIData(val);
				}
			});
			
			this.downloadInformationAll();

		}).catch(function () {
     	//console.log("1364 Promise Rejected");
		});
	}

	getInformationFavoritesAPIData(liveId){

		this.http_service_object.getInformationFavoritesDatas(liveId).subscribe(data => {
			this.syncInformationFavorites(data);
		}, err => {
			//console.log('err->'+err);
		});
	}

	syncInformationFavorites(pData){

		var updated_id = '';
		for(let i=0;i<pData.length; i++){
		    if(updated_id == ''){
		      updated_id = pData[i]['subtopicId'];
		    }else{
		      updated_id = updated_id+','+pData[i]['subtopicId'];
		    }
		}
		if(updated_id != ''){
			var query = "UPDATE information_data SET isFavourite=1 WHERE id IN ("+updated_id+")";
			var query2 = "UPDATE information_data SET isFavourite=0 WHERE id NOT IN ("+updated_id+")";
		  	this.db.executeSql(query2, []);

		  	return this.db.executeSql(query, []).then((data) => {  
		   	 return data;
		    }, err => {
		      //alert('Error: ' + err);
		      return [];
		    });  
		}

	}

	getInformationDownloadsAPIData( liveId ) {

		this.http_service_object.getInformationDownloadsDatas(liveId).subscribe(data => {
			this.syncInformationDownloads(data);

		}, err => {
			//console.log('err->'+err);
		});
	}

	syncInformationDownloads(pData){

		var updated_id = '';
		for(let i=0;i<pData.length; i++){
			if(updated_id == ''){
		 		updated_id = pData[i]['informationId'];
		 }else{
		 	updated_id = updated_id+','+pData[i]['informationId'];
		 }
		}
		if(updated_id != ''){
		 var query = "UPDATE information_data SET downloaded=1 WHERE id IN ("+updated_id+")";

		 return this.db.executeSql(query, []).then((data) => {  
		  	 return data;
		 }, err => {
		 //alert('Error: ' + err);
		 return [];
		 });
		}
	}

	downloadInformationAll(){


		/*-------------------------------------- logic to download all icons --------------------------------------*/
		// gets all undownloaded 
		var info_query = new Array(" JOIN information_data ON information_data.id = information.id WHERE information_data.localIconUrl = ''");

		this.fetchAllData('information' , info_query).then(info_result => {
			if (info_result.length > 0) {
				var fileTransfer : FileTransferObject = this.file_transfer_object.create();
				var path = this.file_object.dataDirectory+'icons/';
				var db = this.db;

				_.times(info_result.length, function(i){
					// Download specific image
					var imagename = info_result[i].imageName;
					fileTransfer.download(info_result[i].iconUrl, path + imagename).then((entry) => {
				 	var icon_url = 'icons/'+imagename;
				 	var querystring = " UPDATE information_data SET localIconUrl = '"+icon_url+"' WHERE id = "+info_result[i].id;
				 	db.executeSql(querystring, []);
					});
				});
			}

		});

		/*----------------------------------------------------------------------------------------------------------*
		/*------------------------------------- logic to download all drawon --------------------------------------*/
		var info_query = new Array(" JOIN information_data ON information_data.id = information.id WHERE (information.subTopicType='image' AND information_data.downloaded = 0)");

		this.fetchAllData('information' , info_query).then(drawon_result => {
			if (drawon_result.length > 0) {
				var fileTransfer : FileTransferObject = this.file_transfer_object.create();

				var path = this.file_object.dataDirectory+'drawon/';
				var db = this.db;

				_.times(drawon_result.length, function(i){
					// Download specific image
					//var filename = drawon_result[i].url.split("/").pop();
					var filename = drawon_result[i].imageName;

					fileTransfer.download(drawon_result[i].url, path + filename).then((entry) => {
			 			var drawon_image_url = 'drawon/'+filename;
			 			var drawon_query = " UPDATE information_data SET localUrl = '"+drawon_image_url+"' WHERE id = "+drawon_result[i].id;
			 			db.executeSql(drawon_query, []);
					});
				});
			}

		});

	}


	dashboardInformationAPIData(type_user){

		//first check for the information data table 
		var create_information_data = 'CREATE TABLE IF NOT EXISTS information_data (id INTEGER PRIMARY KEY, localUrl TEXT, localIconUrl TEXT, downloaded INTEGER, isVisible INTEGER, isFavourite INTEGER)';

		var information_data_query = "INSERT INTO information_data (id, localUrl, localIconUrl, downloaded, isVisible, isFavourite) VALUES ";

		this.http_service_object.getInformationData(type_user).subscribe(apiData => {
		information_data_query += '('+apiData.id+', "", "", 0, 1, 0),';
		});

		information_data_query = information_data_query.replace(/,\s*$/, ";");

		this.openDatabase().then((db: SQLiteObject) => {
			db.executeSql(create_information_data, []).then((success) => {
				db.executeSql(information_data_query, []);
			});
		}).catch(function () {
     	//console.log("1509 Promise Rejected");
		});

		//first sync old images from sqlite to api data, so we get the difference and only that images we have to download 
		this.dashboardSyncInformationIconAndDrawOn(type_user);


		var delete_infromation = 'DROP TABLE IF EXISTS information';

		var create_information = 'CREATE TABLE IF NOT EXISTS information (id INTEGER PRIMARY KEY, name TEXT NOT NULL, description TEXT, topicId INTEGER, categoryId INTEGER, channelId INTEGER, url TEXT, videoName TEXT, iconUrl TEXT, imageName TEXT, duration TEXT, copyrightInfo TEXT, isActive INTEGER, isStreamed INTEGER,isDownloadable INTEGER, isPaid INTEGER, isAd INTEGER, position INTEGER, tag TEXT, forum_tags TEXT, shareUrl TEXT, sponsoredName TEXT, sponsoredLink TEXT, viewCount INTEGER, expiryDate TEXT, subTopicType TEXT, otherType TEXT, createdAt TEXT, updatedAt TEXT)';



		this.http_service_object.getInformationData(type_user).subscribe(apiData => {

			// Generate BulkInsert query from API.

			var information_query = "INSERT INTO information (id, name, topicId, categoryId, channelId, description, url, isPaid, copyrightInfo, sponsoredName, sponsoredLink, position, iconUrl, isStreamed, isAd, isActive, isDownloadable, createdAt, updatedAt, imageName, videoName, shareUrl, tag, forum_tags, viewCount, expiryDate, duration, subTopicType, otherType) VALUES ";

			_.each(apiData,function(data,index){
				var imageName = _.last(data.video_image.split("/"));
				var videoName = _.last(data.video_url.split("/"));

				var temp_expiry_date = (data.expiryDate != null) ? new Date(data.expiryDate).getTime() : data.expiryDate;
				if(type_user == "doctor"){

				information_query += '('+data.id+', "'+data.hcp_name+'", '+data.new_topicId+', '+data.new_categoryId+', '+data.channel_id+', "'+data.hcp_descr+'", "'+data.video_url+'", '+data.isPaid+', "'+data.copyright+'", "'+data.sponsoredName+'", "'+data.sponsoredLink+'", '+data.position+', "'+data.video_image+'", '+data.isStreamed+', '+data.isAd+', '+data.isActive+', '+data.isDownloadable+', "'+data.createdAt+'", "'+data.updatedAt+'", "'+imageName+'", "'+videoName+'","'+data.shareUrl+'", "'+data.tag+'", "'+data.forum_tags+'", '+data.viewCount+', "'+temp_expiry_date+'", "'+data.duration+'","'+data.type+'","'+data.contentType+'"),';
				
				}else{
				var temp_expiry_date = (data.expiryDate != null) ? new Date(data.expiryDate).getTime() : data.expiryDate;

				information_query += '('+data.id+', "'+data.nonhcp_name+'", '+data.new_topicId+', '+data.new_categoryId+','+data.channel_id+', "'+data.nonhcp_descr+'", "'+data.video_url+'", '+data.isPaid+', "'+data.copyright+'", "'+data.sponsoredName+'", "'+data.sponsoredLink+'", '+data.position+', "'+data.video_image+'", '+data.isPatientStreamed+', '+data.isAd+', '+data.isActive+', '+data.isPatientDownloadable+', "'+data.createdAt+'", "'+data.updatedAt+'", "'+imageName+'", "'+videoName+'","'+data.shareUrl+'", "'+data.tag+'", "'+data.forum_tags+'", '+data.viewCount+', "'+temp_expiry_date+'", "'+data.duration+'","'+data.type+'","'+data.contentType+'"),';

				}
			});

			information_query = information_query.replace(/,\s*$/, ";");

			var allinfotopics = [];

			// Resync all data back.
			this.openDatabase().then((db: SQLiteObject) => {

				db.executeSql(delete_infromation);
				db.executeSql(create_information);
				
				db.executeSql(information_query);

				var information_data_query = new Array(""); 
				this.fetchAllData('information_data' , information_data_query).then(result => {

					_.times(result.length, function(i){
						allinfotopics.push(result[i].id);
					});

					var all_ids = _.pluck(apiData,"id");
					var difference_ids = _.difference(all_ids, allinfotopics);
					if(difference_ids.length > 0){
						var information_data_insert_query = "INSERT INTO information_data (id, localUrl, localIconUrl, downloaded, isVisible, isFavourite) VALUES ";

						_.each(difference_ids, function(id,index){

							information_data_insert_query += '('+id+', "", "", 0, 1, 0),';
						});

						information_data_insert_query = information_data_insert_query.replace(/,\s*$/, ";");
						this.openDatabase().then((db: SQLiteObject) => {
							db.executeSql(information_data_insert_query);

							this.downloadInformationAll();
						});
					}					
				});
			}).catch(function () {
     		//console.log("1583 Promise Rejected");
			});

		}, err => {
		 //alert(err);
		});
	}

	dashboardSyncInformationIconAndDrawOn(type_user){

		var information_query = new Array("");

		this.fetchAllData('information' , information_query).then(information_result => {
			this.http_service_object.getInformationData(type_user).subscribe(apiData => {
				var update_data = [];

				_.times(apiData.length, function(i){
					if(apiData[i].video_image != information_result[i].iconUrl){
						update_data.push({'id':apiData[i].id, 'iconUrl':apiData[i].video_image, 'url':apiData[i].video_url, 'subTopicType': apiData[i].contentType});
					}
					if(apiData[i].contentType == 'image' &&((apiData[i].video_image != information_result[i].iconUrl) || (apiData[i].video_url != information_result[i].url))){
						update_data.push({'id':apiData[i].id, 'iconUrl':apiData[i].video_image, 'url':apiData[i].video_url, 'subTopicType': apiData[i].contentType });
					}

				});

				var fileTransfer : FileTransferObject = this.file_transfer_object.create();
				var path = this.file_object.dataDirectory;
				var db = this.db;
				_.times(update_data.length, function(i){
					// Download specific image
					var imagename = update_data[i].iconUrl.split("/").pop();
					fileTransfer.download(update_data[i].iconUrl, path+'icons/'+imagename).then((entry1) => {
						var icon_url = entry1.toURL();
						var querystring1 = "UPDATE information_data SET localIconUrl = '"+icon_url+"' WHERE id = "+update_data[i].id;
						db.executeSql(querystring1, []);
					});

					//for drawon image
					if(update_data[i].subTopicType == 'image'){

					var drawon_imagename = update_data[i].url.split("/").pop();
					fileTransfer.download(update_data[i].url, path +'drawon/'+drawon_imagename).then((entry2) => {
						var local_url = entry2.toURL();
						var querystring2 = " UPDATE information_data SET localUrl = '"+local_url+"' WHERE id = "+update_data[i].id;
						db.executeSql(querystring2, []);
					});

					}
				});
			});
		});
	}

	setinformationFavorites(liveId, infoId){

		var post_url = this.http_service_object.getPosturl('favorites');

		this.http_service_object.getFavoriteswithinformationId(liveId, infoId).subscribe(data => {

			var favorite_data = data;
			if(favorite_data.length > 0){
				this.http_object.delete(post_url+'/'+favorite_data[0].id).subscribe(
					resp => {this.updateRecord('information_data', ['isFavourite'], ['0', infoId]);},
					error => console.log('Error---->123.'+JSON.stringify(error))
				);
			}else{    
				this.http_object.post(post_url, {"cardiovisualUserId" : liveId, "subtopicId" : infoId, "type":"information"}).subscribe(data => {
					this.updateRecord('information_data', ['isFavourite'], ['1', infoId]);
				}, error => {
					//console.log('Error---->321.'+JSON.stringify(error))
				});
			}
		}, err => {
			//alert(err);
		}); 
	}
	/*information tab  end*/


	/* channels start */
	
	/*create channel table*/
	getChannelsApiData(type_user){
		this.http_service_object.getChannelsData(type_user).subscribe(data => {
			this.bulkInsertChannels(data, type_user);
		}, err => {
			//console.log('err->'+err);
		});
	}

	bulkInsertChannels(apiData, type_user) {

		var drop_channels = 'DROP TABLE IF EXISTS channels';
		
		var create_channels = 'CREATE TABLE IF NOT EXISTS channels (id INTEGER PRIMARY KEY, name TEXT NOT NULL, logo TEXT, logo_filename TEXT, icon TEXT, hexcode TEXT, position INTEGER, isActive INTEGER, createdAt TEXT, updatedAt TEXT)';

		var insert_chanels_query = "INSERT INTO channels (id, name, logo, logo_filename, icon, hexcode, position, isActive, createdAt, updatedAt) VALUES ";

		_.each(apiData,function(data,index){
			var logo_fileName = _.last(data.logo.split("/"));

			insert_chanels_query += '('+data.id+', "'+data.name+'", "'+data.logo+'", "'+logo_fileName+'", "'+data.icon+'", "'+data.hexcode+'", '+data.position+', '+data.active+', "'+data.createdAt+'", "'+data.updatedAt+'"),';
		});
		insert_chanels_query = insert_chanels_query.replace(/,\s*$/, ";");

		this.openDatabase().then((db: SQLiteObject) => {
			db.executeSql(drop_channels, []);
			db.executeSql(create_channels, []);
			db.executeSql(insert_chanels_query, []);

			this.downloadChannelsdata();

		}).catch(function () {
     		//console.log("1699 Promise Rejected");
		});
	}

	downloadChannelsdata(){

		var channel_query = new Array("");

		this.fetchAllData('channels' , channel_query).then(channel_result => {
			if (channel_result.length > 0) {
				var fileTransfer : FileTransferObject = this.file_transfer_object.create();
				var path = this.file_object.dataDirectory+'channels/';
				var db = this.db;

				_.times(channel_result.length, function(i){
					// Download specific image
					var logo_filename = channel_result[i].logo_filename;

					fileTransfer.download(channel_result[i].logo, path + logo_filename).then((entry) => {
				 		/*var icon_url = 'channels/'+logo_filename;
				 		var querystring = " UPDATE channels SET localIconUrl = '"+icon_url+"' WHERE id = "+channel_result[i].id;
				 		db.executeSql(querystring, []);*/
					});
				});
			}

		});

	}
	/* channels End */

	//create custom liting table 25 October 2019 start
	getCutomlistingApi(){
		this.http_service_object.getCustomListingData().subscribe(data => {
			this.bulkInsertCustomListing(data);
		}, err => {
			//console.log('err->'+err);
		});
	}

	bulkInsertCustomListing(apiData){
		var drop_custom_listing = 'DROP TABLE IF EXISTS custom_listing';
		
		var create_custom_listing = 'CREATE TABLE IF NOT EXISTS custom_listing (id INTEGER PRIMARY KEY, name TEXT, type TEXT, list_values TEXT)';

		var insert_custom_listing_query = "INSERT INTO custom_listing (name, type, list_values) VALUES ";

		_.each(apiData,function(data,index){
			insert_custom_listing_query += "('"+data.name+"','"+data.type+"','"+data.list_values+"'),";
		});
		insert_custom_listing_query = insert_custom_listing_query.replace(/,\s*$/, ";");

		this.openDatabase().then((db: SQLiteObject) => {
			db.executeSql(drop_custom_listing, []);
			db.executeSql(create_custom_listing, []);
			db.executeSql(insert_custom_listing_query, []);
		}).catch(function () {
     	//console.log("1756 Promise Rejected");
		});

	}

	//create custom video jsons table
	getCutomVideoJsonApi(){
		this.http_service_object.getCutomVideoJsonData().subscribe(data => {
			this.bulkInsertCutomVideoJson(data);
		}, err => {
			//console.log('err->'+err);
		});
	}

	bulkInsertCutomVideoJson(apiData){
		//alert('apiData--->'+JSON.stringify(apiData));
		var drop_custom_video_json = 'DROP TABLE IF EXISTS custom_video_json';
		
		var create_custom_video_json = 'CREATE TABLE IF NOT EXISTS custom_video_json (id INTEGER PRIMARY KEY, sub_topic_id INTEGER, type TEXT, list_values TEXT)';

		var insert_custom_video_json_query = "INSERT INTO custom_video_json (sub_topic_id, type, list_values) VALUES ";

		_.each(apiData,function(data,index){
			insert_custom_video_json_query += "("+data.sub_topic_id+",'"+data.type+"','"+data.list_values+"'),";
		});
		insert_custom_video_json_query = insert_custom_video_json_query.replace(/,\s*$/, ";");

		this.openDatabase().then((db: SQLiteObject) => {
			db.executeSql(drop_custom_video_json, []);
			db.executeSql(create_custom_video_json, []);
			db.executeSql(insert_custom_video_json_query, []);
		}).catch(function () {
     	//console.log("1788 Promise Rejected");
		});
	}

	// 25 October 2015 End

	//sponsored by link in my cv page
	/*
		userType : doctor, patient
	*/
	getSponsoredByData(userType){
		this.http_service_object.getSponsoredByDataApi().subscribe(data => {
			this.bulkInsertSponsoredBy(data, userType);
		}, err => {
			//console.log('err->'+err);
		});
	}

	bulkInsertSponsoredBy(apiData, userType){
		var drop_custom_video_json = 'DROP TABLE IF EXISTS sponsored_by';
		
		var create_custom_video_json = 'CREATE TABLE IF NOT EXISTS sponsored_by (id INTEGER PRIMARY KEY, user_type TEXT, sponsored_by_image_url TEXT, local_image_url TEXT, sponsored_by_link TEXT, local_link TEXT, is_active INTEGER, content_type TEXT)';

		var insert_custom_video_json_query = "INSERT INTO sponsored_by (user_type, sponsored_by_image_url, sponsored_by_link, is_active, content_type, local_image_url, local_link) VALUES ";

		_.each(apiData,function(data,index){
				if(data.isFor == userType || data.isFor == 'all'){
					insert_custom_video_json_query += "('"+data.isFor+"','"+data.imageUrl+"','"+data.contentUrl+"', "+data.active+", '"+data.contentType+"', '', ''),";	
				}	

		});
		insert_custom_video_json_query = insert_custom_video_json_query.replace(/,\s*$/, ";");

		this.openDatabase().then((db: SQLiteObject) => {
			db.executeSql(drop_custom_video_json, []);
			db.executeSql(create_custom_video_json, []);
			db.executeSql(insert_custom_video_json_query, []);

			this.downloadSponsoredByData();
		}).catch(function () {
     		//console.log("1828 Promise Rejected");
		});
	}

	downloadSponsoredByData(){
		var sponsored_by_query = new Array(" WHERE local_image_url=''");

		this.fetchAllData('sponsored_by' , sponsored_by_query).then(sponsored_by_result => {
			if (sponsored_by_result.length > 0) {
				var fileTransfer : FileTransferObject = this.file_transfer_object.create();
				var path = this.file_object.dataDirectory+'channels/';
				var db = this.db;

				_.times(sponsored_by_result.length, function(i){
					// Download specific image
					var logo_filename = _.last(sponsored_by_result[i].sponsored_by_image_url.split("/"));
					fileTransfer.download(sponsored_by_result[i].sponsored_by_image_url, path + logo_filename).then((entry) => {
				          var icon_url = 'channels/'+logo_filename;
				          var querystring = " UPDATE sponsored_by SET local_image_url = '"+icon_url+"' WHERE id = "+sponsored_by_result[i].id;
				          db.executeSql(querystring, []);
					});
				});
			}

		});

		var sponsored_by_video_query = new Array(" WHERE local_link='' AND content_type='video'");

		this.fetchAllData('sponsored_by' , sponsored_by_video_query).then(sponsored_by_video_result => {
			if (sponsored_by_video_result.length > 0) {
				var fileTransfer : FileTransferObject = this.file_transfer_object.create();
				var path = this.file_object.dataDirectory+'channels/';
				var db = this.db;

				_.times(sponsored_by_video_result.length, function(i){
					// Download specific image
					var video_filename = _.last(sponsored_by_video_result[i].sponsored_by_link.split("/"));

					fileTransfer.download(sponsored_by_video_result[i].sponsored_by_link, path + video_filename).then((entry) => {
				          var video_url = 'channels/'+video_filename;
				          var querystring = " UPDATE sponsored_by SET local_link = '"+video_url+"' WHERE id = "+sponsored_by_video_result[i].id;
				          db.executeSql(querystring, []);
					});
				});
			}
		});
	}



	newUserInfoAddColumn(liveId){
		this.http_service_object.getUserInfoByLiveId(liveId).subscribe(addColumndata => { 
			var chk_specialities = addColumndata.specialities ; 
			if (chk_specialities == '' || chk_specialities == 'null' || chk_specialities == 'undefined' || chk_specialities == null || chk_specialities == undefined) { 

				this.openDatabase().then((db: SQLiteObject) => { 
					var query = 'Alter TABLE new_user_info ADD COLUMN specialities TEXT'; 
					db.executeSql(query, []).then((data12) => {
						//console.log('data12 '+JSON.stringify(data12));
					},error1 => {
						//alert('error error1 '+JSON.stringify(error1));
					});
				}).catch(function () {
     			//console.log("1892 Promise Rejected");
				});
			}else{

				this.openDatabase().then((db: SQLiteObject) => { 
					var query = 'Alter TABLE new_user_info ADD COLUMN specialities TEXT';
					db.executeSql(query, []).then((data12) => {

						var user_role_sub_type = addColumndata.userRoleSubType;
						var update_query = "UPDATE new_user_info SET specialities = '"+chk_specialities+"', user_role_sub_type='"+user_role_sub_type+"' WHERE liveId ="+liveId;

						db.executeSql(update_query, []);

					},error1 => {
						//console.log('error error1 '+JSON.stringify(error1));
					});
				}).catch(function () {
     			//console.log("1910 Promise Rejected");
				});
			}
			var chk_state = addColumndata.state; 
			if (chk_state == '' || chk_state == 'null' || chk_state == 'undefined' || chk_state == null || chk_state == undefined) { 

				var addState = 'Alter TABLE new_user_info ADD COLUMN state TEXT'; 
				var addRefferal_code = 'Alter TABLE new_user_info ADD COLUMN referral_code TEXT'; 
				var addReffered_by = 'Alter TABLE new_user_info ADD COLUMN referred_by INTEGER'; 
				var addNpi_number = 'Alter TABLE new_user_info ADD COLUMN npi_number INTEGER'; 
				var addNpi_id = 'Alter TABLE new_user_info ADD COLUMN npi_id INTEGER'; 
				
				this.openDatabase().then((db: SQLiteObject) => {
					db.executeSql(addState, []);
					db.executeSql(addRefferal_code, []);
					db.executeSql(addReffered_by, []);
					db.executeSql(addNpi_number, []);
					db.executeSql(addNpi_id, []);
				}).catch(function () {
     			//console.log("1929 Promise Rejected");
				});

			}
		}, err => { 
			//alert('Err---->1234.'+JSON.stringify(err));
		});
	}

	 //whatsnew data
	getWhatsnewData(user_type){
		this.http_service_object.getWhatsnewData().subscribe(data => {
			//alert('whatsnew data---->'+JSON.stringify(data));
		this.bulkInsertWhatsnew(data, user_type);
		}, err => {
		 //console.log('err->'+err);
		});
	}

	bulkInsertWhatsnew(apiData, user_type){

		var drop_whatsnew = 'DROP TABLE IF EXISTS whatsnew';

		var create_whatsnew = 'CREATE TABLE IF NOT EXISTS whatsnew (id INTEGER PRIMARY KEY, name TEXT, type TEXT, image_url TEXT, local_image_url TEXT, source TEXT, template TEXT, list_values TEXT, position INTEGER, is_active INTEGER)';

		var insert_whatsnew_query = "INSERT INTO whatsnew (id, name, image_url, type, source, template, position, list_values, is_active) VALUES ";
		var insert_whatsnew_query_data = '';

		_.each(apiData,function(data,index){
			if(data.isFor == user_type || data.isFor == 'all'){
				insert_whatsnew_query_data += "("+data.id+", '"+data.name+"','"+data.image+"','"+data.type+"', '"+data.source+"', '"+data.template+"', "+data.position+", '"+data.list_values+"', "+data.isActive+"),";
			}
		});

		insert_whatsnew_query_data = insert_whatsnew_query_data.replace(/,\s*$/, ";");
		if(insert_whatsnew_query_data != ''){
			insert_whatsnew_query += insert_whatsnew_query_data;
		}

		this.openDatabase().then((db: SQLiteObject) => {
			db.executeSql(drop_whatsnew, []);
			db.executeSql(create_whatsnew, []);

			if(insert_whatsnew_query_data != ''){
				db.executeSql(insert_whatsnew_query, []);
				this.downloadWhatsnewData(apiData);
			}
		}).catch(function () {
     	//console.log("1978 Promise Rejected");
		});
	}

	downloadWhatsnewData(apiData){
		var that = this;
		var fileTransfer : FileTransferObject = this.file_transfer_object.create();
		var path = this.file_object.dataDirectory+'icons/';
		var db = this.db;
		_.each(apiData,function(data,index){
			if(data.image != ''){
				var image_name = _.last(data.image.split("/"));
				fileTransfer.download(data.image, path + image_name).then((entry) => {
		          var image_url = 'icons/'+image_name;
		          var querystring = " UPDATE whatsnew SET local_image_url = '"+image_url+"' WHERE id = "+data.id;
		          db.executeSql(querystring, []);
				});
			}
		});	
	}

	getWhatsnewSectionTitleData(user_type){
		this.http_service_object.getWhatsnewSectionTitleData().subscribe(data => {
			this.bulkInsertWhatsnewTitle(data, user_type);
		}, err => {
			//console.log('err->'+err);
		});
		var data = [];
		this.bulkInsertWhatsnewTitle(data, user_type);
	}

	bulkInsertWhatsnewTitle(apiData, user_type){
		var drop_whatsnewtitle = 'DROP TABLE IF EXISTS whatsnewtitle';

		var create_whatsnewtitle = 'CREATE TABLE IF NOT EXISTS whatsnewtitle (id INTEGER PRIMARY KEY, name TEXT, type TEXT, is_for TEXT, screen TEXT, is_active INTEGER)';

		var insert_whatsnewtitle_query = "INSERT INTO whatsnewtitle (id, name, type, is_for, screen, is_active) VALUES ";
		var insert_whatsnewtitle_query_data = '';

		_.each(apiData, function(data,index){
			if(data.isFor == user_type || data.isFor == 'all'){
				insert_whatsnewtitle_query_data += "("+data.id+", '"+data.cvvalue+"','"+data.cvkey+"', '"+data.isFor+"', '"+data.screen+"', "+data.isActive+"),";
			}
		});

		insert_whatsnewtitle_query_data = insert_whatsnewtitle_query_data.replace(/,\s*$/, ";");
		if(insert_whatsnewtitle_query_data != ''){
			insert_whatsnewtitle_query += insert_whatsnewtitle_query_data;
		}

		this.openDatabase().then((db: SQLiteObject) => {
			db.executeSql(drop_whatsnewtitle, []);
			db.executeSql(create_whatsnewtitle, []);

			if(insert_whatsnewtitle_query_data != ''){
				db.executeSql(insert_whatsnewtitle_query, []);
			}
		}).catch(function () {
     	//console.log("2037 Promise Rejected");
		});
	}

	getCustomPlaylistData(user_id){
		this.http_service_object.getCustomPlaylistData(user_id).subscribe(result => {
			this.bulkInsertCustomPlaylist(result, user_id);
		});
	}

	bulkInsertCustomPlaylist(apiData, user_id){
		var drop_customplaylist = 'DROP TABLE IF EXISTS custom_playlist';

		var create_customplaylist = 'CREATE TABLE IF NOT EXISTS custom_playlist (id INTEGER PRIMARY KEY, name TEXT, user_id INTEGER, list_values TEXT)';

		var insert_customplaylist_query = "INSERT INTO custom_playlist (id, name, user_id, list_values) VALUES ";
		var insert_customplaylist_query_data = '';
		if(apiData.length > 0){ 
			_.each(apiData, function(data,index){

				insert_customplaylist_query_data += "("+data.id+", '"+data.name+"', "+data.userId+", '"+data.listValues+"'),";
			});
		}

		insert_customplaylist_query_data = insert_customplaylist_query_data.replace(/,\s*$/, ";");
		if(insert_customplaylist_query_data != ''){
			insert_customplaylist_query += insert_customplaylist_query_data;
		}

		this.openDatabase().then((db: SQLiteObject) => {
			db.executeSql(drop_customplaylist, []);
			db.executeSql(create_customplaylist, []);

			if(insert_customplaylist_query_data != ''){
				db.executeSql(insert_customplaylist_query, []);
			}
		}).catch(function () {
     		//console.log("2074 Promise Rejected");
		});
	}

	getSingleSubtopic(user_type, subtopic_id){
		this.http_service_object.getSingleSubtopic(user_type, subtopic_id).subscribe(result => {
			this.insertSingleSubtopic(result, user_type, subtopic_id);
		});
	}

	insertSingleSubtopic(apidata, type_user, subtopic_id){
	    var query = "INSERT INTO new_sub_topics (id,name,topicId,categoryId,subTopicType,title,description,url,isPaid,copyrightInfo,sponsoredName,sponsoredLink,position,iconUrl,isStreamed,isAd,isActive,isDownloadable,timings,createdAt,updatedAt,imageName,videoName,shareUrl,tag,forum_tags,viewCount,expiryDate,duration,otherType) VALUES ";

	    var subtopic_data_query = "INSERT INTO subtopic_data (id, localUrl, localIconUrl, downloaded, isVisible, isFavourite) VALUES ";
	    
	    var imageName = _.last(apidata.iconUrl.split("/"));
	    var videoName = _.last(apidata.url.split("/"));

	    subtopic_data_query += '('+apidata.id+', "", "", 0, 1, 0)';

	    var temp_expiry_date = (apidata.expiryDate != null) ? new Date(apidata.expiryDate).getTime() : apidata.expiryDate;

	    if(type_user == "doctor"){

	      query += '('+apidata.id+', "'+apidata.name+'", '+apidata.newTopicId+', '+apidata.newCategoryId+', "'+apidata.subTopicType+'", "'+apidata.title+'", "'+apidata.description+'", "'+apidata.url+'", '+apidata.isPaid+', "'+apidata.copyrightInfo+'", "'+apidata.sponsoredName+'", "'+apidata.sponsoredLink+'", '+apidata.position+', "'+apidata.iconUrl+'", '+apidata.isStreamed+', '+apidata.isAd+', '+apidata.isActive+', '+apidata.isDownloadable+', "'+apidata.timings+'", "'+apidata.createdAt+'", "'+apidata.updatedAt+'", "'+imageName+'", "'+videoName+'","'+apidata.shareUrl+'", "'+apidata.tag+'", "'+apidata.forum_tags+'", '+apidata.viewCount+', "'+temp_expiry_date+'", "'+apidata.duration+'", "'+apidata.contentType+'")';
	    }else{

	      var temp_expiry_date = (apidata.expiryDate != null) ? new Date(apidata.expiryDate).getTime() : apidata.expiryDate;

	      query += '('+apidata.id+', "'+apidata.patientFriendlyName+'", '+apidata.newTopicId+', '+apidata.newCategoryId+', "'+apidata.subTopicType+'", "'+apidata.title+'", "'+apidata.patientFriendlyDescription+'", "'+apidata.url+'", '+apidata.isPaid+', "'+apidata.copyrightInfo+'", "'+apidata.sponsoredName+'", "'+apidata.sponsoredLink+'", '+apidata.position+', "'+apidata.iconUrl+'", '+apidata.isPatientStreamed+', '+apidata.isAd+', '+apidata.isActive+', '+apidata.isPatientDownloadable+', "'+apidata.timings+'", "'+apidata.createdAt+'", "'+apidata.updatedAt+'", "'+imageName+'", "'+videoName+'","'+apidata.shareUrl+'", "'+apidata.tag+'", "'+apidata.forum_tags+'", '+apidata.viewCount+', "'+temp_expiry_date+'", "'+apidata.duration+'", "'+apidata.contentType+'")';
	    }
	    
	    this.openDatabase().then((db: SQLiteObject) => {
	        db.executeSql(query, []);

	        db.executeSql(subtopic_data_query);

	        this.storage_object.get('user_logged_in').then((val) => {
	            if(val != 0){
	                this.getFavoritesAPIData(val);
	                this.getDownloadsAPIData(val);
	            }
	        });

	        this.downloadSinglSubtopic(subtopic_id);

	    }).catch(function () {
     		//console.log("2121 Promise Rejected");
			});
	}

	downloadSinglSubtopic(subtopic_id){

	    // gets all undownloaded 
	    var subtopic_query = new Array(" JOIN subtopic_data ON subtopic_data.id = new_sub_topics.id WHERE new_sub_topics.subtopic_data.id ="+subtopic_id);

	    this.fetchAllData('new_sub_topics' , subtopic_query).then(subtopic_result => {
		    if (subtopic_result.length > 0) {
			    var fileTransfer : FileTransferObject = this.file_transfer_object.create();
			    var path = this.file_object.dataDirectory+'icons/';
			    var db = this.db;

			    _.times(subtopic_result.length, function(i){
				    // Download specific image
				    //var imagename = subtopic_result[i].iconUrl.split("/").pop();
				    var imagename = subtopic_result[i].imageName;
				    fileTransfer.download(subtopic_result[i].iconUrl, path + imagename).then((entry) => {
						var icon_url = 'icons/'+imagename;
						var querystring = " UPDATE subtopic_data SET localIconUrl = '"+icon_url+"' WHERE id = "+subtopic_result[i].id;
						db.executeSql(querystring, []);
				    });
			    });
		    }
	    });

	    var subtopic_query = new Array(" JOIN subtopic_data ON subtopic_data.id = new_sub_topics.id WHERE new_sub_topics.subtopic_data.id ="+subtopic_id);

	    this.fetchAllData('new_sub_topics' , subtopic_query).then(drawon_result => {
		    if (drawon_result.length > 0) {
		    var fileTransfer : FileTransferObject = this.file_transfer_object.create();

		    var path = this.file_object.dataDirectory+'drawon/';
		    var db = this.db;

		    _.times(drawon_result.length, function(i){
			    // Download specific image
			    //var filename = drawon_result[i].url.split("/").pop();
			    var filename = drawon_result[i].videoName;

			    fileTransfer.download(drawon_result[i].url, path + filename).then((entry) => {
			     var drawon_image_url = 'drawon/'+filename;
			     var drawon_query = " UPDATE subtopic_data SET localUrl = '"+drawon_image_url+"' WHERE id = "+drawon_result[i].id;
			     db.executeSql(drawon_query, []);
			    });
		    });
		    }

	    });
	}

	
	getSingleInformation(user_type, info_id){
	    this.http_service_object.getSingleInformation(user_type, info_id).subscribe(result => {
	        this.insertSingleInformation(result, user_type, info_id);
	    });
	}

	insertSingleInformation(apidata, type_user, info_id){

	    var information_query = "INSERT INTO information (id, name, topicId, categoryId, channelId, description, url, isPaid, copyrightInfo, sponsoredName, sponsoredLink, position, iconUrl, isStreamed, isAd, isActive, isDownloadable, createdAt, updatedAt, imageName, videoName, shareUrl, tag, forum_tags, viewCount, expiryDate, duration, subTopicType, otherType) VALUES ";

	    var information_data_query = "INSERT INTO information_data (id, localUrl, localIconUrl, downloaded, isVisible, isFavourite) VALUES ";

	        
	    var imageName = _.last(apidata.video_image.split("/"));
	    var videoName = _.last(apidata.video_url.split("/"));

	    information_data_query += '('+apidata.id+', "", "", 0, 1, 0)';

	    var temp_expiry_date = (apidata.expiryDate != null) ? new Date(apidata.expiryDate).getTime() : apidata.expiryDate;

	    if(type_user == "doctor"){

	        information_query += '('+apidata.id+', "'+apidata.hcp_name+'", '+apidata.new_topicId+', '+apidata.new_categoryId+', '+apidata.channel_id+', "'+apidata.hcp_descr+'", "'+apidata.video_url+'", '+apidata.isPaid+', "'+apidata.copyright+'", "'+apidata.sponsoredName+'", "'+apidata.sponsoredLink+'", '+apidata.position+', "'+apidata.video_image+'", '+apidata.isStreamed+', '+apidata.isAd+', '+apidata.isActive+', '+apidata.isDownloadable+', "'+apidata.createdAt+'", "'+apidata.updatedAt+'", "'+imageName+'", "'+videoName+'","'+apidata.shareUrl+'", "'+apidata.tag+'", "'+apidata.forum_tags+'", '+apidata.viewCount+', "'+temp_expiry_date+'", "'+apidata.duration+'", "'+apidata.type+'", "'+apidata.contentType+'")';

	    }else{
	        var temp_expiry_date = (apidata.expiryDate != null) ? new Date(apidata.expiryDate).getTime() : apidata.expiryDate;

	        information_query += '('+apidata.id+', "'+apidata.nonhcp_name+'", '+apidata.new_topicId+', '+apidata.new_categoryId+','+apidata.channel_id+', "'+apidata.nonhcp_descr+'", "'+apidata.video_url+'", '+apidata.isPaid+', "'+apidata.copyright+'", "'+apidata.sponsoredName+'", "'+apidata.sponsoredLink+'", '+apidata.position+', "'+apidata.video_image+'", '+apidata.isPatientStreamed+', '+apidata.isAd+', '+apidata.isActive+', '+apidata.isPatientDownloadable+', "'+apidata.createdAt+'", "'+apidata.updatedAt+'", "'+imageName+'", "'+videoName+'","'+apidata.shareUrl+'", "'+apidata.tag+'", "'+apidata.forum_tags+'", '+apidata.viewCount+', "'+temp_expiry_date+'", "'+apidata.duration+'", "'+apidata.type+'", "'+apidata.contentType+'")';

	    } 

	    this.openDatabase().then((db: SQLiteObject) => {
	        db.executeSql(information_query, []);

	        db.executeSql(information_data_query, []);

	        this.storage_object.get('user_logged_in').then((val) => {
	            if(val != 0){
	                this.getInformationFavoritesAPIData(val);
	                this.getInformationDownloadsAPIData(val);
	            }
	        });

	        this.downloadSingleInformation(info_id);
	    }).catch(function () {
     		//console.log("2220 Promise Rejected");
			});
	}

	downloadSingleInformation(info_id){
	    // gets all undownloaded 
	    var info_query = new Array(" JOIN information_data ON information_data.id = information.id WHERE information_data.id ="+info_id);

	    this.fetchAllData('information' , info_query).then(info_result => {
	        if (info_result.length > 0) {
	            var fileTransfer : FileTransferObject = this.file_transfer_object.create();
	            var path = this.file_object.dataDirectory+'icons/';
	            var db = this.db;
	            _.times(info_result.length, function(i){
	                // Download specific image
	                var imagename = info_result[i].imageName;
	                fileTransfer.download(info_result[i].iconUrl, path + imagename).then((entry) => {
	                    var icon_url = 'icons/'+imagename;
	                    var querystring = " UPDATE information_data SET localIconUrl = '"+icon_url+"' WHERE id = "+info_result[i].id;
	                    db.executeSql(querystring, []);
	                });
	            });
	        }
	    });

	    var info_query = new Array(" JOIN information_data ON information_data.id = information.id WHERE information.id ="+info_id);

	    this.fetchAllData('information' , info_query).then(drawon_result => {

	        if (drawon_result.length > 0) {
	            var fileTransfer : FileTransferObject = this.file_transfer_object.create();

	            var path = this.file_object.dataDirectory+'drawon/';
	            var db = this.db;

	            _.times(drawon_result.length, function(i){
	                // Download specific image
	                //var filename = drawon_result[i].url.split("/").pop();
	                var filename = drawon_result[i].imageName;

	                fileTransfer.download(drawon_result[i].url, path + filename).then((entry) => {
	                    var drawon_image_url = 'drawon/'+filename;
	                    var drawon_query = " UPDATE information_data SET localUrl = '"+drawon_image_url+"' WHERE id = "+drawon_result[i].id;
	                    db.executeSql(drawon_query, []);
	                });
	            });
	        }
	    });
	}



	updateUserLocalDB(live_id){

		this.http_service_object.getUserInfoByLiveId(live_id).subscribe(data => {

			var userData = {
				"email" : data.email,
				"username": data.username,
				"user_type" : (data.userRoleId == 1) ? "doctor" : "patient",
				"isPaid" : data.isPaid,
				"userRoleId" : data.userRoleId,
				"discoveryMethodId" : data.discoveryMethodId,
				"clevertapId" : data.clevertapId,
				"liveId" : live_id,
				"fullname" : data.fullname,
				"password" : data.password,
				"gender" : data.gender,
				"birthyear" : data.birthyear,
				"profilePic" : data.profilePic,
				"medium" : data.medium,
				"facebookId" : data.facebookId,
				"specialities":data.specialities,
				"userRoleSubType" : data.userRoleSubType,
				"verified" : data.verified,
				"location" : data.location,
				"state": data.state,
				"referral_code" : data.referral_code,
				"referred_by" : data.referred_by,
				"npi_number" : data.npi_number,
				"npi_id" : data.npi_id
		    };
		    
			localStorage.setItem('usrSpecialities', data.specialities);
			localStorage.setItem('location', data.location);
			localStorage.setItem('cv5usrRolesubType',data.userRoleSubType);

		    this.storeUserdata(userData);
		});	    
	}


	getUserNotificationData(type_user) {
		this.http_service_object.inAppNotification().subscribe(notificationData => {

			var apiNotiData = [];
			apiNotiData = _.filter(notificationData,function(value){
				return (value.isFor == type_user  || value.isFor == "All")
			});

			setTimeout(() =>{
				this.insertFreshNotification(apiNotiData);
			},1000); 
		}, notierr => {
			//console.log('user Notification err->'+notierr);
		});
	}

	insertFreshNotification(apiNotiData){

		var drop_freshNotificationList = 'DROP TABLE IF EXISTS freshNotificationList';

		var create_table_query = 'CREATE TABLE IF NOT EXISTS freshNotificationList (id INTEGER PRIMARY KEY,  notification_id INTEGER, title TEXT,description TEXT, contentImage TEXT, list_values TEXT, contentFor TEXT, contentType TEXT, isFor TEXT,template TEXT, position INTEGER, isActive INTEGER, location TEXT, activeFrom TEXT, activeTill TEXT,createdAt TEXT, messageSeen TEXT)';

		var insert_freshNotification_query = "INSERT INTO freshNotificationList (notification_id, title, description, contentImage, list_values, contentFor, contentType, isFor, template, position, isActive, location, activeFrom, activeTill, createdAt, messageSeen) VALUES ";

		var insert_query = '';


		_.each(apiNotiData,function(data,index){

			insert_query += "("+data.id+",'"+data.title+"','"+data.description+"','"+data.contentImage+"', '"+data.contentList+"', '"+data.contentFor+"', '"+data.contentType+"', '"+data.isFor+"', '"+data.template+"', '"+data.position+"', '"+data.isActive+"', '"+data.location+"', '"+data.activeFrom+"', '"+data.activeTill+"', '"+data.createdAt+"', '"+data.messageSeen+"'),";		
		});
		insert_query = insert_query.replace(/,\s*$/, ";");

		if(insert_query != ''){
			insert_freshNotification_query += insert_query;
		}

		this.openDatabase().then((db: SQLiteObject) => {
			db.executeSql(drop_freshNotificationList ,[]);
			db.executeSql(create_table_query, []);
			db.executeSql(insert_freshNotification_query, []).then((inserNotidata) => {
			}, insertNotidataerr => {
				return [];
			});
		}).catch(function () {
     		//console.log("2358 Promise Rejected");
		});
	}

	newNotificationData(type_user) {

		this.http_service_object.newNotificationSync(localStorage.getItem('notificationID')).subscribe(notificationData => {

			var apiNotiData = [];
			apiNotiData = _.filter(notificationData,function(value){
				return (value.isFor == type_user  || value.isFor == "All")
			});

			setTimeout(() =>{
				this.insertNewNotificationSync(apiNotiData);
			},1000); 
		}, notierr => {
			//console.log('user Notification err->'+notierr);
		});
	}

	insertNewNotificationSync(apiNotiData){

		var insert_freshNotification_query = "INSERT INTO freshNotificationList (notification_id, title, description, contentImage, list_values, contentFor, contentType, isFor, template, position, isActive, location, activeFrom, activeTill, createdAt, messageSeen) VALUES ";

		var insert_query = '';


		_.each(apiNotiData,function(data,index){

			insert_query += "("+data.id+",'"+data.title+"','"+data.description+"','"+data.contentImage+"', '"+data.contentList+"', '"+data.contentFor+"', '"+data.contentType+"', '"+data.isFor+"', '"+data.template+"', '"+data.position+"', '"+data.isActive+"', '"+data.location+"', '"+data.activeFrom+"', '"+data.activeTill+"', '"+data.createdAt+"', '"+data.messageSeen+"'),";		
		});
		insert_query = insert_query.replace(/,\s*$/, ";");

		if(insert_query != ''){
			insert_freshNotification_query += insert_query;
		}

		this.openDatabase().then((db: SQLiteObject) => {
			db.executeSql(insert_freshNotification_query, []).then((inserNotidata) => {
			}, insertNotidataerr => {
				return [];
			});
		}).catch(function () {
     		//console.log("2402 Promise Rejected");
		});
	}

}
