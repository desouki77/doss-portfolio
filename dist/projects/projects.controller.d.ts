import { CreateProjectDto } from './dtos/create-project.dto';
import { UpdateProjectDto } from './dtos/update-project.dto';
import { ProjectsService } from './projects.service';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    getProjects(): Promise<import("./entities/projects.entity").Projects[]>;
    getProjectById(id: number): Promise<import("./entities/projects.entity").Projects>;
    createProject(createProjectDto: CreateProjectDto): Promise<import("./entities/projects.entity").Projects>;
    updateProject(id: number, updateProjectDto: UpdateProjectDto): Promise<import("./entities/projects.entity").Projects>;
    updateAllProject(id: number, createProjectDto: CreateProjectDto): Promise<import("./entities/projects.entity").Projects>;
    deleteProject(id: number): Promise<void>;
}
