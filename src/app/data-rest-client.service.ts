import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataObject, Employee } from './types/Employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class DataRestClientService {
  getDataRows(url: string): Observable<DataObject> {
    return this.http.get<DataObject>(url.concat("?page=1&size=23"))
  }

  constructor(private http: HttpClient) { }
}
