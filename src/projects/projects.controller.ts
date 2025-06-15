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
import { CreateProjectDto } from './dtos/create-project.dto';
import { UpdateProjectDto } from './dtos/update-project.dto';
import { ProjectsService } from './projects.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('projects')
@ApiTags('Projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  getProjects() {
    return this.projectsService.findAll();
  }

  @Get(':id')
  getProjectById(@Param('id', ParseIntPipe) id: number) {
    return this.projectsService.findOne(id);
  }

  @Post()
  createProject(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }

  @Patch(':id')
  updateProject(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProjectDto: UpdateProjectDto,
  ) {
    return this.projectsService.update(id, updateProjectDto);
  }

  @Put(':id')
  updateAllProject(
    @Param('id', ParseIntPipe) id: number,
    @Body() createProjectDto: CreateProjectDto,
  ) {
    return this.projectsService.replace(id, createProjectDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteProject(@Param('id', ParseIntPipe) id: number) {
    return this.projectsService.remove(id);
  }
}
