import { Request } from 'express';
import { AuthService } from './auth.service';
import { Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: Request, res: Response): Promise<string>;
    logout(req: Request, res: Response): string;
}
