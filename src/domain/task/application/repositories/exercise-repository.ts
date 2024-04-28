import { Exercise } from '../../enterprise/entities/exercise'

export interface ExerciseRepository {
  create(exercise: Exercise): Promise<void>
  delete(exercise: Exercise): Promise<void>
  save(exercise: Exercise): Promise<void>

  findById(id: string): Promise<Exercise | null>
  findBySlug(slug: string): Promise<Exercise | null>
}
