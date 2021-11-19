import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskDetailsComponent } from './pages/task-details/task-details.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { TeamsListComponent } from './pages/teams-list/teams-list.component';
import { TaskCrudFormComponent } from './components/task-crud-form/task-crud-form.component';
import { TeamCrudFormComponent } from './components/team-crud-form/team-crud-form.component';
import { ProjectCrudFormComponent } from './components/project-crud-form/project-crud-form.component';
import { ActionsCrudFormComponent } from './components/actions-crud-form/actions-crud-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TaskListComponent,
    TaskDetailsComponent,
    ProjectDetailsComponent,
    ProjectListComponent,
    TeamsListComponent,
    TaskCrudFormComponent,
    TeamCrudFormComponent,
    ProjectCrudFormComponent,
    ActionsCrudFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
