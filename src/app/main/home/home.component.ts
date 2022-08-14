import { Component, OnInit } from '@angular/core';
import { CateProject } from 'src/app/model/projects/cate-project.model';
import { Process, Projects } from 'src/app/model/projects/projects.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  step="step1";
  
  project:Projects[]=[];
  cateProject:CateProject[]=[];
  process:Process[]=[];
  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
    this.getProject();
    this.getCateProject();
    this.getProcess();
  }

  getProject(){
    this.projectService.getAllProject().subscribe((res=>{
      this.project=res;
    }))
  }
  getCateProject(){
    this.projectService.getAllCateProject().subscribe((data=>{
      this.cateProject=data;
    }))
  }
  getProcess(){
    this.projectService.getAllProcess().subscribe((any=>{
      this.process=any;
      
    }))
  }
}
