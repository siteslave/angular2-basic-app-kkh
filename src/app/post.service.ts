import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  constructor(private http: Http) { }

  getList() {
    let url = `http://jsonplaceholder.typicode.com/posts`

    return new Promise((resolve, reject) => {
      let _headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: _headers });

      this.http.get(url, options)
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err))
        //.subscribe(function (data) { }, function (err) { })
    })
  }


}
