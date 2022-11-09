import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	// Implementing OnInit
	constructor(private http: HttpClient) {}
	title = 'api-angular';
	ngOnInit() {
		// API Call
		let headers = new HttpHeaders({
			'HTTPGET':'gridpoints'
		});
		this.http
			.get<any>('https://api.weather.gov/gridpoints/DTX/65,33/forecast', {
				headers: headers
			})
			.subscribe(data => {
				console.log(data);
			});
	}
}