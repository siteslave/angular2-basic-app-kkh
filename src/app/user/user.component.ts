import { Component, OnInit, Input } from '@angular/core';
import { UserData } from '../shared'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  @Input()
  username: string

  @Input()
  fullname: string

  @Input()
  users: Array<UserData>


  constructor() {

   }

  ngOnInit() {
  }

}
