import {
  ArrayNotEmpty,
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateServiceDto {
  @IsString()
  serviceName: string;

  @IsString()
  serviceImage: string;

  @IsString()
  serviceDescription: string;

  @IsOptional()
  @IsString()
  serviceDetails?: string;

  //that will contain array of the project ids that are related to this service
  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  serviceProjects?: number[];
}
