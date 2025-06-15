import { Repository } from 'typeorm';
import { Profiles } from './entities/profiles.entity';
import { CreateProfileDto } from './dtos/create-profile.dto';
import { UpdateProfiletDto } from './dtos/update-profile.dto';
export declare class ProfilesService {
    private profilesRepository;
    constructor(profilesRepository: Repository<Profiles>);
    findAll(): Promise<Profiles[]>;
    findOne(id: number): Promise<Profiles>;
    create(createProfileDto: CreateProfileDto): Promise<Profiles>;
    update(id: number, updateProfileDto: UpdateProfiletDto): Promise<Profiles>;
    replace(id: number, createProfileDto: CreateProfileDto): Promise<Profiles>;
    remove(id: number): Promise<void>;
}
