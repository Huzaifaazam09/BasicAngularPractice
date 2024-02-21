import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class Usersdata2Service {

  // url = "https://jsonplaceholder.typicode.com/posts/1/comments"
  url = '/assets/db.json'

  constructor(private http: HttpClient) { }
  users()
  {
    return this.http.get(this.url)
  }

  saveUsers(data6:any)
  {
    return this.http.post(this.url,data6);
  }
}
