import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profiles } from './entities/profiles.entity';
import { CreateProfileDto } from './dtos/create-profile.dto';
import { UpdateProfiletDto } from './dtos/update-profile.dto';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profiles)
    private profilesRepository: Repository<Profiles>,
  ) {}

  /**
   * Find all profiles
   * @returns Promise with array of all profiles
   */
  async findAll(): Promise<Profiles[]> {
    return this.profilesRepository.find();
  }
  /**
   * Find a specific profile by ID
   * @param id The ID of the profile to find
   * @returns Promise with the found profile
   */
  async findOne(id: number): Promise<Profiles> {
    const profile = await this.profilesRepository.findOne({
      where: { id },
    });

    if (!profile) {
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }

    return profile;
  }
  /**
   * Create a new profile
   * @param createProfileDto DTO containing profile data
   * @returns Promise with the created profile
   */
  async create(createProfileDto: CreateProfileDto): Promise<Profiles> {
    // Create a new profile instance
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

    // Save the profile to the database
    return this.profilesRepository.save(newProfile);
  }
  /**
   * Update an existing profile
   * @param id The ID of the profile to update
   * @param updateProfileDto DTO containing updated profile data
   * @returns Promise with the updated profile
   */
  async update(
    id: number,
    updateProfileDto: UpdateProfiletDto,
  ): Promise<Profiles> {
    const profile = await this.findOne(id);

    // Update the profile properties
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

    // Save the updated profile to the database
    return this.profilesRepository.save(profile);
  }
  /**
   * Replace an existing profile with a new one
   * @param id The ID of the profile to replace
   * @param createProfileDto DTO containing new profile data
   * @returns Promise with the replaced profile
   */
  async replace(
    id: number,
    createProfileDto: CreateProfileDto,
  ): Promise<Profiles> {
    // First, check if the profile exists
    await this.findOne(id);

    // Create a new profile instance
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

    // Save the new profile to the database
    return this.profilesRepository.save(newProfile);
  }
  /**
   * Delete a profile by ID
   * @param id The ID of the profile to delete
   * @returns Promise indicating the deletion result
   */
  async remove(id: number): Promise<void> {
    const result = await this.profilesRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Profile with ID ${id} not found`);
    }
  }
}
