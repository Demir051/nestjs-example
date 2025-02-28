import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsInt, IsNotEmpty, IsString, Min } from "class-validator";

export class CreateUserDto {

    @ApiProperty({ example: "Ahmet Demir" })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ example: "example@gmail.com" })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({ example: "strong password" })
    @IsNotEmpty()
    @IsString()
    password: string;

}