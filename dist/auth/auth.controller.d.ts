import { Request } from 'express';
import { AuthService } from './auth.service';
import { ResponseService } from 'src/response/response.service';
import { Response } from 'express';
export declare class AuthController {
  private readonly authService;
  private readonly responseService;
  constructor(authService: AuthService, responseService: ResponseService);
  login(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<string, any>>>;
  logout(req: Request, res: Response): Response<any, Record<string, any>>;
}
