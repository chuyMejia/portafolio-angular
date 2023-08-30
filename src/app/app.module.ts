import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './componets/about/about.component';
import { ProjectsComponent } from './componets/projects/projects.component';
import { CreateComponent } from './componets/create/create.component';
import { ContactComponent } from './componets/contact/contact.component';
import { ErrorComponent } from './componets/error/error.component';
import { DetailComponent } from './componets/detail/detail.component';
import { EditComponent } from './componets/edit/edit.component';
import { SliderComponent } from './componets/slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    ErrorComponent,
    DetailComponent,
    EditComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
