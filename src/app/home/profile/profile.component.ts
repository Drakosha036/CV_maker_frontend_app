import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UsersService]
})
export class ProfileComponent implements OnInit {
  //array of users
  users=[];

  constructor(private userService: UsersService) { 

    this.getUsers();
  }

  ngOnInit(): void {
  } 

 
  user = {
    first_name:  'Sasha',
    last_name:  'Kostina',
    birthdate:  '1988-02-05',
    city:  'Toulouse',
    availability:  "Immediatement",
  };
  
  getUsers = () => {
    //en utilisant userService on appelle la methode getAllUsers et puis on subscribe pour Observable
    this.userService.getAllUsers().subscribe(
      data => {
        this.users = data;
        console.log(this.users);
      },
      error => {
        console.log(error);
      }
    )
  }
  
  

}

