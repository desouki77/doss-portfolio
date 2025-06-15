import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Profiles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  profileTitle: string;

  @Column()
  profileName: string;

  @Column()
  profileImage: string;

  @Column()
  profileBio: string;

  @Column()
  profileSummary: string;

  @Column()
  profileSkills: string;

  @Column()
  profileExperience: string;

  @Column({ nullable: true })
  profileEducation: string;

  @Column({ nullable: true })
  profileGithub: string;

  @Column({ nullable: true })
  profileLinkedin: string;

  @Column({ nullable: true })
  profileEmail: string;
}
