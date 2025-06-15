import { Services } from 'src/services/entities/services.entity';
export declare class Projects {
    id: number;
    projectName: string;
    projectthumbnail: string;
    projectDescription: string;
    projectURL: string;
    projectGithub: string;
    projectPreview: string;
    projectImages: string[];
    services: Services[];
}
