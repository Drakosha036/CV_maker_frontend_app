import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HardSkillsListComponent } from 'src/app/admin/hard-skills-list/hard-skills-list.component';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.css']
})
export class HardSkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hardskillList = [{hardskillText : 'someHardSkill', done : false}];
/*
  onSubmit() {
    //this.hardskills = ;
    console.log(this.hardskillList);
  }
  */
  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }

  hardskillInput = "";
  hardskillAdd() {
    this.hardskillList.push({hardskillText : this.hardskillInput, done: false});
  } 
  


}
