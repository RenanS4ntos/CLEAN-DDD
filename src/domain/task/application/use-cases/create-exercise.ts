import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { Exercise } from '../../enterprise/entities/exercise'
import { ExerciseRepository } from '../repositories/exercise-repository'

interface CreateExerciseUseCaseRequest {
  authorId: string
  title: string
  content: string
  grade: string
}

interface CreateExerciseUseCaseResponse {
  exercise: Exercise
}

export class CreateExerciseUseCase {
  constructor(private exerciseRepository: ExerciseRepository) {}

  async execute({
    authorId,
    title,
    content,
  }: CreateExerciseUseCaseRequest): Promise<CreateExerciseUseCaseResponse> {
    const exercise = Exercise.create({
      authorId: new UniqueEntityID(authorId),
      title,
      content,
    })

    await this.exerciseRepository.create(exercise)

    return {
      exercise,
    }
  }
}
