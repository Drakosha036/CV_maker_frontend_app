import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  submitted = false;
  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  //formulaire
  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  //prend un paramètre de type “NgForm” qu’on peut voir son contenu dans la console “log”.
  onSubmit() {
    console.log(this.profileForm.value);
    this.submitted = true;
    this.loginThisUser(this.profileForm.value);
    this.resetUserForm(this.profileForm.value);
    //faire redirect sur la page profile
    this.router.navigate(['/profile']);
  }
  loginThisUser(user: any) {
    this.userService.loginUser(user).subscribe((response: any) => {
      console.log(response);
    })
  }
  //permet tout simplement de faire un reset de tous les champs.
  resetUserForm(user: any) {
    this.profileForm.reset();
  }
}
