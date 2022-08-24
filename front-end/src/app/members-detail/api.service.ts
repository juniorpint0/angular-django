import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8000/';
  token = 'Token ea0ba27b9237a83c4bda06a909a79ad6548c219c';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization', this.token);
  constructor(private http: HttpClient) { }

  getMember(id: any): Observable<any> {
    return this.http.get(this.baseUrl + 'members/' + id + '/',
      { headers: this.httpHeaders });
  }
  updateMember(member:any): Observable<any> {
    let body = { name: member.name, surname: member.surname, phone: member.phone};
    return this.http.put(this.baseUrl + 'members/' + member.id + '/', body,
      { headers: this.httpHeaders });
  }
  deleteMember(id:any): Observable<any> {
    
    return this.http.delete(this.baseUrl + 'members/' + id + '/',
      { headers: this.httpHeaders });
  }


}
