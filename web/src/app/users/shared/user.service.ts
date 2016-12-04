import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

import {BaseService} from "../../shared/base.service";
import {User} from "./user.model";

@Injectable()
export class UserService extends BaseService {
    private usersUrl = this.baseUrl + '/users';

    constructor(private http: Http) {
        super();
    }

    getUsers(): Promise<User[]> {
        return this.http.get(this.usersUrl)
            .toPromise()
            .then(response => response.json().data as User[])
            .catch(this.handleError);
    }

    getUser(id: number): Promise<User> {
        return this.http.get(this.usersUrl + '/' + id)
            .toPromise()
            .then(response => response.json().data as User)
            .catch(this.handleError);
    }
}