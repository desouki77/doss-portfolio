import { ServicesService } from './services.service';
import { CreateServiceDto } from './dtos/create-service.dto';
import { UpdateServiceDto } from './dtos/update-service.dto';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    getServices(): Promise<import("./entities/services.entity").Services[]>;
    getService(id: number): Promise<import("./entities/services.entity").Services>;
    createService(createServiceDto: CreateServiceDto): Promise<import("./entities/services.entity").Services>;
    updateService(id: number, updateServiceDto: UpdateServiceDto): Promise<import("./entities/services.entity").Services>;
    replaceService(id: number, createServiceDto: CreateServiceDto): Promise<import("./entities/services.entity").Services>;
    deleteService(id: number): Promise<void>;
}
