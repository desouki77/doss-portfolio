import { IsString } from 'class-validator';

export class CreateContactDto {
  @IsString()
  contactTitle: string;

  @IsString()
  contactType: string;

  @IsString()
  contactValue: string;
}
