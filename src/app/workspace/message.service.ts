import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MessageService {

	private static MESSAGE_PATH: string = './assets/messages';
	constructor(private http: Http) {

	}

	public processMessage(path: string): any {
		return this.http.get(`${MessageService.MESSAGE_PATH}/${path}`, '{responseType: "text"}');
	}
}