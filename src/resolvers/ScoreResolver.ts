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
  @Mutation(() => Boolean) // Mutations are generally for updating or making changes to server
  async createScore(
    @Arg('options', () => ScoreInput) options: ScoreInput,
  ) {
    await Score.insert(options)
    return true;
  }

  @Query(() => [Score])
  scores() {
    return Score.find()
  }
}

