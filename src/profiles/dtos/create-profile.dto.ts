import { IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  profileTitle: string;

  @IsString()
  profileName: string;

  @IsString()
  profileImage: string;

  @IsString()
  profileBio: string;

  @IsString()
  profileSummary: string;

  @IsString()
  profileSkills: string;

  @IsString()
  profileExperience: string;

  @IsString()
  @IsOptional()
  profileEducation?: string;

  @IsUrl()
  @IsOptional()
  profileGithub?: string;

  @IsUrl()
  @IsOptional()
  profileLinkedin?: string;

  @IsUrl()
  @IsOptional()
  profileEmail?: string;
}
