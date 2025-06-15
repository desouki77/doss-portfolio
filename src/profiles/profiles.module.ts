import { Module } from '@nestjs/common';
import { ProfilesController } from './profiles.controller';
import { ProfilesService } from './profiles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profiles } from './entities/profiles.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Profiles])],
  controllers: [ProfilesController],
  providers: [ProfilesService],
  exports: [ProfilesService],
})
export class ProfilesModule {}
