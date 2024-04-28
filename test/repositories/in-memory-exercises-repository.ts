import { ExerciseRepository } from '@/domain/task/application/repositories/exercise-repository'
import { Exercise } from '@/domain/task/enterprise/entities/exercise'

export class InMemoryExercisesRepository implements ExerciseRepository {
  public items: Exercise[] = []

  async create(exercise: Exercise) {
    this.items.push(exercise)
  }

  async save(exercise: Exercise) {
    const itemIndex = this.items.findIndex((item) => item.id === exercise.id)

    this.items[itemIndex] = exercise
  }

  async delete(exercise: Exercise) {
    const itemIndex = this.items.findIndex((item) => item.id === exercise.id)

    this.items.splice(itemIndex, 1)
  }

  async findById(id: string) {
    const exercise = this.items.find((item) => item.id.toString() === id)

    if (!exercise) {
      return null
    }

    return exercise
  }

  async findBySlug(slug: string) {
    const exercise = this.items.find((item) => item.slug.value === slug)

    if (!exercise) {
      return null
    }

    return exercise
  }
}
