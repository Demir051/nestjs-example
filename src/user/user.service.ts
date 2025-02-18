import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepositoy: Repository<User>) {

    }

    
    async createUser(createUserDto: CreateUserDto) {
        const user = this.userRepositoy.create(createUserDto);
        const result = await this.userRepositoy.save(user); 
        return {
            message: "User created successfully", result
        }
    }
}
