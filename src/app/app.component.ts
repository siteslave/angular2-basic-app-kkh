import { Component } from '@angular/core';
import { UserData } from './shared'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name
  title = 'app works!'
  myName: string = 'Angular'
  myName2: string
  public _title: string
  private _name: string

  username1: string
  username2: string
  fullname1: string
  fullname2: string

  user: UserData
  user2: UserData

  users1: Array<UserData>
  users2: Array<UserData>

  constructor() {

    this.users1 = [
      { id: 1, fullname: 'Satit Rianpit', username: 'satit' },
      { id: 2, fullname: 'John Doe', username: 'john' },
    ]
    this.users2 = [
      { id: 3, fullname: 'xxxx yyyyyy', username: 'xxxx' },
      { id: 4, fullname: 'aaaa bbbbb', username: 'aabb' },
    ]

    this.myName2 = 'NodeJS'

    this.user = { username: 'xxx', fullname: 'yyyyy' }
    this.user = { username: 'xxx' }
  
    
    this.username1 = 'satit'
    this.username2 = 'monalisa'

    this.fullname1 = 'Satit Rianpit'
    this.fullname2 = 'John Doe'
  }

  showName(username: string, password?: string) {
    alert(this.myName)
  } 
}
