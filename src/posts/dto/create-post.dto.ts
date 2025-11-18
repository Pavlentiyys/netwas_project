import { IsNotEmpty, IsOptional, IsString, isString, MinLength } from 'class-validator';

export class CreatePostDto {
    @IsNotEmpty({ message: 'Название не должно быть пустым'})
    @MinLength(3, { message: 'Название должно быть не менее 3 символов'})
    @IsString({ message: 'Название должно быть строкой'})
    title: string;

    @IsString({ message: 'Описание должно быть строкой'})
    description: string;

    @IsString({ message: 'URL изображения должен быть строкой'})
    @IsOptional()
    imageUrl: string;

    @IsString({ message: 'URL видео должен быть строкой'})
    @IsOptional()
    videoUrl: string;
}
