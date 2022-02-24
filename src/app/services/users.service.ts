import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Users } from '../model/users';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //connexion avec le backend 
  baseUrl = 'http://localhost:8000';  
  httpHeaders = new HttpHeaders({'Content-type': 'application/json', 
  "Authorizations": "Token 60bd20d2a4b0259c64f668e9b934ff100f8413b2", 
  'Access-Control-Allow-Origin': '*' });

  //import le httpClient
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    console.log(this.baseUrl);
    const result = this.http.get(this.baseUrl + '/user/helloworld', 
    {headers: this.httpHeaders});
    console.log(result);
    return this.http.get(this.baseUrl + '/user/helloworld', 
    {headers: this.httpHeaders});
  }

  getUser(id: any): Observable<any> {
    return this.http.get(this.baseUrl + '/id',
    );
  }

  createUser(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }
/*
  updateUser(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
/*
  deleteUser(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAllUsers(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByUsername(username: any): Observable<Users[]> {
    return this.http.get<Users[]>(`${baseUrl}?username=${username}`);
  }
*/
}
  //user: Users;
  //userSubject = new Subject<Users>();
/*
  constructor(private http: HttpClient) { }

  rootURL = '/api';

  getUsers() {
    return this.http.get(this.rootURL + '/users');
  }

  addUser(user: any) {
    return this.http.post(this.rootURL + '/user', {user});
  }
  */
/*
  constructor(private webReqService: WebRequestService) {
  }
  getUsers() {
    return this.webReqService.get('user');
  }
  */
/*
  getUserById() : Users {
    return this.webReqService.get()
  }
  */
/*
  createUser(user: any) {
    //we want to send a web request to create a User
    console.log('no errors');
    console.log(user);
    return this.webReqService.post('user/create', user );
  }

  loginUser(user: any) {
    console.log("user logged in!");
    return this.webReqService.post('user/login', user);
  }

  logoutUser() {
    console.log("Vous etes deconnectes! ");
    return this.webReqService.delete('user/logout');
  }
*/

