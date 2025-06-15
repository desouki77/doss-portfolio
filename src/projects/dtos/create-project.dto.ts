import {
  ArrayNotEmpty,
  IsArray,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateProjectDto {
  @IsString()
  projectName: string;

  @IsString()
  projectthumbnail: string;

  @IsString()
  projectDescription: string;

  @IsUrl()
  @IsOptional()
  projectURL?: string;

  @IsUrl()
  projectGithub: string;

  @IsString()
  projectPreview: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  projectImages: string[];
}
