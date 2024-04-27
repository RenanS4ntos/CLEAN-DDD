import { Exercise } from '../../enterprise/entities/exercise'
import { ExerciseRepository } from '../repositories/exercise-repository'

interface GetExerciseBySlugUseCaseRequest {
  slug: string
}

interface GetExerciseBySlugUseCaseResponse {
  exercise: Exercise
}

export class GetExerciseBySlugUseCase {
  constructor(private exerciseRepository: ExerciseRepository) {}

  async execute({
    slug,
  }: GetExerciseBySlugUseCaseRequest): Promise<GetExerciseBySlugUseCaseResponse> {
    const exercise = await this.exerciseRepository.findBySlug(slug)

    if (!exercise) {
      throw new Error('Exercise not found.')
    }

    return {
      exercise,
    }
  }
}
