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
  @Mutation(() => Score) // Mutations are generally for updating or making changes to server
  async createScore(
    @Arg('options', () => ScoreInput) options: ScoreInput,
  ) {
    const score = await Score.create(options).save();
    return score;
  }

  @Query(() => [Score])
  scores() {
    return Score.find()
  }
}

