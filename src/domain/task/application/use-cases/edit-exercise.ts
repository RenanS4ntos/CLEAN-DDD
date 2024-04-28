import { ExerciseRepository } from '../repositories/exercise-repository'

interface EditExerciseUseCaseRequest {
  authorId: string
  exerciseId: string
  title: string
  content: string
}

interface EditExerciseUseCaseResponse {}

export class EditExerciseUseCase {
  constructor(private exerciseRepository: ExerciseRepository) {}

  async execute({
    exerciseId,
    authorId,
    title,
    content,
  }: EditExerciseUseCaseRequest): Promise<EditExerciseUseCaseResponse> {
    const exercise = await this.exerciseRepository.findById(exerciseId)

    if (!exercise) {
      throw new Error('Exercise not found.')
    }

    if (authorId !== exercise.authorId.toString()) {
      throw new Error('Not allowed to edit.')
    }

    exercise.title = title
    exercise.content = content

    await this.exerciseRepository.save(exercise)

    return {}
  }
}
