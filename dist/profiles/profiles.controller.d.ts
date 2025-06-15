import { CreateProfileDto } from './dtos/create-profile.dto';
import { UpdateProfiletDto } from './dtos/update-profile.dto';
import { ProfilesService } from './profiles.service';
export declare class ProfilesController {
    private profilesService;
    constructor(profilesService: ProfilesService);
    getProfiles(): Promise<import("./entities/profiles.entity").Profiles[]>;
    getProfileById(id: number): Promise<import("./entities/profiles.entity").Profiles>;
    createProfile(createProfileDto: CreateProfileDto): Promise<import("./entities/profiles.entity").Profiles>;
    updateProfile(id: number, updateProfileDto: UpdateProfiletDto): Promise<import("./entities/profiles.entity").Profiles>;
    updateAllProfile(id: number, createProfileDto: CreateProfileDto): Promise<import("./entities/profiles.entity").Profiles>;
    deleteProfile(id: number): Promise<void>;
}
