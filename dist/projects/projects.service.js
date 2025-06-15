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
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const projects_entity_1 = require("./entities/projects.entity");
let ProjectsService = class ProjectsService {
    projectsRepository;
    constructor(projectsRepository) {
        this.projectsRepository = projectsRepository;
    }
    async findAll() {
        return this.projectsRepository.find({
            relations: ['services'],
        });
    }
    async findOne(id) {
        const project = await this.projectsRepository.findOne({
            where: { id },
            relations: ['services'],
        });
        if (!project) {
            throw new common_1.NotFoundException(`Project with ID ${id} not found`);
        }
        return project;
    }
    async create(createProjectDto) {
        const newProject = this.projectsRepository.create({
            projectName: createProjectDto.projectName,
            projectthumbnail: createProjectDto.projectthumbnail,
            projectDescription: createProjectDto.projectDescription,
            projectURL: createProjectDto.projectURL,
            projectGithub: createProjectDto.projectGithub,
            projectPreview: createProjectDto.projectPreview,
            projectImages: createProjectDto.projectImages,
        });
        return this.projectsRepository.save(newProject);
    }
    async update(id, updateProjectDto) {
        const project = await this.findOne(id);
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
        return this.projectsRepository.save(project);
    }
    async replace(id, createProjectDto) {
        await this.findOne(id);
        const updatedProject = this.projectsRepository.create({
            id,
            projectName: createProjectDto.projectName,
            projectthumbnail: createProjectDto.projectthumbnail,
            projectDescription: createProjectDto.projectDescription,
            projectURL: createProjectDto.projectURL,
            projectGithub: createProjectDto.projectGithub,
            projectPreview: createProjectDto.projectPreview,
            projectImages: createProjectDto.projectImages,
        });
        return this.projectsRepository.save(updatedProject);
    }
    async remove(id) {
        const project = await this.findOne(id);
        await this.projectsRepository.remove(project);
    }
    async findByIds(ids) {
        return this.projectsRepository.findByIds(ids);
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(projects_entity_1.Projects)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProjectsService);
//# sourceMappingURL=projects.service.js.map