import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Page extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  isBook!: boolean;

  @Column({ nullable: false })
  title!: string;

  @Column({ nullable: false })
  introduction!: string;

  @Column({ nullable: false })
  imageUrl!: string;

  @Column({ nullable: false })
  hashTag!: string;

  @Column({ nullable: false })
  contentOrder!: string;

  @Column({ nullable: false })
  recommendation!: string;

  @Column({ nullable: false })
  link!: string;
}
