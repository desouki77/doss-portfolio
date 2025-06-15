import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';

import { CreateProfileDto } from './dtos/create-profile.dto';
import { UpdateProfiletDto } from './dtos/update-profile.dto';
import { ProfilesService } from './profiles.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('profiles')
@ApiTags('Profiles')
export class ProfilesController {
  constructor(private profilesService: ProfilesService) {}
  @Get()
  getProfiles() {
    return this.profilesService.findAll();
  }
  @Get(':id')
  getProfileById(@Param('id', ParseIntPipe) id: number) {
    return this.profilesService.findOne(id);
  }
  @Post()
  createProfile(@Body() createProfileDto: CreateProfileDto) {
    return this.profilesService.create(createProfileDto);
  }
  @Patch(':id')
  updateProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProfileDto: UpdateProfiletDto,
  ) {
    return this.profilesService.update(id, updateProfileDto);
  }
  @Put(':id')
  updateAllProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() createProfileDto: CreateProfileDto,
  ) {
    return this.profilesService.replace(id, createProfileDto);
  }
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteProfile(@Param('id', ParseIntPipe) id: number) {
    return this.profilesService.remove(id);
  }
}
