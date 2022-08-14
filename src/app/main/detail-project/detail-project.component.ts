import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projects } from 'src/app/model/projects/projects.model';
import { ProjectService } from 'src/app/services/project.service';
import { Location } from '@angular/common';
import { CateProject } from 'src/app/model/projects/cate-project.model';

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.css']
})
export class DetailProjectComponent implements OnInit {

  @Input() project: Projects; cateProjects:CateProject;
  // cateProjects:CateProject[]=[];
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
   // private cartService:CartService,
    private location: Location

  ) { }

  ngOnInit(): void {
    this.getIdProject();
    this.getIdCateProject();
  }
  getIdProject():void{
    const id=(+this.route.snapshot.params["Id_project"]);
    //const cate=(+this.route.snapshot.params["cateId"]);
    console.log(`this.route.snapshot.paramMapId = ${JSON.stringify(this.route.snapshot.params)}`);
    this.projectService.getProjectId(id).subscribe(project => this.project = project); 
  }
  getIdCateProject()
  {

    const firstParam = (+this.route.snapshot.params["Id_project"]);
    const secondParam = (+this.route.snapshot.params["Id_cate_project"]);
    console.log("a"+firstParam+" b:"+secondParam);
    this.projectService.getCatID(secondParam).subscribe(project => this.cateProjects = project); 
    //   this.cateProjects=res;
     
    // })
  }
}
