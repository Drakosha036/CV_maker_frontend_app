import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/model/users';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  //users=[];
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    console.log('ici');
    console.log(this.userService.getUsers());
  }

  user = {
    first_name:  'Sasha',
    last_name:  'Kostina',
    birthdate:  '1988-02-05',
    city:  'Toulouse',
    availability:  "Immediatement",
}
  
  

}
