import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiURL = "https://jsonplaceholder.typicode.com/posts/1/comments";

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // }

  constructor( private httpClient:HttpClient) { }

  pickdata(): Observable<any> {
    return this.httpClient.get(this.apiURL);

 }

  }



