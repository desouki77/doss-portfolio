import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dtos/create-service.dto';
import { UpdateServiceDto } from './dtos/update-service.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('services')
@ApiTags('Services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  getServices() {
    return this.servicesService.findAll();
  }

  @Get(':id')
  getService(@Param('id', ParseIntPipe) id: number) {
    return this.servicesService.findOne(id);
  }

  @Post()
  createService(@Body() createServiceDto: CreateServiceDto) {
    return this.servicesService.create(createServiceDto);
  }

  @Patch(':id')
  updateService(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateServiceDto: UpdateServiceDto,
  ) {
    return this.servicesService.update(id, updateServiceDto);
  }

  @Put(':id')
  replaceService(
    @Param('id', ParseIntPipe) id: number,
    @Body() createServiceDto: CreateServiceDto,
  ) {
    return this.servicesService.replace(id, createServiceDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteService(@Param('id', ParseIntPipe) id: number) {
    return this.servicesService.remove(id);
  }
}
