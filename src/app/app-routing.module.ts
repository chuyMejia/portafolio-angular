import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//
import { AboutComponent } from './componets/about/about.component';
import { ProjectsComponent } from './componets/projects/projects.component';
import { CreateComponent } from './componets/create/create.component';
import { ContactComponent } from './componets/contact/contact.component';
import { ErrorComponent } from './componets/error/error.component';
import { DetailComponent } from './componets/detail/detail.component';
import { EditComponent } from './componets/edit/edit.component';


const routes: Routes = [
	{path:'',component:AboutComponent},
	{path:'sobre-mi',component:AboutComponent},
	{path:'proyectos',component:ProjectsComponent},
	{path:'crear-proyecto',component:CreateComponent},
	{path:'contacto',component:ContactComponent},
	{path:'projecto/:id',component:DetailComponent},
	{path:'edit-proyecto/:id',component:EditComponent},
	{path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
