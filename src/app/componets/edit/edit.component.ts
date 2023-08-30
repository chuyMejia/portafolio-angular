import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router,Params } from '@angular/router';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[ProjectService,UploadService]
})
export class EditComponent implements OnInit{

	public id:any;
	public url:string;
	public title:string;
	public project:any;
	public status:string;
	public filesToUpload:Array<File>;
	public save_project:any;

	

	constructor(
		private route: ActivatedRoute,
		private _route:Router,
		private _projectService:ProjectService,
		private _UploadService :UploadService

		){
		this.id = '';
		this.url = Global.url;
		this.title = "EDITAR PROJECTO";
		this.project = new Project('','','','','',2023,'','');
		this.status = '';
		this.filesToUpload = [] ;
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
					console.log(response);

					 },
				err=>{ 

					console.log(<any>err);

				}




			);

}


/*onSubmit(form:any){

		console.log(this.project);
		this._projectService.saveProject(this.project).subscribe(

			response=>{
				if(response.project){

					this.project = response.project;
					//subir imagen
					this._UploadService.makeFileRequest(Global.url+'upload-image/'+response.project._id,[],this.filesToUpload,'image').then((result:any)=>{
							this.status = 'success';
							console.log(result);
							form.reset();

						});
					}else{
					this.status = 'failed';
					}
				console.log(response);

				},err=>{
					console.log(<any>err);
				}
			);
	}*/


  onSubmit(form:any){
  	this._projectService.updateProject(this.project).subscribe(
		response => {
  			if(response.project){
				
				// Subir la imagen
				if(this.filesToUpload){
					this._UploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image')
					.then((result:any) => {
						this.save_project = result.project;
						this.status = 'success';
					});
				}else{
					this.save_project = response.project;
					this.status = 'success';
				}
				
			}else{
				this.status = 'failed';
			}
  		},
  		error => {
  			console.log(<any>error);
  		}
  	);
  }



	fileChangeEvent(fileInput:any){

		console.log(fileInput);
		this.filesToUpload = <Array<File>>fileInput.target.files;

	}
}