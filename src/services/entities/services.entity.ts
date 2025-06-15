import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Projects } from 'src/projects/entities/projects.entity';

@Entity()
export class Services {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  serviceName: string;

  @Column()
  serviceImage: string;

  @Column()
  serviceDescription: string;

  @Column({ nullable: true })
  serviceDetails: string;

  @ManyToMany(() => Projects)
  @JoinTable({
    name: 'service_projects',
    joinColumn: { name: 'service_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'project_id', referencedColumnName: 'id' },
  })
  serviceProjects: Projects[];
}
