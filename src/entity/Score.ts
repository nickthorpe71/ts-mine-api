import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class Score extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  username: string

  @Field(() => Int)
  @Column()
  score: number
}