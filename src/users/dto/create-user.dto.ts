import { IsDate, IsEmail, IsNotEmpty, IsOptional, IsString, Min, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({ message: 'Имя не должно быть пустым' })
    @IsString({ message: 'Имя пользователя должно быть строкой' })
    firstName: string;

    @IsNotEmpty({ message: 'Фамилия не должна быть пустой' })
    @IsString({ message: 'Фамилия пользователя должна быть строкой' })
    lastName: string;

    @IsString({ message: 'URL аватара должен быть строкой' })
    @IsOptional()
    avatarUrl: string;

    @IsNotEmpty({ message: 'Email не должен быть пустым' })
    @IsEmail({}, { message: 'Некорректный формат email' })
    @IsString({ message: 'Email должен быть строкой' })
    email: string;

    @IsString({ message: 'Пароль должен быть строкой' })
    @IsNotEmpty({ message: 'Пароль не должен быть пустым' })
    @MinLength(6, { message: 'Пароль должен быть не менее 6 символов' })
    password: string;

    @IsDate({ message: 'Дата рождения должна быть датой' })
    @IsNotEmpty({ message: 'Дата рождения не должна быть пустой' })
    dateOfBirth: string;
}
