import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async activeUsers() {
        return await this.userRepository.find();
    }

    async createUser(createUserDto: CreateUserDto) {
        const user = this.userRepository.create(createUserDto);
        const result = await this.userRepository.save(user); 
        return {
            message: "User created successfully", 
            result
        };
    }

    async updateUser(id: string, updateUserDto: UpdateUserDto) {
        const user = await this.userRepository.findOne({ where: { id: Number(id) } });
        if (!user) {
            throw new NotFoundException('User not found');
        }
        await this.userRepository.update(Number(id), updateUserDto);
        const updatedUser = await this.userRepository.findOne({ where: { id: Number(id) } });
        return {
            message: "User updated successfully",
            updatedUser
        };
    }

    async deleteUser(id: string) {
        const user = await this.userRepository.findOne({ where: { id: Number(id) } });
        if (!user) {
            throw new NotFoundException('User not found');
        }
        await this.userRepository.delete(id);
        return {
            message: "User deleted successfully",
            deletedUser: user
        };
    }
}