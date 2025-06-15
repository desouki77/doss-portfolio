import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Services } from 'src/services/entities/services.entity';

@Entity()
export class Projects {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  projectName: string;

  @Column()
  projectthumbnail: string;

  @Column()
  projectDescription: string;

  @Column({ nullable: true })
  projectURL: string;

  @Column()
  projectGithub: string;

  @Column()
  projectPreview: string;

  @Column('simple-array')
  projectImages: string[];

  @ManyToMany(() => Services, (services) => services.serviceProjects)
  services: Services[];
}
