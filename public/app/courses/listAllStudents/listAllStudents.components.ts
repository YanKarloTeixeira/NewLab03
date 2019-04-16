import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';
import { AuthenticationService } from '../../authentication/authentication.service';

 

@Component({
    selector: 'listAllStudents',
    templateUrl: 'app/courses/listAllStudents/listAllStudents.template.html'
})
export class ListAllStudentsComponent {
    user: any;
    courses: any;
    users: any;
    errorMessage: string;
    constructor(private _coursesService: CoursesService, private _authenticationService:
        AuthenticationService) {
        console.log("in constructor");
        this.user = _authenticationService.user;
    }
    ngOnInit() {
        console.log("in ListAllStudentsComponent subscribing");
        this._coursesService.listAllStudents().subscribe(courses => this.courses
            = courses);
        console.log(this.courses + " in end of ngonit  ListAllStudentsComponent  user is  " + this.user);

    }
}

