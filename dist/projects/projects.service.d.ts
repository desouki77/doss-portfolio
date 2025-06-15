import { Repository } from 'typeorm';
import { Projects } from './entities/projects.entity';
import { CreateProjectDto } from './dtos/create-project.dto';
import { UpdateProjectDto } from './dtos/update-project.dto';
export declare class ProjectsService {
    private projectsRepository;
    constructor(projectsRepository: Repository<Projects>);
    findAll(): Promise<Projects[]>;
    findOne(id: number): Promise<Projects>;
    create(createProjectDto: CreateProjectDto): Promise<Projects>;
    update(id: number, updateProjectDto: UpdateProjectDto): Promise<Projects>;
    replace(id: number, createProjectDto: CreateProjectDto): Promise<Projects>;
    remove(id: number): Promise<void>;
    findByIds(ids: number[]): Promise<Projects[]>;
}
