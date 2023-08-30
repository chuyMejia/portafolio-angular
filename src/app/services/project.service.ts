import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Project } from '../models/project';
import { Global } from './global';

@Injectable()
export class ProjectService{
	public url:string;


	constructor(
		private _http:HttpClient
		){
		this.url = Global.url;
	}



	testService(){
		return 'test de prueba';

	}

	saveProject(project:any): Observable<any>{

		let params = JSON.stringify(project);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.post(this.url+'/save-project',params,{headers:headers});

		console.log('accion save');
	}

	getProjects(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url+'projects',{headers:headers});
	}

	getProject(id:any){
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.get(this.url+'project/'+id,{headers:headers});	
	}
	deleteProject(id:any){
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.delete(this.url+'project/'+id,{headers:headers});	
	


	}
	updateProject(project:any): Observable<any>{
		let params = JSON.stringify(project);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.put(this.url+'project/'+project._id, params, {headers: headers});
	}

}