import { Component, OnInit } from '@angular/core';
import { news } from 'src/app/model/news/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public keyword:string;
  datas:news[]=[];
  datas3:news[]=[];
  constructor(private _newsService: NewsService) { }

  ngOnInit(): void {
    this.getAllNews();
    this.get3();
  }

  getAllNews() {
   this._newsService.getall().subscribe((data)=>{
     this.datas=data;
   })
  }
  get3(){
    this._newsService.get3News().subscribe((any)=>{
      this.datas3=any;
    })
  }
  Search(){
    if(this.keyword==""){
      this.getAllNews();
    }
    else{
      // this._newsService.Search(this.keyword).subscribe((data)=>{
      //   this.datas=data;
      //   console.log(data);
      // },error=>{
      //   console.log(error);
      // })
    }
   

  }
}
