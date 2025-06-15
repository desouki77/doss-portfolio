import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';
import { Services } from './entities/services.entity';
import { Projects } from 'src/projects/entities/projects.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Services, Projects])],
  controllers: [ServicesController],
  providers: [ServicesService],
  exports: [ServicesService],
})
export class ServicesModule {}
