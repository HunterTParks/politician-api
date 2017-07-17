import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { apiKey } from '../../api-key';
import { Headers } from '@angular/http';

@Injectable()
export class PoliticianInfoService {

  constructor(private http: Http) {

  }

  GetListOfPoliticians(){
    let headers = new Headers();
    headers.append('X-API-Key', apiKey);
    console.log(apiKey);

    return this.http.get('https://api.propublica.org/congress/v1/115/senate/members.json', { headers: headers });
  }
}
