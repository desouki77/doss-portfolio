import { PartialType } from '@nestjs/mapped-types';
import { CreateProfileDto } from './create-profile.dto';
export class UpdateProfiletDto extends PartialType(CreateProfileDto) {}
