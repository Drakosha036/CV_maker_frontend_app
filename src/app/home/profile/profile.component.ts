import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/model/users';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users=[];
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    console.log(this.userService.getUsers());
     
  }

  

}
