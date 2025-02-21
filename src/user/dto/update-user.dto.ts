import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
    @ApiProperty({ example: 'John Doe', description: 'The name of the user', required: false })
    name?: string;

    @ApiProperty({ example: 'john.doe@example.com', description: 'The email of the user', required: false })
    email?: string;
}