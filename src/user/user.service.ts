import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    activeUsers()  {
        return [
            {
                id: 1,
                name: 'John Doe',
                email: "example.com"
            },
            {
                id: 2,
                name: "Ahmet Demir",
                email: "example.com"
            }
        ]
    }
    createUser(createUserDto: CreateUserDto) {
        return {
            message: "User created successfully" , createUserDto
        }
    }
}
