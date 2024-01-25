import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicSelectableComponent } from 'ionic-selectable';
//import { IonicSelectableModule } from 'ionic-selectable';
import { Country, Port} from '../../types';


/*
  Generated class for the CountryandrolelistProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class CountryandrolelistProvider {
	ports: any = [];
	myuserRoles: any = [];
	countries: any = [];
	usaState: any = [];
	iphone_name: any = [];
	//doctorRoles: any = [];

	id: number;
    name: string;
    role: string;
    code: string;


	constructor() {

		this.countries = [
			{name: 'United States of America', code: 'US'},
			{name: 'Afghanistan', code: 'AF'},
			{name: 'Åland Islands', code: 'AX'},
			{name: 'Albania', code: 'AL'},
			{name: 'Algeria', code: 'DZ'},
			{name: 'American Samoa', code: 'AS'},
			{name: 'Andorra', code: 'AD'},
			{name: 'Angola', code: 'AO'},
			{name: 'Anguilla', code: 'AI'},
			{name: 'Antarctica', code: 'AQ'},
			{name: 'Antigua and Barbuda', code: 'AG'},
			{name: 'Argentina', code: 'AR'},
			{name: 'Armenia', code: 'AM'},
			{name: 'Aruba', code: 'AW'},
			{name: 'Australia', code: 'AU'},
			{name: 'Austria', code: 'AT'},
			{name: 'Azerbaijan', code: 'AZ'},
			{name: 'Bahamas', code: 'BS'},
			{name: 'Bahrain', code: 'BH'},
			{name: 'Bangladesh', code: 'BD'},
			{name: 'Barbados', code: 'BB'},
			{name: 'Belarus', code: 'BY'},
			{name: 'Belgium', code: 'BE'},
			{name: 'Belize', code: 'BZ'},
			{name: 'Benin', code: 'BJ'},
			{name: 'Bermuda', code: 'BM'},
			{name: 'Bhutan', code: 'BT'},
			{name: 'Bolivia', code: 'BO'},
			{name: 'Bosnia and Herzegovina', code: 'BA'},
			{name: 'Botswana', code: 'BW'},
			{name: 'Bouvet Island', code: 'BV'},
			{name: 'Brazil', code: 'BR'},
			{name: 'British Indian Ocean Territory', code: 'IO'},
			{name: 'Brunei Darussalam', code: 'BN'},
			{name: 'Bulgaria', code: 'BG'},
			{name: 'Burkina Faso', code: 'BF'},
			{name: 'Burundi', code: 'BI'},
			{name: 'Cambodia', code: 'KH'},
			{name: 'Cameroon', code: 'CM'},
			{name: 'Canada', code: 'CA'},
			{name: 'Cape Verde', code: 'CV'},
			{name: 'Cayman Islands', code: 'KY'},
			{name: 'Central African Republic', code: 'CF'},
			{name: 'Chad', code: 'TD'},
			{name: 'Chile', code: 'CL'},
			{name: 'China', code: 'CN'},
			{name: 'Christmas Island', code: 'CX'},
			{name: 'Cocos (Keeling) Islands', code: 'CC'},
			{name: 'Colombia', code: 'CO'},
			{name: 'Comoros', code: 'KM'},
			{name: 'Congo', code: 'CG'},
			{name: 'Congo, The Democratic Republic of the', code: 'CD'},
			{name: 'Cook Islands', code: 'CK'},
			{name: 'Costa Rica', code: 'CR'},
			{name: 'Cote D\'Ivoire', code: 'CI'},
			{name: 'Croatia', code: 'HR'},
			{name: 'Cuba', code: 'CU'},
			{name: 'Cyprus', code: 'CY'},
			{name: 'Czech Republic', code: 'CZ'},
			{name: 'Denmark', code: 'DK'},
			{name: 'Djibouti', code: 'DJ'},
			{name: 'Dominica', code: 'DM'},
			{name: 'Dominican Republic', code: 'DO'},
			{name: 'Ecuador', code: 'EC'},
			{name: 'Egypt', code: 'EG'},
			{name: 'El Salvador', code: 'SV'},
			{name: 'Equatorial Guinea', code: 'GQ'},
			{name: 'Eritrea', code: 'ER'},
			{name: 'Estonia', code: 'EE'},
			{name: 'Ethiopia', code: 'ET'},
			{name: 'Falkland Islands (Malvinas)', code: 'FK'},
			{name: 'Faroe Islands', code: 'FO'},
			{name: 'Fiji', code: 'FJ'},
			{name: 'Finland', code: 'FI'},
			{name: 'France', code: 'FR'},
			{name: 'French Guiana', code: 'GF'},
			{name: 'French Polynesia', code: 'PF'},
			{name: 'French Southern Territories', code: 'TF'},
			{name: 'Gabon', code: 'GA'},
			{name: 'Gambia', code: 'GM'},
			{name: 'Georgia', code: 'GE'},
			{name: 'Germany', code: 'DE'},
			{name: 'Ghana', code: 'GH'},
			{name: 'Gibraltar', code: 'GI'},
			{name: 'Greece', code: 'GR'},
			{name: 'Greenland', code: 'GL'},
			{name: 'Grenada', code: 'GD'},
			{name: 'Guadeloupe', code: 'GP'},
			{name: 'Guam', code: 'GU'},
			{name: 'Guatemala', code: 'GT'},
			{name: 'Guernsey', code: 'GG'},
			{name: 'Guinea', code: 'GN'},
			{name: 'Guinea-Bissau', code: 'GW'},
			{name: 'Guyana', code: 'GY'},
			{name: 'Haiti', code: 'HT'},
			{name: 'Heard Island and Mcdonald Islands', code: 'HM'},
			{name: 'Holy See (Vatican City State)', code: 'VA'},
			{name: 'Honduras', code: 'HN'},
			{name: 'Hong Kong', code: 'HK'},
			{name: 'Hungary', code: 'HU'},
			{name: 'Iceland', code: 'IS'},
			{name: 'India', code: 'IN'},
			{name: 'Indonesia', code: 'ID'},
			{name: 'Iran, Islamic Republic Of', code: 'IR'},
			{name: 'Iraq', code: 'IQ'},
			{name: 'Ireland', code: 'IE'},
			{name: 'Isle of Man', code: 'IM'},
			{name: 'Israel', code: 'IL'},
			{name: 'Italy', code: 'IT'},
			{name: 'Jamaica', code: 'JM'},
			{name: 'Japan', code: 'JP'},
			{name: 'Jersey', code: 'JE'},
			{name: 'Jordan', code: 'JO'},
			{name: 'Kazakhstan', code: 'KZ'},
			{name: 'Kenya', code: 'KE'},
			{name: 'Kiribati', code: 'KI'},
			{name: 'Korea, Democratic People\'s Republic of', code: 'KP'},
			{name: 'Korea, Republic of', code: 'KR'},
			{name: 'Kuwait', code: 'KW'},
			{name: 'Kyrgyzstan', code: 'KG'},
			{name: 'Lao People\'s Democratic Republic', code: 'LA'},
			{name: 'Latvia', code: 'LV'},
			{name: 'Lebanon', code: 'LB'},
			{name: 'Lesotho', code: 'LS'},
			{name: 'Liberia', code: 'LR'},
			{name: 'Libyan Arab Jamahiriya', code: 'LY'},
			{name: 'Liechtenstein', code: 'LI'},
			{name: 'Lithuania', code: 'LT'},
			{name: 'Luxembourg', code: 'LU'},
			{name: 'Macao', code: 'MO'},
			{name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
			{name: 'Madagascar', code: 'MG'},
			{name: 'Malawi', code: 'MW'},
			{name: 'Malaysia', code: 'MY'},
			{name: 'Maldives', code: 'MV'},
			{name: 'Mali', code: 'ML'},
			{name: 'Malta', code: 'MT'},
			{name: 'Marshall Islands', code: 'MH'},
			{name: 'Martinique', code: 'MQ'},
			{name: 'Mauritania', code: 'MR'},
			{name: 'Mauritius', code: 'MU'},
			{name: 'Mayotte', code: 'YT'},
			{name: 'Mexico', code: 'MX'},
			{name: 'Micronesia, Federated States of', code: 'FM'},
			{name: 'Moldova, Republic of', code: 'MD'},
			{name: 'Monaco', code: 'MC'},
			{name: 'Mongolia', code: 'MN'},
			{name: 'Montserrat', code: 'MS'},
			{name: 'Morocco', code: 'MA'},
			{name: 'Mozambique', code: 'MZ'},
			{name: 'Myanmar', code: 'MM'},
			{name: 'Namibia', code: 'NA'},
			{name: 'Nauru', code: 'NR'},
			{name: 'Nepal', code: 'NP'},
			{name: 'Netherlands', code: 'NL'},
			{name: 'Netherlands Antilles', code: 'AN'},
			{name: 'New Caledonia', code: 'NC'},
			{name: 'New Zealand', code: 'NZ'},
			{name: 'Nicaragua', code: 'NI'},
			{name: 'Niger', code: 'NE'},
			{name: 'Nigeria', code: 'NG'},
			{name: 'Niue', code: 'NU'},
			{name: 'Norfolk Island', code: 'NF'},
			{name: 'Northern Mariana Islands', code: 'MP'},
			{name: 'Norway', code: 'NO'},
			{name: 'Oman', code: 'OM'},
			{name: 'Pakistan', code: 'PK'},
			{name: 'Palau', code: 'PW'},
			{name: 'Palestinian Territory, Occupied', code: 'PS'},
			{name: 'Panama', code: 'PA'},
			{name: 'Papua New Guinea', code: 'PG'},
			{name: 'Paraguay', code: 'PY'},
			{name: 'Peru', code: 'PE'},
			{name: 'Philippines', code: 'PH'},
			{name: 'Pitcairn', code: 'PN'},
			{name: 'Poland', code: 'PL'},
			{name: 'Portugal', code: 'PT'},
			{name: 'Puerto Rico', code: 'PR'},
			{name: 'Qatar', code: 'QA'},
			{name: 'Reunion', code: 'RE'},
			{name: 'Romania', code: 'RO'},
			{name: 'Russian Federation', code: 'RU'},
			{name: 'Rwanda', code: 'RW'},
			{name: 'Saint Helena', code: 'SH'},
			{name: 'Saint Kitts and Nevis', code: 'KN'},
			{name: 'Saint Lucia', code: 'LC'},
			{name: 'Saint Pierre and Miquelon', code: 'PM'},
			{name: 'Saint Vincent and the Grenadines', code: 'VC'},
			{name: 'Samoa', code: 'WS'},
			{name: 'San Marino', code: 'SM'},
			{name: 'Sao Tome and Principe', code: 'ST'},
			{name: 'Saudi Arabia', code: 'SA'},
			{name: 'Senegal', code: 'SN'},
			{name: 'Serbia and Montenegro', code: 'CS'},
			{name: 'Seychelles', code: 'SC'},
			{name: 'Sierra Leone', code: 'SL'},
			{name: 'Singapore', code: 'SG'},
			{name: 'Slovakia', code: 'SK'},
			{name: 'Slovenia', code: 'SI'},
			{name: 'Solomon Islands', code: 'SB'},
			{name: 'Somalia', code: 'SO'},
			{name: 'South Africa', code: 'ZA'},
			{name: 'South Georgia and the South Sandwich Islands', code: 'GS'},
			{name: 'Spain', code: 'ES'},
			{name: 'Sri Lanka', code: 'LK'},
			{name: 'Sudan', code: 'SD'},
			{name: 'Suriname', code: 'SR'},
			{name: 'Svalbard and Jan Mayen', code: 'SJ'},
			{name: 'Swaziland', code: 'SZ'},
			{name: 'Sweden', code: 'SE'},
			{name: 'Switzerland', code: 'CH'},
			{name: 'Syrian Arab Republic', code: 'SY'},
			{name: 'Taiwan, Province of China', code: 'TW'},
			{name: 'Tajikistan', code: 'TJ'},
			{name: 'Tanzania, United Republic of', code: 'TZ'},
			{name: 'Thailand', code: 'TH'},
			{name: 'Timor-Leste', code: 'TL'},
			{name: 'Togo', code: 'TG'},
			{name: 'Tokelau', code: 'TK'},
			{name: 'Tonga', code: 'TO'},
			{name: 'Trinidad and Tobago', code: 'TT'},
			{name: 'Tunisia', code: 'TN'},
			{name: 'Turkey', code: 'TR'},
			{name: 'Turkmenistan', code: 'TM'},
			{name: 'Turks and Caicos Islands', code: 'TC'},
			{name: 'Tuvalu', code: 'TV'},
			{name: 'Uganda', code: 'UG'},
			{name: 'Ukraine', code: 'UA'},
			{name: 'United Arab Emirates', code: 'AE'},
			{name: 'United Kingdom', code: 'GB'},
			{name: 'United States Minor Outlying Islands', code: 'UM'},
			{name: 'Uruguay', code: 'UY'},
			{name: 'Uzbekistan', code: 'UZ'},
			{name: 'Vanuatu', code: 'VU'},
			{name: 'Venezuela', code: 'VE'},
			{name: 'Vietnam', code: 'VN'},
			{name: 'Virgin Islands, British', code: 'VG'},
			{name: 'Virgin Islands, U.S.', code: 'VI'},
			{name: 'Wallis and Futuna', code: 'WF'},
			{name: 'Western Sahara', code: 'EH'},
			{name: 'Yemen', code: 'YE'},
			{name: 'Zambia', code: 'ZM'},
			{name: 'Zimbabwe', code: 'ZW'},
		];
		// this.myuserRoles = [
		//   { id: 1, role: 'doctor' },
		//   { id: 2, role: 'nurse' },
		//   { id: 3, role: 'servent' },
		// ];
		/*
		this.usaState = [
			{ name: "Alabama", code: "Alabama" },
			{ name: "Alaska", code: "Alaska" },
			{ name: "Arizona", code: "Arizona" },
			{ name: "Arkansas", code: "Arkansas" },
			{ name: "California", code: "California" },
			{ name: "Colorado", code: "Colorado" },
			{ name: "Connecticut", code: "Connecticut" },
			{ name: "Delaware", code: "Delaware" },
			{ name: "District of Columbia", code: "District of Columbia" },
			{ name: "Florida", code: "Florida" },
			{ name: "Georgia", code: "Georgia" },
			{ name: "Hawaii", code: "Hawaii" },
			{ name: "Idaho", code: "Idaho" },
			{ name: "Illinois", code: "Illinois" },
			{ name: "Indiana", code: "Indiana" },
			{ name: "Iowa", code: "Iowa" },
			{ name: "Kansas", code: "Kansas" },
			{ name: "Kentucky", code: "Kentucky" },
			{ name: "Louisiana", code: "Louisiana" },
			{ name: "Maine", code: "Maine" },
			{ name: "Maryland", code: "Maryland" },
			{ name: "Massachusetts", code: "Massachusetts" },
			{ name: "Michigan", code: "Michigan" },
			{ name: "Minnesota", code: "Minnesota" },
			{ name: "Mississippi", code: "Mississippi" },
			{ name: "Missouri", code: "Missouri" },
			{ name: "Montana", code: "Montana" },
			{ name: "Nebraska", code: "Nebraska" },
			{ name: "Nevada", code: "Nevada" },
			{ name: "New Hampshire", code: "New Hampshire" },
			{ name: "New Jersey", code: "New Jersey" },
			{ name: "New Mexico", code: "New Mexico" },
			{ name: "New York", code: "New York" },
			{ name: "North Carolina", code: "North Carolina" },
			{ name: "North Dakota", code: "North Dakota" },
			{ name: "Ohio", code: "Ohio" },
			{ name: "Oklahoma", code: "Oklahoma" },
			{ name: "Pennsylvania", code: "Pennsylvania" },
			{ name: "Rhode Island", code: "Rhode Island" },
			{ name: "South Carolina", code: "South Carolina" },
			{ name: "South Dakota", code: "South Dakota" },
			{ name: "Tennessee", code: "Tennessee" },
			{ name: "Texas", code: "Texas" },
			{ name: "Utah", code: "Utah" },
			{ name: "Vermont", code: "Vermont" },
			{ name: "Virginia", code: "Virginia" },
			{ name: "Washington", code: "Washington" },
			{ name: "West Virginia", code: "West Virginia" },
			{ name: "Wisconsin", code: "Wisconsin" },
			{ name: "Wyoming", code: "Wyoming" },
		]
		*/

		this.usaState = [
			{ name: "Alabama", code: "AL" },
			{ name: "Alaska", code: "AK" },
			{ name: "Arizona", code: "AZ" },
			{ name: "Arkansas", code: "AR" },
			{ name: "California", code: "CA" },
			{ name: "Colorado", code: "CO" },
			{ name: "Connecticut", code: "CT" },
			{ name: "Delaware", code: "DE" },
			{ name: "District of Columbia", code: "District of Columbia" },
			{ name: "Florida", code: "FL" },
			{ name: "Georgia", code: "GA" },
			{ name: "Hawaii", code: "HI" },
			{ name: "Idaho", code: "ID" },
			{ name: "Illinois", code: "IL" },
			{ name: "Indiana", code: "IN" },
			{ name: "Iowa", code: "IA" },
			{ name: "Kansas", code: "KS" },
			{ name: "Kentucky", code: "KY" },
			{ name: "Louisiana", code: "LA" },
			{ name: "Maine", code: "ME" },
			{ name: "Maryland", code: "MD" },
			{ name: "Massachusetts", code: "MA" },
			{ name: "Michigan", code: "MI" },
			{ name: "Minnesota", code: "MN" },
			{ name: "Mississippi", code: "MS" },
			{ name: "Missouri", code: "MO" },
			{ name: "Montana", code: "MT" },
			{ name: "Nebraska", code: "NE" },
			{ name: "Nevada", code: "NV" },
			{ name: "New Hampshire", code: "NH" },
			{ name: "New Jersey", code: "NJ" },
			{ name: "New Mexico", code: "NM" },
			{ name: "New York", code: "NY" },
			{ name: "North Carolina", code: "NC" },
			{ name: "North Dakota", code: "ND" },
			{ name: "Ohio", code: "OH" },
			{ name: "Oklahoma", code: "OK" },
			{ name: "Oregon", code: "OR" },
			{ name: "Pennsylvania", code: "PA" },
			{ name: "Rhode Island", code: "RI" },
			{ name: "South Carolina", code: "SC" },
			{ name: "South Dakota", code: "SD" },
			{ name: "Tennessee", code: "TN" },
			{ name: "Texas", code: "TX" },
			{ name: "Utah", code: "UT" },
			{ name: "Vermont", code: "VT" },
			{ name: "Virginia", code: "VA" },
			{ name: "Washington", code: "WA" },
			{ name: "West Virginia", code: "WV" },
			{ name: "Wisconsin", code: "WI" },
			{ name: "Wyoming", code: "WY" },
		]


		this.myuserRoles = [
			{role: "Cardiovascular Doctor", code: "cardiovascular-doctor"},
			{role: "Other Doctor/Physician", code: "other-doctor-physician"},
			{role: "Nurse/NP/PA", code: "pa-np-nurse"},
			{role: "Medical Trainee/Fellow", code: "medical-trainee-fellow"},
			{role: "Medical Device/Pharma Professional", code: "medical-device-pharma-professional"},
			{role: "Patient", code: "patient"},
			{role: "Curious learner/Other", code: "curious-learner"},
		];

		this.iphone_name = {
			'i386' : 'iPhone Simulator',
			'x86_64' : 'iPhone Simulator',
			'iPhone1,1' : 'iPhone',
			'iPhone1,2' : 'iPhone 3G',
			'iPhone2,1' : 'iPhone 3GS',
			'iPhone3,1' : 'iPhone 4',
			'iPhone3,2' : 'iPhone 4 GSM Rev A',
			'iPhone3,3' : 'iPhone 4 CDMA',
			'iPhone4,1' : 'iPhone 4S',
			'iPhone5,1' : 'iPhone 5 (GSM)',
			'iPhone5,2' : 'iPhone 5 (GSM+CDMA)',
			'iPhone5,3' : 'iPhone 5C (GSM)',
			'iPhone5,4' : 'iPhone 5C (Global)',
			'iPhone6,1' : 'iPhone 5S (GSM)',
			'iPhone6,2' : 'iPhone 5S (Global)',
			'iPhone7,1' : 'iPhone 6 Plus',
			'iPhone7,2' : 'iPhone 6',
			'iPhone8,1' : 'iPhone 6s',
			'iPhone8,2' : 'iPhone 6s Plus',
			'iPhone8,4' : 'iPhone SE (GSM)',
			'iPhone9,1' : 'iPhone 7',
			'iPhone9,2' : 'iPhone 7 Plus',
			'iPhone9,3' : 'iPhone 7',
			'iPhone9,4' : 'iPhone 7 Plus',
			'iPhone10,1' : 'iPhone 8',
			'iPhone10,2' : 'iPhone 8 Plus',
			'iPhone10,3' : 'iPhone X Global',
			'iPhone10,4' : 'iPhone 8',
			'iPhone10,5' : 'iPhone 8 Plus',
			'iPhone10,6' : 'iPhone X GSM',
			'iPhone11,2' : 'iPhone XS',
			'iPhone11,4' : 'iPhone XS Max',
			'iPhone11,6' : 'iPhone XS Max Global',
			'iPhone11,8' : 'iPhone XR',
			'iPhone12,1' : 'iPhone 11',
			'iPhone12,3' : 'iPhone 11 Pro',
			'iPhone12,5' : 'iPhone 11 Pro Max',
			'iPod1,1' : '1st Gen iPod',
			'iPod2,1' : '2nd Gen iPod',
			'iPod3,1' : '3rd Gen iPod',
			'iPod4,1' : '4th Gen iPod',
			'iPod5,1' : '5th Gen iPod',
			'iPod7,1' : '6th Gen iPod',
			'iPod9,1' : '7th Gen iPod',
			'iPad1,1' : 'iPad',
			'iPad1,2' : 'iPad 3G',
			'iPad2,1' : '2nd Gen iPad',
			'iPad2,2' : '2nd Gen iPad GSM',
			'iPad2,3' : '2nd Gen iPad CDMA',
			'iPad2,4' : '2nd Gen iPad New Revision',
			'iPad3,1' : '3rd Gen iPad',
			'iPad3,2' : '3rd Gen iPad CDMA',
			'iPad3,3' : '3rd Gen iPad GSM',
			'iPad2,5' : 'iPad mini',
			'iPad2,6' : 'iPad mini GSM+LTE',
			'iPad2,7' : 'iPad mini CDMA+LTE',
			'iPad3,4' : '4th Gen iPad',
			'iPad3,5' : '4th Gen iPad GSM+LTE',
			'iPad3,6' : '4th Gen iPad CDMA+LTE',
			'iPad4,1' : 'iPad Air (WiFi)',
			'iPad4,2' : 'iPad Air (GSM+CDMA)',
			'iPad4,3' : '1st Gen iPad Air (China)',
			'iPad4,4' : 'iPad mini Retina (WiFi)',
			'iPad4,5' : 'iPad mini Retina (GSM+CDMA)',
			'iPad4,6' : 'iPad mini Retina (China)',
			'iPad4,7' : 'iPad mini 3 (WiFi)',
			'iPad4,8' : 'iPad mini 3 (GSM+CDMA)',
			'iPad4,9' : 'iPad Mini 3 (China)',
			'iPad5,1' : 'iPad mini 4 (WiFi)',
			'iPad5,2' : '4th Gen iPad mini (WiFi+Cellular)',
			'iPad5,3' : 'iPad Air 2 (WiFi)',
			'iPad5,4' : 'iPad Air 2 (Cellular)',
			'iPad6,3' : 'iPad Pro (9.7 inch, WiFi)',
			'iPad6,4' : 'iPad Pro (9.7 inch, WiFi+LTE)',
			'iPad6,7' : 'iPad Pro (12.9 inch, WiFi)',
			'iPad6,8' : 'iPad Pro (12.9 inch, WiFi+LTE)',
			'iPad6,11' : 'iPad (2017)',
			'iPad6,12' : 'iPad (2017)',
			'iPad7,1' : 'iPad Pro 2nd Gen (WiFi)',
			'iPad7,2' : 'iPad Pro 2nd Gen (WiFi+Cellular)',
			'iPad7,3' : 'iPad Pro 10.5-inch',
			'iPad7,4' : 'iPad Pro 10.5-inch',
			'iPad7,5' : 'iPad 6th Gen (WiFi)',
			'iPad7,6' : 'iPad 6th Gen (WiFi+Cellular)',
			'iPad7,11' : 'iPad 7th Gen 10.2-inch (WiFi)',
			'iPad7,12' : 'iPad 7th Gen 10.2-inch (WiFi+Cellular)',
			'iPad8,1' : 'iPad Pro 3rd Gen (11 inch, WiFi)',
			'iPad8,2' : 'iPad Pro 3rd Gen (11 inch, 1TB, WiFi)',
			'iPad8,3' : 'iPad Pro 3rd Gen (11 inch, WiFi+Cellular)',
			'iPad8,4' : 'iPad Pro 3rd Gen (11 inch, 1TB, WiFi+Cellular)',
			'iPad8,5' : 'iPad Pro 3rd Gen (12.9 inch, WiFi)',
			'iPad8,6' : 'iPad Pro 3rd Gen (12.9 inch, 1TB, WiFi)',
			'iPad8,7' : 'iPad Pro 3rd Gen (12.9 inch, WiFi+Cellular)',
			'iPad8,8' : 'iPad Pro 3rd Gen (12.9 inch, 1TB, WiFi+Cellular)',
			'iPad11,1' : 'iPad mini 5th Gen (WiFi)',
			'iPad11,2' : 'iPad mini 5th Gen',
			'iPad11,3' : 'iPad Air 3rd Gen (WiFi)',
			'iPad11,4' : 'iPad Air 3rd Gen',
			'Watch1,1' : 'Apple Watch 38mm case',
			'Watch1,2' : 'Apple Watch 42mm case',
			'Watch2,6' : 'Apple Watch Series 1 38mm case',
			'Watch2,7' : 'Apple Watch Series 1 42mm case',
			'Watch2,3' : 'Apple Watch Series 2 38mm case',
			'Watch2,4' : 'Apple Watch Series 2 42mm case',
			'Watch3,1' : 'Apple Watch Series 3 38mm case (GPS+Cellular)',
			'Watch3,2' : 'Apple Watch Series 3 42mm case (GPS+Cellular)',
			'Watch3,3' : 'Apple Watch Series 3 38mm case (GPS)',
			'Watch3,4' : 'Apple Watch Series 3 42mm case (GPS)',
			'Watch4,1' : 'Apple Watch Series 4 40mm case (GPS)',
			'Watch4,2' : 'Apple Watch Series 4 44mm case (GPS)',
			'Watch4,3' : 'Apple Watch Series 4 40mm case (GPS+Cellular)',
			'Watch4,4' : 'Apple Watch Series 4 44mm case (GPS+Cellular)',
			'Watch5,1' : 'Apple Watch Series 5 40mm case (GPS)',
			'Watch5,2' : 'Apple Watch Series 5 44mm case (GPS)',
			'Watch5,3' : 'Apple Watch Series 5 40mm case (GPS+Cellular)',
			'Watch5,4' : 'Apple Watch Series 5 44mm case (GPS+Cellular)'
		};

	}

	public getports():any{
		//return this.ports;
		return this.countries;
	}

	public getUSstate():any{
		return this.usaState;
	}

	public getmyuserRoles():any{
		return this.myuserRoles;
	}

	public getIphone_name(model){
		return this.iphone_name[model];
	}



	private doctorRoles: Country[] = [
		new Country({
			id: 1,
			name: 'Cardiovascular Doctor',
			ports: [
				new Port({ id: 1, name: 'EP' , doctorcode: "Cardiovascular Doctor:EP"}),
				new Port({ id: 2, name: 'Invasive', doctorcode: "Cardiovascular Doctor:Invasive" }),
				new Port({ id: 3, name: 'Non invasive' , doctorcode: "Cardiovascular Doctor:Non-Invasive"}),
				new Port({ id: 4, name: 'Surgeon', doctorcode: "Cardiovascular Doctor:Surgeon" }),
				new Port({ id: 5, name: 'Other' , doctorcode: "Cardiovascular Doctor:Other"})
			]
		}), new Country({
			id: 2,
			name: 'Doctor',
			ports: [
				new Port({ id: 6, name: 'Int. Med/FM', doctorcode: "Doctor:Int. Med/FM" }),
				new Port({ id: 7, name: 'Endocrinologist', doctorcode: "Doctor:Endocrinologist" }),
				new Port({ id: 8, name: 'Physiotherapist', doctorcode: "Doctor:Physiotherapist" }),
				new Port({ id: 9, name: 'Other', doctorcode: "Doctor:Other" })
			]
		}), new Country({
			id: 3,
			name: 'PA/NP/Nurse',
			ports: [
				new Port({ id: 10, name: 'PA/NP/RN', doctorcode: "PA/NP/Nurse:PA/NP/RN"}),
				new Port({ id: 11, name: 'Student', doctorcode: "PA/NP/Nurse:Student"}),
				new Port({ id: 12, name: 'Other', doctorcode: "PA/NP/Nurse:Other"})
			]
		}), new Country({
			id: 4,
			name: 'Medical Trainee/Fellow',
			ports: [
				new Port({ id: 13, name: 'Fellow/Resident', doctorcode: "Medical Trainee/Fellow:Fellow/Resident"}),
				new Port({ id: 14, name: 'Student', doctorcode: "Medical Trainee/Fellow:Student"}),
				new Port({ id: 15, name: 'Other', doctorcode: "Medical Trainee/Fellow:Other"})
			]
		}), new Country({
			id: 5,
			name: 'Other Medical Professional',
			ports: [
				new Port({ id: 16, name: 'Ex Physio/Rehab', doctorcode: "Other Medical Professional:Ex Physio/Rehab"}),
				new Port({ id: 17, name: 'Tech', doctorcode: "Other Medical Professional:Tech"}),
				new Port({ id: 18, name: 'Educators', doctorcode: "Other Medical Professional:Educators"}),
				new Port({ id: 19, name: 'Other', doctorcode: "Other Medical Professional:Other"})
			]
		}), new Country({
			id: 6,
			name: 'Healthcare Industry Professional',
			ports: [
				new Port({ id: 20, name: 'Device', doctorcode: "Healthcare Industry Professional:Device"}),
				new Port({ id: 21, name: 'Pharma', doctorcode: "Healthcare Industry Professional:Pharma"}),
				new Port({ id: 22, name: 'Other', doctorcode: "Healthcare Industry Professional:Other"})
			]
		}), new Country({
			id: 7,
			name: 'Patient',
			ports: [
				new Port({ id: 23, name: 'Patient', doctorcode: "Patient:Patient"})
			]
		}), new Country({
			id: 8,
			name: 'Non-Healthcare Professional',
			ports: [
				new Port({ id: 24, name: 'Curious Learner', doctorcode: "Non-Healthcare Professional:Curious Learner"}),
				new Port({ id: 25, name: 'Media', doctorcode: "Non-Healthcare Professional:Media"}),
				new Port({ id: 26, name: 'Other', doctorcode: "Non-Healthcare Professional:Other"})
			]
		})
	];
  	//private portsObservable: Observable<Port[]>;

	// public getCountries(page?: number, size?: number): Country[] {
	
	// 	let doctorRoles = [];

	// 	if (page && size) {
	// 	doctorRoles = this.doctorRoles.slice((page - 1) * size, ((page - 1) * size) + size);
	// 	} else {
	// 	doctorRoles = this.doctorRoles;
	// 	}

	// 	return doctorRoles;
	// }


	public getSpecialitiesPorts(page?: number, size?: number): Port[] {
		//alert('hi getPorts');
		let ports = [];

		this.doctorRoles.forEach(country => {
		  country.ports.forEach(port => {
		    port.country = country;
		    ports.push(port);
		  });
		});

		if (page && size) {
		  ports = ports.slice((page - 1) * size, ((page - 1) * size) + size);
		}

		return ports;
	}

	private patientRoles: Country[] = [
		 new Country({
			id: 1,
			name: 'Patient',
			ports: [
				new Port({ id: 1, name: 'Patient', doctorcode: "Patient:Patient"})
			]
		}), new Country({
			id: 2,
			name: 'Non-Healthcare Professional',
			ports: [
				new Port({ id: 2, name: 'Curious Learner', doctorcode: "Non-Healthcare Professional:Curious Learner"}),
				new Port({ id: 3, name: 'Media', doctorcode: "Non-Healthcare Professional:Media"}),
				new Port({ id: 4, name: 'Other', doctorcode: "Non-Healthcare Professional:Other"})
			]
		})
	];

	public getPatientRoles(page?: number, size?: number): Port[] {
		//alert('hi getPorts');
		let ports = [];

		this.patientRoles.forEach(country => {
		  country.ports.forEach(port => {
		    port.country = country;
		    ports.push(port);
		  });
		});

		if (page && size) {
		  ports = ports.slice((page - 1) * size, ((page - 1) * size) + size);
		}

		return ports;
	}

	private onlyDoctorRoles: Country[] = [
		new Country({
			id: 1,
			name: 'Cardiovascular Doctor',
			ports: [
				new Port({ id: 1, name: 'EP' , doctorcode: "Cardiovascular Doctor:EP"}),
				new Port({ id: 2, name: 'Invasive', doctorcode: "Cardiovascular Doctor:Invasive" }),
				new Port({ id: 3, name: 'Non invasive' , doctorcode: "Cardiovascular Doctor:Non-Invasive"}),
				new Port({ id: 4, name: 'Surgeon', doctorcode: "Cardiovascular Doctor:Surgeon" }),
				new Port({ id: 5, name: 'Other' , doctorcode: "Cardiovascular Doctor:Other"})
			]
		}), new Country({
			id: 2,
			name: 'Doctor',
			ports: [
				new Port({ id: 6, name: 'Int. Med/FM', doctorcode: "Doctor:Int. Med/FM" }),
				new Port({ id: 7, name: 'Endocrinologist', doctorcode: "Doctor:Endocrinologist" }),
				new Port({ id: 8, name: 'Physiotherapist', doctorcode: "Doctor:Physiotherapist" }),
				new Port({ id: 9, name: 'Other', doctorcode: "Doctor:Other" })
			]
		}), new Country({
			id: 3,
			name: 'PA/NP/Nurse',
			ports: [
				new Port({ id: 10, name: 'PA/NP/RN', doctorcode: "PA/NP/Nurse:PA/NP/RN"}),
				new Port({ id: 11, name: 'Student', doctorcode: "PA/NP/Nurse:Student"}),
				new Port({ id: 12, name: 'Other', doctorcode: "PA/NP/Nurse:Other"})
			]
		}), new Country({
			id: 4,
			name: 'Medical Trainee/Fellow',
			ports: [
				new Port({ id: 13, name: 'Fellow/Resident', doctorcode: "Medical Trainee/Fellow:Fellow/Resident"}),
				new Port({ id: 14, name: 'Student', doctorcode: "Medical Trainee/Fellow:Student"}),
				new Port({ id: 15, name: 'Other', doctorcode: "Medical Trainee/Fellow:Other"})
			]
		}), new Country({
			id: 5,
			name: 'Other Medical Professional',
			ports: [
				new Port({ id: 16, name: 'Ex Physio/Rehab', doctorcode: "Other Medical Professional:Ex Physio/Rehab"}),
				new Port({ id: 17, name: 'Tech', doctorcode: "Other Medical Professional:Tech"}),
				new Port({ id: 18, name: 'Educators', doctorcode: "Other Medical Professional:Educators"}),
				new Port({ id: 19, name: 'Other', doctorcode: "Other Medical Professional:Other"})
			]
		}), new Country({
			id: 6,
			name: 'Healthcare Industry Professional',
			ports: [
				new Port({ id: 20, name: 'Device', doctorcode: "Healthcare Industry Professional:Device"}),
				new Port({ id: 21, name: 'Pharma', doctorcode: "Healthcare Industry Professional:Pharma"}),
				new Port({ id: 22, name: 'Other', doctorcode: "Healthcare Industry Professional:Other"})
			]
		})
	];


	public getOnlyDoctorRoles(page?: number, size?: number): Port[] {
		//alert('hi getPorts');
		let ports = [];

		this.onlyDoctorRoles.forEach(country => {
		  country.ports.forEach(port => {
		    port.country = country;
		    ports.push(port);
		  });
		});

		if (page && size) {
		  ports = ports.slice((page - 1) * size, ((page - 1) * size) + size);
		}

		return ports;
	}

}


