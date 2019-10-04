import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {
  constructor() {
    super();
  }

  handleError(errorResponse: HttpErrorResponse | any) {
    console.log('errorResponse :   ->', errorResponse);
    if (errorResponse instanceof HttpErrorResponse) {
      console.log(errorResponse);
      super.handleError(errorResponse);
    }
  }
}
