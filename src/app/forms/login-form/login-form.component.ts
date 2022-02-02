import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //prend un paramètre de type “NgForm” qu’on peut voir son contenu dans la console “log”.
  onFormSubmit(userForm: NgForm) {
    console.log(userForm);
  }
  //permet tout simplement de faire un reset de tous les champs.
  resetUserForm(userForm: NgForm) {
    userForm.resetForm();
  }
}
