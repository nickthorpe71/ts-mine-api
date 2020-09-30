import { Resolver, Arg, Mutation, Int, Query, InputType, Field } from 'type-graphql';
import { Score } from '../entity/Score';

@InputType()
class ScoreInput {
  @Field()
  username: string

  @Field(() => Int)
  score: number
}

@Resolver()
export class ScoreResolver {
  // create
  @Mutation(() => Score) // Mutations are generally for updating or making changes to server
  async createScore(
    @Arg('options', () => ScoreInput) options: ScoreInput,
  ) {
    const score = await Score.create(options).save();
    return score;
  }

  // read
  @Query(() => [Score])
  scores() {
    return Score.find()
  }

  // update
  @Mutation(() => Boolean)
  async updateScore(
    @Arg('id', () => Int) id: number,
    @Arg('input', () => ScoreInput) input: ScoreInput
  ) {
    await Score.update({ id }, input);
    return true;
  }

  @Mutation(() => Boolean)
  async deleteScore(
    @Arg('id', () => Int) id: number
  ) {
    await Score.delete({ id });
    return true;
  }
}

