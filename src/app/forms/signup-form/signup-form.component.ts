import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  NgForm, Validators } from '@angular/forms';
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


  //formulaire
  profileForm = new FormGroup({
    last_name: new FormControl(''),
    first_name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirm_password: new FormControl(''),
  });
  
  //prend un paramètre de type “NgForm” qu’on peut voir son contenu dans la console “log”.
  onSubmit() {
    console.log(this.profileForm.value);
    this.submitted = true;
    this.createNewUser(this.profileForm.value);
    this.resetUserForm(this.profileForm.value);
    
  }
  //permet tout simplement de faire un reset de tous les champs.
  resetUserForm(userForm: NgForm) {
    this.profileForm.reset();
  }

  createNewUser(user: any) {
    console.log('coucou2');
    this.userService.createUser(user).subscribe((response: any) => {
      console.log(response);
    });
    
  }
}
