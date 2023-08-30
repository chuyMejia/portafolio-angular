import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers:[ProjectService]
})
export class ProjectsComponent implements OnInit{

	//public projects:Project[];
	public projects:Project[];
	public url:string;

	constructor(
		private _projectService:ProjectService
		){
		this.projects =[];
		this.url = Global.url;

	}



	ngOnInit(){

		this.getProjects();

	}

	getProjects(){

		this._projectService.getProjects().subscribe(
				response=>{

					this.projects = response.allobjects;
					console.log(this.projects);

					 },
				err=>{ 

					console.log(err);

				}


			);

	}

}


