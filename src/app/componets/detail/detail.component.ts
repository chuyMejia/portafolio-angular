import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[ProjectService]
})
export class DetailComponent implements OnInit{

	public id:any;
	public url:string;
	public project:any;
	public confirm:boolean;

	constructor(
		private route: ActivatedRoute,
		private _route:Router,
		private _projectService:ProjectService

		){
		this.id = '';
		this.url = Global.url;
		this.confirm = false;
		//this.project = new Project('','','','','',0,'');
	}

	ngOnInit(){

		 this.id = this.route.snapshot.paramMap.get('id');
		 this.getProject(this.id);

		 /*this.route.params.subscribe(params=>{
		 	let id = params.id;
		 	this.getProject(this.id);

		 	});*/



		 console.log(this.id);
	}


	getProject(id:any){

		this._projectService.getProject(id).subscribe(

			response=>{

					//this.project = response.foundDoc;
					//console.log(response);
					this.project = response;
					this.project = this.project['project'];
					console.log(this.project);

					 },
				err=>{ 

					console.log(<any>err);

				}




			);

	}

	deleteProject(id:any){

		this._projectService.deleteProject(id).subscribe(

				response=>{

					//alert('object erase');
					this._route.navigate(['/proyectos']);
					console.log(response);

					},
				err=>{
					console.log(<any>err);
				}	


			);

	}


	confirmation(confirm:boolean){

		this.confirm = confirm;

	}

}