import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute, Params} from "@angular/router";

import {User} from "../shared/user.model";
import {UserService} from "../shared/user.service";

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'user',
    templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
    user: User;

    constructor(private route: ActivatedRoute, private location: Location, private userService: UserService) {
    }

    goBack(): void {
        this.location.back();
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.userService.getUser(+params['id']))
            .subscribe(user => this.user = user);
    }
}