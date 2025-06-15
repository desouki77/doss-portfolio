import { Repository } from 'typeorm';
import { Services } from './entities/services.entity';
import { CreateServiceDto } from './dtos/create-service.dto';
import { UpdateServiceDto } from './dtos/update-service.dto';
import { Projects } from 'src/projects/entities/projects.entity';
export declare class ServicesService {
    servicesRepository: Repository<Services>;
    private projectsRepository;
    constructor(servicesRepository: Repository<Services>, projectsRepository: Repository<Projects>);
    findAll(): Promise<Services[]>;
    findOne(id: number): Promise<Services>;
    create(createServiceDto: CreateServiceDto): Promise<Services>;
    update(id: number, updateServiceDto: UpdateServiceDto): Promise<Services>;
    replace(id: number, updateServiceDto: CreateServiceDto): Promise<Services>;
    remove(id: number): Promise<void>;
}
