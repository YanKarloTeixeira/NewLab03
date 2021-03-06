﻿import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoursesRoutes } from './courses.routes';
import { CoursesComponent } from './courses.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component'; 
import { ListAllCoursesComponent } from './listAllCourses/listAllCourses.component'; 
import { ListAllStudentsComponent } from './listAllStudents/listAllStudents.components'; 
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(CoursesRoutes),
    ],
    declarations: [
        CoursesComponent,
        CreateComponent,
        ListComponent,
        ViewComponent,
        EditComponent,
        ListAllCoursesComponent,
        ListAllStudentsComponent,
    ]
})
export class CoursesModule { }
