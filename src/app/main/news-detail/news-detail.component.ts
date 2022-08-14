import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjectService } from 'src/app/services/project.service';
import { Location } from '@angular/common';
import { CateProject } from 'src/app/model/projects/cate-project.model';
import { news } from 'src/app/model/news/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  @Input() news: news; 
  // cateProjects:CateProject[]=[];
  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
   // private cartService:CartService,
    private location: Location

  ) { }

  ngOnInit(): void {
    this.getIdNews();
   
  }
  getIdNews():void{
    const id=(+this.route.snapshot.params["idNew"]);
    //const cate=(+this.route.snapshot.params["cateId"]);
    console.log(`this.route.snapshot.paramMapId = ${JSON.stringify(this.route.snapshot.params)}`);
    this.newsService.getNewsId(id).subscribe(news => this.news = news); 
  }
}
