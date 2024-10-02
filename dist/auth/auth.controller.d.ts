import { Request } from 'express';
export declare class AuthController {
    login(req: Request): {
        message: string;
    };
    logout(req: Request): {
        message: string;
    };
}
