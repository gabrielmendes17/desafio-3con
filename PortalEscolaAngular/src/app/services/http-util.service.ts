import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpUtilService {

  constructor(private http: HttpClient) { }

  headers() {
    let httpHeaders: HttpHeaders = new HttpHeaders();
      httpHeaders = httpHeaders.set(
        'Content-Type',
        'application/json');
    return { headers: httpHeaders };
  }

  get(url: string): Observable<any> {
    return this.http.get(url, this.headers());
  }

  post(url: string, parameters: any): Observable<any> {
    return this.http.post(url, parameters, this.headers());
  }
  teste() {
    console.log('teste');
  }
}
