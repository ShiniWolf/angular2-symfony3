import {Injectable} from "@angular/core";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BaseService {
    protected baseUrl = process.env.ENV === 'production' ? '/api' : '/app_dev.php/api';

    protected handleError(error: any): Promise<any> {
        console.log('An error occured', error);
        return Promise.reject(error.message || error);
    }
}