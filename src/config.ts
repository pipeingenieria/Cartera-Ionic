import { Injectable } from '@angular/core';

@Injectable()
export class Config {
	public wordpressApiUrl = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
}

export const firebaseConfig = {
	fire: {
		apiKey: "AIzaSyBqJY12uyxRygClLuEV6-TA-mJsMUvnqJY",
		authDomain: "cartera-377cb.firebaseapp.com",
		databaseURL: "https://cartera-377cb.firebaseio.com",
		projectId: "cartera-377cb",
		storageBucket: "cartera-377cb.appspot.com",
		messagingSenderId: "93649360983"
	}
};
