import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contacts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  contactTitle: string;

  @Column()
  contactType: string;

  @Column()
  contactValue: string;
}
