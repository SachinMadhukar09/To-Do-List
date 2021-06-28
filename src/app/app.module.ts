import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HttpHeaders} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// import { IAngularMyDpOptions }


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImgComponent } from './componenets/img/img.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component'

const appRoutes : Routes =[
  { path: '', component:TasksComponent},
  { path: 'about', component:AboutComponent},
  { path: 'home', component:HomeComponent},
  { path: 'taskscomponent', component:TasksComponent},
  { path: '', component:TasksComponent},

  
  

]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent,
    ImgComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes , {enableTracing: true}),
    ReactiveFormsModule,
    // AngularMyDatePickerModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
