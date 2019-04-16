 import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';
import { AuthenticationService } from '../../authentication/authentication.service';



@Component({
    selector: 'list',
    templateUrl: 'app/courses/list/list.template.html'
})
export class ListComponent {
    user: any;
    courses: any;
    errorMessage: string;
    constructor(private _coursesService: CoursesService, private _authenticationService:
        AuthenticationService) {
        this.user = _authenticationService.user;
    }
    ngOnInit() {
        this._coursesService.list().subscribe(courses => this.courses
            = courses);

       
    }
}

