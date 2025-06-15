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
exports.ProfilesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const profiles_entity_1 = require("./entities/profiles.entity");
let ProfilesService = class ProfilesService {
    profilesRepository;
    constructor(profilesRepository) {
        this.profilesRepository = profilesRepository;
    }
    async findAll() {
        return this.profilesRepository.find();
    }
    async findOne(id) {
        const profile = await this.profilesRepository.findOne({
            where: { id },
        });
        if (!profile) {
            throw new common_1.NotFoundException(`Profile with ID ${id} not found`);
        }
        return profile;
    }
    async create(createProfileDto) {
        const newProfile = this.profilesRepository.create({
            profileTitle: createProfileDto.profileTitle,
            profileName: createProfileDto.profileName,
            profileImage: createProfileDto.profileImage,
            profileBio: createProfileDto.profileBio,
            profileSummary: createProfileDto.profileSummary,
            profileSkills: createProfileDto.profileSkills,
            profileExperience: createProfileDto.profileExperience,
            profileEducation: createProfileDto.profileEducation,
            profileGithub: createProfileDto.profileGithub,
            profileLinkedin: createProfileDto.profileLinkedin,
            profileEmail: createProfileDto.profileEmail,
        });
        return this.profilesRepository.save(newProfile);
    }
    async update(id, updateProfileDto) {
        const profile = await this.findOne(id);
        if (updateProfileDto.profileTitle) {
            profile.profileTitle = updateProfileDto.profileTitle;
        }
        if (updateProfileDto.profileName) {
            profile.profileName = updateProfileDto.profileName;
        }
        if (updateProfileDto.profileImage) {
            profile.profileImage = updateProfileDto.profileImage;
        }
        if (updateProfileDto.profileBio) {
            profile.profileBio = updateProfileDto.profileBio;
        }
        if (updateProfileDto.profileSummary) {
            profile.profileSummary = updateProfileDto.profileSummary;
        }
        if (updateProfileDto.profileSkills) {
            profile.profileSkills = updateProfileDto.profileSkills;
        }
        if (updateProfileDto.profileExperience) {
            profile.profileExperience = updateProfileDto.profileExperience;
        }
        if (updateProfileDto.profileEducation) {
            profile.profileEducation = updateProfileDto.profileEducation;
        }
        if (updateProfileDto.profileGithub) {
            profile.profileGithub = updateProfileDto.profileGithub;
        }
        if (updateProfileDto.profileLinkedin) {
            profile.profileLinkedin = updateProfileDto.profileLinkedin;
        }
        if (updateProfileDto.profileEmail) {
            profile.profileEmail = updateProfileDto.profileEmail;
        }
        return this.profilesRepository.save(profile);
    }
    async replace(id, createProfileDto) {
        await this.findOne(id);
        const newProfile = this.profilesRepository.create({
            profileTitle: createProfileDto.profileTitle,
            profileName: createProfileDto.profileName,
            profileImage: createProfileDto.profileImage,
            profileBio: createProfileDto.profileBio,
            profileSummary: createProfileDto.profileSummary,
            profileSkills: createProfileDto.profileSkills,
            profileExperience: createProfileDto.profileExperience,
            profileEducation: createProfileDto.profileEducation,
            profileGithub: createProfileDto.profileGithub,
            profileLinkedin: createProfileDto.profileLinkedin,
            profileEmail: createProfileDto.profileEmail,
        });
        return this.profilesRepository.save(newProfile);
    }
    async remove(id) {
        const result = await this.profilesRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Profile with ID ${id} not found`);
        }
    }
};
exports.ProfilesService = ProfilesService;
exports.ProfilesService = ProfilesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(profiles_entity_1.Profiles)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProfilesService);
//# sourceMappingURL=profiles.service.js.map