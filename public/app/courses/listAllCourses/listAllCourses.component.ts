 import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';
import { AuthenticationService } from '../../authentication/authentication.service';



@Component({
    selector: 'listAllCourses',
    templateUrl: 'app/courses/listAllCourses/listAllCourses.template.html'
})
export class ListAllCoursesComponent {
    user: any;
    courses: any;
    errorMessage: string;
    constructor(private _coursesService: CoursesService, private _authenticationService:
        AuthenticationService) {
        console.log("in constructor");
        this.user = _authenticationService.user;
    }
    ngOnInit() {
        console.log("in ngonit");
        this._coursesService.list().subscribe(courses => this.courses
            = courses);
        console.log("in end of ngonit" + this.courses+" user is  "+ this.user);

    }
}

