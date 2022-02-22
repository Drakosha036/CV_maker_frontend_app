import { Component, OnInit } from '@angular/core';
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
  } 

 
  user = {
    first_name:  'Sasha',
    last_name:  'Kostina',
    birthdate:  '1988-02-05',
    city:  'Toulouse',
    availability:  "Immediatement",
  }
  
  
  

}
