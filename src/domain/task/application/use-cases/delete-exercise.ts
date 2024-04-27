import { ExerciseRepository } from '../repositories/exercise-repository'

interface DeleteExerciseUseCaseRequest {
  authorId: string
  exerciseId: string
}

interface DeleteExerciseUseCaseResponse {}

export class DeleteExerciseUseCase {
  constructor(private exerciseRepository: ExerciseRepository) {}

  async execute({
    authorId,
    exerciseId,
  }: DeleteExerciseUseCaseRequest): Promise<DeleteExerciseUseCaseResponse> {
    const exercise = await this.exerciseRepository.findById(exerciseId)

    if (!exercise) {
      throw new Error('Exercise not found.')
    }

    if (authorId !== exercise.authorId.toString()) {
      throw new Error('Not allowed to delete.')
    }

    await this.exerciseRepository.delete(exercise)

    return {}
  }
}
