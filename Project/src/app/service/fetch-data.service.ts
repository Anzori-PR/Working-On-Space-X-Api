import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rocket_launches } from '../rocket_launches.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  Api_url: string;

  constructor(private http : HttpClient) { 
    this.Api_url = "https://api.spacexdata.com/v3/launches";
  }

  getData() : Observable<rocket_launches[]>{
    return this.http.get<rocket_launches[]>(this.Api_url);
  }
}
