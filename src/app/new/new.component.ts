import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { PostService } from '../post.service'
import { UserData } from '../shared'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  users: Array<UserData>

  userId: number
  body: string
  title: string

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {

    this.postService.getUsers()
      .then(users => {
        this.users = <Array<UserData>>users
      });

  }

  save() {
    this.postService.save(this.userId, this.title, this.body)
      .then(data => {
        //alert(JSON.stringify(data))
        this.router.navigateByUrl('/main')
      }, err => {
        console.log(err)
      });
  }

}
