import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable()
export class ServerErrorHandlerService {
    public handleHttpError(error: any) {
        return throwError(() => error.json().error || 'Server error');
    }
}
