import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataObject, Employee } from './types/Employee';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataRestClientService {
  getDataRows(url: string, page?: number): Observable<DataObject> {
    return this.http.get<DataObject>(url, {
      params: new HttpParams()
        .set('page', page ?? 0)
        .set('size', 10)
    });
  }

  deleteRow(url: string){
    return this.http.delete(url);
  }

  putRow(url: string, employee: Employee){
    return this.http.put(url, employee);
  }

  postRow(url: string, employee: Employee){
    return this.http.post(url, employee);
  }

  constructor(private http: HttpClient) { }
}
