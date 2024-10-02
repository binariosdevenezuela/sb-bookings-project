import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { SignUpDto } from './dto/signup.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    signup(signUpDto: SignUpDto): Promise<import("./entities/user.entity").User>;
    add(createUserDto: CreateUserDto): Promise<void>;
    findAll(): Promise<import("./entities/user.entity").User[]>;
    findOne(id: string): Promise<import("./entities/user.entity").User>;
}
