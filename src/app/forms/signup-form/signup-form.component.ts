import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router) { }
  
  submitted = false;
  
  ngOnInit(): void {
  }
  


  //formulaire
  profileForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirm_password: new FormControl(''),
  });
  
  //les fonctions appeles en cliquant sur button 
  onSubmit() {
    console.log(this.profileForm.value);
    this.submitted = true;
    //this.createNewUser(this.profileForm.value);
    
    this.resetUserForm(this.profileForm.value);
    //faire redirect sur la page profile
    this.router.navigate(['/login']);
  }
  //permet tout simplement de faire un reset de tous les champs.
  resetUserForm(user: any) {
    this.profileForm.reset();
  }
/*
  createNewUser(user: any) {
    console.log('coucou2');
    this.userService.createUser(user).subscribe((response: any) => {
    console.log(response);
    });
    
  }
  */
}
