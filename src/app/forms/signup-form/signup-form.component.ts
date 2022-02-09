import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }
  submitted = false;

  signupForm: any = {
    lastName : '',
    firstName : '',
    email : '',
    password : '',
    confirmPassword : '',
  }
  
  //prend un paramètre de type “NgForm” qu’on peut voir son contenu dans la console “log”.
  onFormSubmit(userForm: NgForm) {
    console.log(userForm);
    this.submitted = true;
  }
  //permet tout simplement de faire un reset de tous les champs.
  resetUserForm(userForm: NgForm) {
    userForm.resetForm();
  }

  createNewUser() {
    console.log('coucou2');
    this.userService.createUser('Testing').subscribe((response: any) => {
      console.log(response);
    });
    
  }
}
