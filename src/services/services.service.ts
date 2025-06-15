import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Services } from './entities/services.entity';
import { CreateServiceDto } from './dtos/create-service.dto';
import { UpdateServiceDto } from './dtos/update-service.dto';
import { Projects } from 'src/projects/entities/projects.entity';

@Injectable()
export class ServicesService {
  constructor(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    @InjectRepository(Services)
    public servicesRepository: Repository<Services>,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    @InjectRepository(Projects)
    private projectsRepository: Repository<Projects>,
  ) {}

  /**
   * Find all services with their related projects
   * @returns Promise with array of all services
   */
  async findAll(): Promise<Services[]> {
    return this.servicesRepository.find({
      relations: ['serviceProjects'],
    });
  }

  /**
   * Find a specific service by ID
   * @param id The ID of the service to find
   * @returns Promise with the found service
   */
  async findOne(id: number): Promise<Services> {
    const service = await this.servicesRepository.findOne({
      where: { id },
      relations: ['serviceProjects'],
    });
    if (!service) {
      throw new NotFoundException(`Service with ID ${id} not found`);
    }
    return service;
  }

  /**
   * Create a new service
   * @param createServiceDto DTO containing service data
   * @returns Promise with the created service
   */
  async create(createServiceDto: CreateServiceDto): Promise<Services> {
    // Create a new service instance
    const newService = this.servicesRepository.create({
      serviceName: createServiceDto.serviceName,
      serviceImage: createServiceDto.serviceImage,
      serviceDescription: createServiceDto.serviceDescription,
      serviceDetails: createServiceDto.serviceDetails,
    });

    // If service projects are provided, find and associate them
    if (
      createServiceDto.serviceProjects &&
      createServiceDto.serviceProjects.length > 0
    ) {
      const projectIds = createServiceDto.serviceProjects;
      const projects = await this.projectsRepository.findByIds(projectIds);

      // Check if all projects were found
      if (projects.length !== projectIds.length) {
        const foundIds = projects.map((project) => project.id);
        const missingIds = projectIds.filter((id) => !foundIds.includes(id));
        throw new NotFoundException(
          `Projects with IDs ${missingIds.join(', ')} not found`,
        );
      }
      newService.serviceProjects = projects;
    }
    // Save the service to the database
    return this.servicesRepository.save(newService);
  }

  /**
   * Update a service partially
   * @param id The ID of the service to update
   * @param updateServiceDto DTO containing the fields to update
   * @returns Promise with the updated service
   */
  async update(
    id: number,
    updateServiceDto: UpdateServiceDto,
  ): Promise<Services> {
    // First find the service
    const service = await this.findOne(id);

    // Update basic properties if provided
    if (updateServiceDto.serviceName) {
      service.serviceName = updateServiceDto.serviceName;
    }
    if (updateServiceDto.serviceImage) {
      service.serviceImage = updateServiceDto.serviceImage;
    }
    if (updateServiceDto.serviceDescription) {
      service.serviceDescription = updateServiceDto.serviceDescription;
    }
    if (updateServiceDto.serviceDetails !== undefined) {
      service.serviceDetails = updateServiceDto.serviceDetails;
    }

    // Update related projects if provided
    if (updateServiceDto.serviceProjects) {
      const projectIds = updateServiceDto.serviceProjects;
      const projects = await this.projectsRepository.findByIds(projectIds);

      // Check if all projects were found
      if (projects.length !== projectIds.length) {
        const foundIds = projects.map((project) => project.id);
        const missingIds = projectIds.filter((id) => !foundIds.includes(id));
        throw new NotFoundException(
          `Projects with IDs ${missingIds.join(', ')} not found`,
        );
      }

      service.serviceProjects = projects;
    }
    // Save the updated service
    return this.servicesRepository.save(service);
  }

  /**
   * Replace a service completely
   * @param id The ID of the service to replace
   * @param updateServiceDto DTO containing all service data
   * @returns Promise with the replaced service
   */
  async replace(
    id: number,
    updateServiceDto: CreateServiceDto,
  ): Promise<Services> {
    // First find the service to ensure it exists
    await this.findOne(id);

    // Create a new service object with the provided data
    const updatedService = this.servicesRepository.create({
      id, // Include the ID to update the existing record
      serviceName: updateServiceDto.serviceName,
      serviceImage: updateServiceDto.serviceImage,
      serviceDescription: updateServiceDto.serviceDescription,
      serviceDetails: updateServiceDto.serviceDetails,
    });

    // Handle related projects
    if (
      updateServiceDto.serviceProjects &&
      updateServiceDto.serviceProjects.length > 0
    ) {
      const projectIds = updateServiceDto.serviceProjects;
      const projects = await this.projectsRepository.findByIds(projectIds);

      // Check if all projects were found
      if (projects.length !== projectIds.length) {
        const foundIds = projects.map((project) => project.id);
        const missingIds = projectIds.filter((id) => !foundIds.includes(id));
        throw new NotFoundException(
          `Projects with IDs ${missingIds.join(', ')} not found`,
        );
      }

      updatedService.serviceProjects = projects;
    } else {
      // If no projects specified, set to empty array
      updatedService.serviceProjects = [];
    }
    // Save the replaced service
    return this.servicesRepository.save(updatedService);
  }

  /**
   * Remove a service by ID
   * @param id The ID of the service to remove
   * @returns Promise with the removal result
   */
  async remove(id: number): Promise<void> {
    // First find the service to ensure it exists
    const service = await this.findOne(id);

    // Remove the service
    await this.servicesRepository.remove(service);
  }
}
