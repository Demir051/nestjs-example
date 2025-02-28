import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: 200, description: 'Return all users' })
    activeUsers() {
        return this.userService.activeUsers();
    }

    @Post("create")
    @ApiOperation({ summary: 'Create a new user' })
    @ApiResponse({ status: 201, description: 'User successfully created' })
    @ApiResponse({ status: 400, description: 'Validation error' }) 
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

    @Put("update/:id")
    @ApiOperation({ summary: 'Update a user' })
    @ApiResponse({ status: 200, description: 'User successfully updated' })
    @ApiResponse({ status: 400, description: 'Validation error' })
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.updateUser(id, updateUserDto);
    }

    @Delete("delete/:id")
    @ApiOperation({ summary: 'Delete a user' })
    @ApiResponse({ status: 200, description: 'User successfully deleted' })
    @ApiResponse({ status: 404, description: 'User not found' })
    delete(@Param('id') id: string) {
        return this.userService.deleteUser(id);
    }
    
}