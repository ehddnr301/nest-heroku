import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Problem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  language!: string;

  @Column({ nullable: false })
  category!: string;

  @Column({ nullable: false })
  problemNumber!: number;

  @Column({ nullable: false })
  question!: string;

  @Column({ nullable: true })
  code?: string;

  @Column({ nullable: true })
  option?: string;

  @Column({ nullable: false })
  answer!: string;
}
