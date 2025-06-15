import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Projects } from './entities/projects.entity';
import { CreateProjectDto } from './dtos/create-project.dto';
import { UpdateProjectDto } from './dtos/update-project.dto';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Projects)
    private projectsRepository: Repository<Projects>,
  ) {}

  /**
   * Find all projects with their related services
   * @returns Promise with array of all projects
   */
  async findAll(): Promise<Projects[]> {
    return this.projectsRepository.find({
      relations: ['services'],
    });
  }

  /**
   * Find a specific project by ID
   * @param id The ID of the project to find
   * @returns Promise with the found project
   */
  async findOne(id: number): Promise<Projects> {
    const project = await this.projectsRepository.findOne({
      where: { id },
      relations: ['services'],
    });

    if (!project) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }

    return project;
  }

  /**
   * Create a new project
   * @param createProjectDto DTO containing project data
   * @returns Promise with the created project
   */
  async create(createProjectDto: CreateProjectDto): Promise<Projects> {
    // Create a new project instance
    const newProject = this.projectsRepository.create({
      projectName: createProjectDto.projectName,
      projectthumbnail: createProjectDto.projectthumbnail,
      projectDescription: createProjectDto.projectDescription,
      projectURL: createProjectDto.projectURL,
      projectGithub: createProjectDto.projectGithub,
      projectPreview: createProjectDto.projectPreview,
      projectImages: createProjectDto.projectImages,
    });

    // Save the project to the database
    return this.projectsRepository.save(newProject);
  }

  /**
   * Update a project partially
   * @param id The ID of the project to update
   * @param updateProjectDto DTO containing the fields to update
   * @returns Promise with the updated project
   */
  async update(
    id: number,
    updateProjectDto: UpdateProjectDto,
  ): Promise<Projects> {
    // First find the project
    const project = await this.findOne(id);

    // Update properties if provided
    if (updateProjectDto.projectName) {
      project.projectName = updateProjectDto.projectName;
    }
    if (updateProjectDto.projectthumbnail) {
      project.projectthumbnail = updateProjectDto.projectthumbnail;
    }
    if (updateProjectDto.projectDescription) {
      project.projectDescription = updateProjectDto.projectDescription;
    }
    if (updateProjectDto.projectURL !== undefined) {
      project.projectURL = updateProjectDto.projectURL;
    }
    if (updateProjectDto.projectGithub) {
      project.projectGithub = updateProjectDto.projectGithub;
    }
    if (updateProjectDto.projectPreview) {
      project.projectPreview = updateProjectDto.projectPreview;
    }
    if (updateProjectDto.projectImages) {
      project.projectImages = updateProjectDto.projectImages;
    }

    // Save the updated project
    return this.projectsRepository.save(project);
  }

  /**
   * Replace a project completely
   * @param id The ID of the project to replace
   * @param updateProjectDto DTO containing all project data
   * @returns Promise with the replaced project
   */
  async replace(
    id: number,
    createProjectDto: CreateProjectDto,
  ): Promise<Projects> {
    // First find the project to ensure it exists
    await this.findOne(id);

    // Create a new project object with the provided data
    const updatedProject = this.projectsRepository.create({
      id, // Include the ID to update the existing record
      projectName: createProjectDto.projectName,
      projectthumbnail: createProjectDto.projectthumbnail,
      projectDescription: createProjectDto.projectDescription,
      projectURL: createProjectDto.projectURL,
      projectGithub: createProjectDto.projectGithub,
      projectPreview: createProjectDto.projectPreview,
      projectImages: createProjectDto.projectImages,
    });

    // Save the replaced project
    return this.projectsRepository.save(updatedProject);
  }

  /**
   * Remove a project by ID
   * @param id The ID of the project to remove
   * @returns Promise with the removal result
   */
  async remove(id: number): Promise<void> {
    // First find the project to ensure it exists
    const project = await this.findOne(id);

    // Remove the project
    await this.projectsRepository.remove(project);
  }

  /**
   * Find projects by IDs
   * @param ids Array of project IDs to find
   * @returns Promise with array of found projects
   */
  async findByIds(ids: number[]): Promise<Projects[]> {
    return this.projectsRepository.findByIds(ids);
  }
}
