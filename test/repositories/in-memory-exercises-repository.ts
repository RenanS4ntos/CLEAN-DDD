import { ExerciseRepository } from '@/domain/task/application/repositories/exercise-repository'
import { Exercise } from '@/domain/task/enterprise/entities/exercise'

export class InMemoryExercisesRepository implements ExerciseRepository {
  public items: Exercise[] = []

  async findBySlug(slug: string) {
    const exercise = this.items.find((item) => item.slug.value === slug)

    if (!exercise) {
      return null
    }

    return exercise
  }

  async create(exercise: Exercise) {
    this.items.push(exercise)
  }
}
