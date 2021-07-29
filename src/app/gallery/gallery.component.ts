import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map, tap } from'rxjs/operators';

import {GithubService} from '../services/github.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

	repoItems:any;
  pages:Array<number>=[];
  totalPages:number=34;
  size:number=30;
  currentPage:number=1;
  

  constructor(private githubService: GithubService) { }
  ngOnInit(){}

  getRepos(){

    this.githubService.getData(this.size,this.currentPage).subscribe((data) => {
      console.log(data);
      this.repoItems=data;
      this.pages=new Array(this.totalPages);
    },err=>{console.log(err);}
    )
  }
  
  
  goToPage(i: number){
  this.currentPage=i+1;
  this.getRepos();
  }

}
