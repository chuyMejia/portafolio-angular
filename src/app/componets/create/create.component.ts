import { Component } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProjectService,UploadService]
})
export class CreateComponent {

	public title:string;
	public project:Project;
	public status:string;
	public filesToUpload:Array<File>;
	public url:string;

	constructor(

		private _ProjectService:ProjectService,
		private _UploadService :UploadService

		){	this.title = "CREAR NUEVO PROJECTO";
			this.project = new Project('','','','','',2023,'','');
			this.status = '';
			this.filesToUpload = [] ;
			this.url = Global.url;

			/*
			   public _id:string,

				public description:string,
				public category:string,
				public lags:string,
				public year:number,
				public image:string
			*/


	}


	onSubmit(form:any){

		console.log(this.project);
		this._ProjectService.saveProject(this.project).subscribe(

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
//
			);

	}

	fileChangeEvent(fileInput:any){

		console.log(fileInput);
		this.filesToUpload = <Array<File>>fileInput.target.files;

	}




}
