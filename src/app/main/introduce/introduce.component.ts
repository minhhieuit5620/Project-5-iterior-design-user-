import { Component, OnInit } from '@angular/core';
import { introduce } from 'src/app/model/introduce/introduce.model';
import { IntroduceService } from 'src/app/services/introduce.service';

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.css']
})
export class IntroduceComponent implements OnInit {

  constructor(private introService:IntroduceService) {}
    
  datas:introduce[]=[];
  
  ngOnInit(): void {
    this.getIntro();
  }
  getIntro(){
    this.introService.getIntroduces().subscribe((data) => {
      this.datas = data;
    })
  }
 
}
