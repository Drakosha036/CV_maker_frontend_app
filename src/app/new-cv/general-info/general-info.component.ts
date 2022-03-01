import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent implements OnInit {


  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }

  //formulaire
  profileForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    birthday: new FormControl(''),
    city: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl('')
  });

  onSubmit() {
    this.submitted = true;
  }

}
