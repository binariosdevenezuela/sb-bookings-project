import { Injectable, HttpStatus } from '@nestjs/common';

@Injectable()
export class ResponseService {
  success(
    message: string,
    data: any = null,
    statusCode: number = HttpStatus.OK
  ) {
    return {
      statusCode,
      message,
      data,
    };
  }

  error(
    message: string,
    statusCode: number = HttpStatus.BAD_REQUEST,
    errors: any = null
  ) {
    return {
      statusCode,
      message,
      errors,
    };
  }
}
