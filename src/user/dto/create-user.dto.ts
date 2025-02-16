import { IsEmail, IsInt, IsNotEmpty, IsString, Min } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsInt()
    @Min(18)
    age: number;
}