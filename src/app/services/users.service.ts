import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Users } from '../model/users';
import { WebRequestService } from '../web-request.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

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

  constructor(private webReqService: WebRequestService) {

  }

  createUser(user: any) {
    //we want to send a web request to create a User
    console.log('no errors');
    return this.webReqService.post('create', { user });
  }

}
