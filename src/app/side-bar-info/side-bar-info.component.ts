import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar-info',
  templateUrl: './side-bar-info.component.html',
  styleUrls: ['./side-bar-info.component.css']
})
export class SideBarInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  user = {
    first_name:  'Sasha',
    last_name:  'Kostina',
    birthdate:  '1988-02-05',
    city:  'Toulouse',
    availability:  "Immediatement",
  };
}
