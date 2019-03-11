import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  @Input()
  appTitle: String;

  constructor() {
  }

  ngOnInit() {
  }

}
