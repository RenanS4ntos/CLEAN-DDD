import { ExerciseRepository } from '@/domain/task/application/repositories/exercise-repository'
import { Exercise } from '@/domain/task/enterprise/entities/exercise'

export class InMemoryExercisesRepository implements ExerciseRepository {
  public items: Exercise[] = []

  async create(exercise: Exercise) {
    this.items.push(exercise)
  }
}
