import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  
  constructor(private http: HttpClient) { }

  getData(size:number,page:number): Observable<any>{
    const url = "https://api.github.com/search/repositories?q=created:%3E2020-06-28&sort=stars&order=desc&per_page="+size+"&page="+page
    return this.http.get<any>(url)
  }
}
