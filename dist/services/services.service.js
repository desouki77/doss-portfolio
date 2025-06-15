"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const services_entity_1 = require("./entities/services.entity");
const projects_entity_1 = require("../projects/entities/projects.entity");
let ServicesService = class ServicesService {
    servicesRepository;
    projectsRepository;
    constructor(servicesRepository, projectsRepository) {
        this.servicesRepository = servicesRepository;
        this.projectsRepository = projectsRepository;
    }
    async findAll() {
        return this.servicesRepository.find({
            relations: ['serviceProjects'],
        });
    }
    async findOne(id) {
        const service = await this.servicesRepository.findOne({
            where: { id },
            relations: ['serviceProjects'],
        });
        if (!service) {
            throw new common_1.NotFoundException(`Service with ID ${id} not found`);
        }
        return service;
    }
    async create(createServiceDto) {
        const newService = this.servicesRepository.create({
            serviceName: createServiceDto.serviceName,
            serviceImage: createServiceDto.serviceImage,
            serviceDescription: createServiceDto.serviceDescription,
            serviceDetails: createServiceDto.serviceDetails,
        });
        if (createServiceDto.serviceProjects &&
            createServiceDto.serviceProjects.length > 0) {
            const projectIds = createServiceDto.serviceProjects;
            const projects = await this.projectsRepository.findByIds(projectIds);
            if (projects.length !== projectIds.length) {
                const foundIds = projects.map((project) => project.id);
                const missingIds = projectIds.filter((id) => !foundIds.includes(id));
                throw new common_1.NotFoundException(`Projects with IDs ${missingIds.join(', ')} not found`);
            }
            newService.serviceProjects = projects;
        }
        return this.servicesRepository.save(newService);
    }
    async update(id, updateServiceDto) {
        const service = await this.findOne(id);
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
        if (updateServiceDto.serviceProjects) {
            const projectIds = updateServiceDto.serviceProjects;
            const projects = await this.projectsRepository.findByIds(projectIds);
            if (projects.length !== projectIds.length) {
                const foundIds = projects.map((project) => project.id);
                const missingIds = projectIds.filter((id) => !foundIds.includes(id));
                throw new common_1.NotFoundException(`Projects with IDs ${missingIds.join(', ')} not found`);
            }
            service.serviceProjects = projects;
        }
        return this.servicesRepository.save(service);
    }
    async replace(id, updateServiceDto) {
        await this.findOne(id);
        const updatedService = this.servicesRepository.create({
            id,
            serviceName: updateServiceDto.serviceName,
            serviceImage: updateServiceDto.serviceImage,
            serviceDescription: updateServiceDto.serviceDescription,
            serviceDetails: updateServiceDto.serviceDetails,
        });
        if (updateServiceDto.serviceProjects &&
            updateServiceDto.serviceProjects.length > 0) {
            const projectIds = updateServiceDto.serviceProjects;
            const projects = await this.projectsRepository.findByIds(projectIds);
            if (projects.length !== projectIds.length) {
                const foundIds = projects.map((project) => project.id);
                const missingIds = projectIds.filter((id) => !foundIds.includes(id));
                throw new common_1.NotFoundException(`Projects with IDs ${missingIds.join(', ')} not found`);
            }
            updatedService.serviceProjects = projects;
        }
        else {
            updatedService.serviceProjects = [];
        }
        return this.servicesRepository.save(updatedService);
    }
    async remove(id) {
        const service = await this.findOne(id);
        await this.servicesRepository.remove(service);
    }
};
exports.ServicesService = ServicesService;
exports.ServicesService = ServicesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(services_entity_1.Services)),
    __param(1, (0, typeorm_1.InjectRepository)(projects_entity_1.Projects)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ServicesService);
//# sourceMappingURL=services.service.js.map