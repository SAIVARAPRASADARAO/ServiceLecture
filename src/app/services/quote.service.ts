import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor( 
    // Angular Modules 
    private http: HttpClient 
    ) { } 
    public get(url: string, options?: any) { 
    return this.http.get(url, options); 
    }}