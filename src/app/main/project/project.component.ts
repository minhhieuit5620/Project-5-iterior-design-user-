import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from 'src/app/model/projects/projects.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project:Projects[]=[];
  constructor(
    private projectService:ProjectService,
  ) { }

  ngOnInit(): void {
    this.getAllProject();
  }

  getAllProject(){
    return this.projectService.getAllProject().subscribe((data=>{
      this.project=data;
    }))
  }
}
