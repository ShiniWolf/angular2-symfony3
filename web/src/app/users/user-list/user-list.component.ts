import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {User} from "../shared/user.model";
import {UserService} from "../shared/user.service";

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
    users: User[] = [];

    constructor(private router: Router, private userService: UserService) {
    }

    getUsers(): void {
        this.userService.getUsers().then(users => this.users = users);
    }

    onSelect(user: User): void {
        this.router.navigate(['/users', user.id]);
    }

    ngOnInit(): void {
        this.getUsers();
    }
}