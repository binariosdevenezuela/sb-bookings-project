export declare class ResponseService {
  success(
    message: string,
    data?: any,
    statusCode?: number
  ): {
    statusCode: number;
    message: string;
    data: any;
  };
  error(
    message: string,
    statusCode?: number,
    errors?: any
  ): {
    statusCode: number;
    message: string;
    errors: any;
  };
}
